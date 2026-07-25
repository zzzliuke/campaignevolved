import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';

const PUBLIC_SECTIONS = [
  {
    path: '',
    title: 'Campaign Evolved Manual',
    summary:
      'The canonical English homepage and starting point for gameplay, mission, guide, video and systems references.',
  },
  {
    path: '/gameplay',
    title: 'Gameplay',
    summary:
      'Explains the campaign loop, encounter flow, weapons-and-vehicles sandbox, co-op coordination and replay planning.',
  },
  {
    path: '/missions',
    title: 'Missions',
    summary:
      'A spoiler-aware campaign index covering the ten classic missions and three Operation: Meteor missions.',
  },
  {
    path: '/arsenal',
    title: 'Arsenal',
    summary:
      'Organizes weapons by combat role, shield pressure, range, ammunition economy and co-op value.',
  },
  {
    path: '/enemies',
    title: 'Enemies',
    summary:
      'Explains threat priority, battlefield behavior, pressure patterns and practical counterplay.',
  },
  {
    path: '/vehicles',
    title: 'Vehicles',
    summary:
      'Covers scouting, armor, air support, transport, crew assignments and safe recovery routes.',
  },
  {
    path: '/guides',
    title: 'Guides',
    summary:
      'Practical preparation for first runs, co-op, difficulty, collectibles, accessibility and repeat clears.',
  },
  {
    path: '/videos',
    title: 'Videos',
    summary:
      'A curated, source-linked collection of high-interest trailers, gameplay footage, previews and analysis.',
  },
  {
    path: '/news',
    title: 'News',
    summary:
      'A concise record of verified release information and the manual editorial update plan.',
  },
  {
    path: '/about',
    title: 'About',
    summary:
      'Describes the independent status, source hierarchy, verification process, correction policy and spoiler policy.',
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    summary:
      'Explains independence, trademarks, changing information, spoilers and third-party links.',
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

export const Route = createFileRoute('/llms-full.txt')({
  server: {
    handlers: {
      GET: () => {
        const origin = canonicalOrigin();
        const lines = [
          '# Campaign Evolved Manual',
          '',
          '> Independent English field manual for Campaign Evolved.',
          '',
          '## Purpose',
          '',
          'Campaign Evolved Manual helps players understand the campaign loop, prepare missions, plan loadouts, coordinate co-op, identify threats, operate vehicles and find reliable video references.',
          '',
          '## Public reference pages',
          '',
          ...PUBLIC_SECTIONS.flatMap((section) => [
            `### ${section.title}`,
            '',
            `URL: ${origin}${section.path}`,
            '',
            section.summary,
            '',
          ]),
          '## Editorial standards',
          '',
          '- Canonical public content is published in English.',
          '- Official specifications are separated from third-party reporting and editorial strategy.',
          '- Every changing or pre-release claim should retain a source and review date.',
          '- Provisional material is not presented as verified in-game fact.',
          '- Mission indexes stay spoiler-aware; detailed walkthroughs can reveal objective and encounter order.',
          '- External video links identify their source and do not imply affiliation or endorsement.',
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
