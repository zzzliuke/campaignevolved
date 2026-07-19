import handler from '@tanstack/react-start/server-entry';

import { paraglideMiddleware } from './paraglide/server.js';

// On Cloudflare Workers, stash the binding env (D1, ASSETS, …) on globalThis
// so synchronous code paths (e.g. the db() singleton with DATABASE_PROVIDER=d1)
// can reach bindings without threading the request context through every call.
// The specifier is kept non-literal so bundlers leave the import to runtime;
// outside workerd the import rejects and we just move on.
const CF_WORKERS_MODULE = 'cloudflare:workers';
let cfEnvPromise: Promise<void> | null = null;

function ensureCloudflareEnv(): Promise<void> {
  if (!cfEnvPromise) {
    cfEnvPromise = import(/* @vite-ignore */ CF_WORKERS_MODULE)
      .then((mod) => {
        (globalThis as any).__CF_ENV__ = mod.env;
      })
      .catch(() => {
        // Not running on Cloudflare Workers — nothing to stash.
      });
  }
  return cfEnvPromise;
}

function withSecurityHeaders(response: Response, secure: boolean): Response {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '0');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  headers.set(
    'Permissions-Policy',
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(self), usb=()'
  );

  if (secure) {
    headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
    headers.set(
      'Content-Security-Policy',
      "base-uri 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests"
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Custom server entry — wraps every request in Paraglide's middleware so
// getLocale() resolves per-request (AsyncLocalStorage) during SSR.
export default {
  async fetch(req: Request): Promise<Response> {
    await ensureCloudflareEnv();

    const url = new URL(req.url);
    if (url.hostname === 'www.campaignevolved.com') {
      url.hostname = 'campaignevolved.com';
      url.protocol = 'https:';
      return withSecurityHeaders(Response.redirect(url, 308), true);
    }

    const response = await paraglideMiddleware(req, () => handler.fetch(req));
    return withSecurityHeaders(response, url.protocol === 'https:');
  },
};
