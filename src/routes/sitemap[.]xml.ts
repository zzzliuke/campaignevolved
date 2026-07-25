import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

type SitemapEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified: string;
};

const LAST_CONTENT_REVIEW = '2026-07-25';

const STATIC_ENTRIES: SitemapEntry[] = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/gameplay',
    changeFrequency: 'weekly',
    priority: 0.95,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/missions',
    changeFrequency: 'weekly',
    priority: 0.95,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/arsenal',
    changeFrequency: 'monthly',
    priority: 0.85,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/enemies',
    changeFrequency: 'monthly',
    priority: 0.85,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/vehicles',
    changeFrequency: 'monthly',
    priority: 0.85,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/guides',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/videos',
    changeFrequency: 'weekly',
    priority: 0.85,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/news',
    changeFrequency: 'weekly',
    priority: 0.75,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/about',
    changeFrequency: 'yearly',
    priority: 0.5,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/disclaimer',
    changeFrequency: 'yearly',
    priority: 0.4,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: LAST_CONTENT_REVIEW,
  },
  {
    path: '/terms-of-service',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: LAST_CONTENT_REVIEW,
  },
];

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

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function urlFor(path: string): string {
  return `${canonicalOrigin()}${path}`;
}

function entryXml(entry: SitemapEntry): string {
  return [
    '  <url>',
    `    <loc>${escapeXml(urlFor(entry.path))}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority.toFixed(2)}</priority>`,
    '  </url>',
  ].join('\n');
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...STATIC_ENTRIES.map(entryXml),
          '</urlset>',
          '',
        ].join('\n');

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          },
        });
      },
    },
  },
});
