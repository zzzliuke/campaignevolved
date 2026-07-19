import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

function canonicalOrigin(): string {
  const configured = envConfigs.app_url.replace(/\/+$/, '');
  if (import.meta.env.PROD && !/^https:\/\//i.test(configured)) {
    return 'https://campaignevolved.com';
  }
  if (import.meta.env.PROD && /localhost|127\.0\.0\.1/i.test(configured)) {
    return 'https://campaignevolved.com';
  }
  return configured || 'https://campaignevolved.com';
}

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => {
        const body = [
          'User-agent: *',
          'Allow: /',
          'Disallow: /admin',
          'Disallow: /settings',
          'Disallow: /api/',
          'Disallow: /*?*sort=',
          'Disallow: /*?*filter=',
          'Disallow: /*?*search=',
          'Disallow: /*?*page=',
          'Disallow: /*?*redirect=',
          '',
          `Sitemap: ${canonicalOrigin()}/sitemap.xml`,
          '',
        ].join('\n');

        return new Response(body, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          },
        });
      },
    },
  },
});
