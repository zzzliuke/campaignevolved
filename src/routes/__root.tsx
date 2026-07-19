/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  type ErrorComponentProps,
} from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { ThemeProvider } from 'next-themes';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { getQueryClient } from '@/lib/query-client';
import { getLocale } from '@/paraglide/runtime.js';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { Plausible } from '@/components/analytics/plausible';
import { CustomerService } from '@/components/customer-service';
import { GoogleOneTap } from '@/components/google-one-tap';
import { Toaster } from '@/components/ui/sonner';

import '@fontsource-variable/inter';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/libre-baskerville/400-italic.css';
import '@/styles/globals.css';

// Analytics IDs live in the DB config (1h-cached service). Fetched through a
// server function so Drizzle and database code never reach the client bundle.
const getAnalyticsConfigs = createServerFn().handler(async () => {
  const { getAllConfigs } = await import('@/modules/config/service');
  const configs = await getAllConfigs();
  return {
    gaId: configs.google_analytics_id?.trim() || '',
    plausibleDomain: configs.plausible_domain?.trim() || '',
    plausibleSrc: configs.plausible_src?.trim() || '',
    crispWebsiteId:
      configs.crisp_enabled === 'true'
        ? configs.crisp_website_id?.trim() || ''
        : '',
    tawkPropertyId:
      configs.tawk_enabled === 'true'
        ? configs.tawk_property_id?.trim() || ''
        : '',
    tawkWidgetId:
      configs.tawk_enabled === 'true'
        ? configs.tawk_widget_id?.trim() || ''
        : '',
  };
});

export const Route = createRootRoute({
  loader: () => getAnalyticsConfigs(),
  head: () => {
    const locale = getLocale();
    const defaultTitle = `${envConfigs.app_name} – Missions, Walkthroughs & Guides`;

    // Canonical and alternate-language links belong to individual routes.
    // Keeping them out of the root prevents child pages from inheriting the
    // homepage URL. Child route metadata overrides these safe defaults.
    return {
      meta: [
        { charSet: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        { title: defaultTitle },
        { name: 'description', content: envConfigs.app_description },
        { name: 'application-name', content: envConfigs.app_name },
        { name: 'apple-mobile-web-app-title', content: envConfigs.app_name },
        { name: 'theme-color', content: '#071014' },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: envConfigs.app_name },
        {
          property: 'og:locale',
          content: locale === 'zh' ? 'zh_CN' : 'en_US',
        },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: envConfigs.app_description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: envConfigs.app_description },
      ],
      links: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/logo.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    };
  },
  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootComponent() {
  const analytics = Route.useLoaderData();

  return (
    <QueryClientProvider client={getQueryClient()}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Outlet />
        <Toaster position="top-center" richColors />
        <GoogleOneTap />
        {analytics?.gaId ? (
          <GoogleAnalytics measurementId={analytics.gaId} />
        ) : null}
        {analytics?.plausibleDomain ? (
          <Plausible
            domain={analytics.plausibleDomain}
            src={analytics.plausibleSrc || undefined}
          />
        ) : null}
        <CustomerService
          crispWebsiteId={analytics?.crispWebsiteId || undefined}
          tawkPropertyId={analytics?.tawkPropertyId || undefined}
          tawkWidgetId={analytics?.tawkWidgetId || undefined}
        />
      </ThemeProvider>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  const isChinese = getLocale() === 'zh';
  const copy = isChinese
    ? {
        eyebrow: '导航信号中断',
        title: '未找到这个页面',
        description: '坐标可能已变更，或该手册条目尚未发布。',
        action: '返回首页',
      }
    : {
        eyebrow: 'NAVIGATION SIGNAL LOST',
        title: 'Page not found',
        description:
          'These coordinates may have changed, or this manual entry is not yet available.',
        action: 'Return home',
      };

  return (
    <main
      className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
      aria-labelledby="not-found-title"
    >
      <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
        {copy.eyebrow}
      </p>
      <p
        className="font-mono text-7xl font-bold tracking-tight"
        aria-hidden="true"
      >
        404
      </p>
      <h1 id="not-found-title" className="text-3xl font-bold">
        {copy.title}
      </h1>
      <p className="text-muted-foreground max-w-md">{copy.description}</p>
      <Link
        href="/"
        className="border-primary/50 hover:bg-primary/10 focus-visible:ring-primary rounded-sm border px-5 py-3 text-sm font-semibold underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        {copy.action}
      </Link>
    </main>
  );
}

function RootError({ error, reset }: ErrorComponentProps) {
  const isChinese = getLocale() === 'zh';
  const copy = isChinese
    ? {
        eyebrow: '系统提示',
        title: '页面暂时无法载入',
        description: '手册系统遇到临时故障，请重试或返回首页。',
        retry: '重新尝试',
        home: '返回首页',
      }
    : {
        eyebrow: 'SYSTEM NOTICE',
        title: 'Unable to load this page',
        description:
          'The manual encountered a temporary fault. Try again or return home.',
        retry: 'Try again',
        home: 'Return home',
      };

  return (
    <main
      className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center"
      aria-labelledby="root-error-title"
      role="alert"
    >
      <p className="text-destructive text-xs font-semibold tracking-[0.3em] uppercase">
        {copy.eyebrow}
      </p>
      <h1 id="root-error-title" className="text-3xl font-bold">
        {copy.title}
      </h1>
      <p className="text-muted-foreground max-w-md">{copy.description}</p>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="bg-muted mt-2 max-w-lg overflow-auto rounded p-4 text-left text-xs">
          {error.message}
        </pre>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="bg-primary text-primary-foreground focus-visible:ring-primary rounded-sm px-5 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {copy.retry}
        </button>
        <Link
          href="/"
          className="border-border hover:bg-muted focus-visible:ring-primary rounded-sm border px-5 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {copy.home}
        </Link>
      </div>
    </main>
  );
}
