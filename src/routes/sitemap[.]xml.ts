import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

const MISSION_SLUGS = [
  'the-pillar-of-autumn',
  'halo',
  'truth-and-reconciliation',
  'the-silent-cartographer',
  'assault-on-the-control-room',
  '343-guilty-spark',
  'the-library',
  'two-betrayals',
  'keyes',
  'the-maw',
  'meteor-incursion',
  'meteor-breakpoint',
  'meteor-extraction',
] as const;

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
};

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/missions', changeFrequency: 'weekly', priority: 0.95 },
  ...MISSION_SLUGS.map((slug) => ({
    path: `/missions/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
  { path: '/arsenal', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/enemies', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/vehicles', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/guides', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
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
