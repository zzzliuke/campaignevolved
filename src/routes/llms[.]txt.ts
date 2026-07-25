import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

const PUBLIC_PAGES = [
  {
    path: '',
    title: 'Campaign Evolved Manual',
    description:
      'English field manual for gameplay systems, missions, guides, videos and verified release information.',
  },
  {
    path: '/gameplay',
    title: 'Campaign Evolved Gameplay',
    description:
      'Overview of the campaign loop, combat, expanded sandbox, co-op and progression.',
  },
  {
    path: '/missions',
    title: 'Campaign Evolved Missions',
    description:
      'Spoiler-aware index for the classic campaign and Operation: Meteor.',
  },
  {
    path: '/arsenal',
    title: 'Campaign Evolved Arsenal',
    description:
      'Weapon roles, shield pressure, ammunition planning and squad loadouts.',
  },
  {
    path: '/enemies',
    title: 'Campaign Evolved Enemies',
    description:
      'Threat roles, battlefield behavior and practical counterplay.',
  },
  {
    path: '/vehicles',
    title: 'Campaign Evolved Vehicles',
    description: 'Vehicle roles, crew coordination and route planning.',
  },
  {
    path: '/guides',
    title: 'Campaign Evolved Guides',
    description:
      'Practical playbooks for first runs, co-op, difficulty, collectibles and accessibility.',
  },
  {
    path: '/videos',
    title: 'Campaign Evolved Videos',
    description:
      'Curated trailers, gameplay, previews and analysis with source links.',
  },
  {
    path: '/news',
    title: 'Campaign Evolved News',
    description: 'Verified release facts and manual update coverage.',
  },
  {
    path: '/about',
    title: 'About Campaign Evolved Manual',
    description:
      'Editorial standards, source policy and independent-site disclosure.',
  },
] as const;

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

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: () => {
        const origin = canonicalOrigin();
        const lines = [
          '# Campaign Evolved Manual',
          '',
          '> Independent English guide to Campaign Evolved gameplay, missions, combat systems, videos and verified release information.',
          '',
          '## Core pages',
          '',
          ...PUBLIC_PAGES.map(
            (page) =>
              `- [${page.title}](${origin}${page.path}): ${page.description}`
          ),
          '',
          '## Editorial scope',
          '',
          '- Official facts, third-party reporting and editorial strategy are identified separately.',
          '- Pre-release or unverified details are labeled and revised after authoritative or hands-on confirmation.',
          '- Mission indexes are spoiler-aware; detailed walkthroughs may discuss objective and encounter order.',
          '',
        ];

        return new Response(lines.join('\n'), {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          },
        });
      },
    },
  },
});
