import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  ShieldQuestion,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialHero,
  Notice,
  PageContainer,
  PrimaryLink,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

const TITLE =
  'Campaign Evolved Guides – Gameplay, Co-op, Missions & Collectibles';
const DESCRIPTION =
  'Find verified Campaign Evolved gameplay, co-op, mission, weapon, enemy, vehicle and video guides, plus the post-launch collectible verification queue.';

const LIVE_GUIDES = [
  {
    title: 'Gameplay and beginner guide',
    description:
      'Learn the shield-break and precision-finish loop, modern movement, stored equipment, difficulty tools and replay systems.',
    href: '/gameplay',
    meta: 'Core systems · spoiler-light',
  },
  {
    title: '13-mission briefing index',
    description:
      'Review the ten classic chapters and three Operation: METEORITE missions without exposing more story than preparation requires.',
    href: '/missions',
    meta: 'Mission order · provisional details',
  },
  {
    title: 'Complete weapon role matrix',
    description:
      'Compare all 17 weapons by range, faction, job and practical counter pairing, with a separate equipment reference.',
    href: '/arsenal',
    meta: '17 weapons · official inventory',
  },
  {
    title: 'Enemy counter database',
    description:
      'Identify shielded, armored, ranged, aerial and Flood pressure before choosing the first target and correct tool.',
    href: '/enemies',
    meta: 'Spoiler-light threat profiles',
  },
  {
    title: 'Vehicle operations guide',
    description:
      'Plan driver, gunner and passenger roles across the Warthog, Scorpion, Ghost, Wraith, Banshee and Shade.',
    href: '/vehicles',
    meta: '6 official vehicle entries',
  },
  {
    title: 'Top gameplay video library',
    description:
      'Browse official demonstrations, trailers, analysis, reviews and walkthroughs through lightweight click-to-load players.',
    href: '/videos',
    meta: '20-video snapshot · July 25',
  },
  {
    title: 'Launch and release briefing',
    description:
      'Check the release window, early access, editions, co-op support and the manual’s current verification state.',
    href: '/news',
    meta: 'Release facts · dated source check',
  },
] as const;

const VERIFICATION_QUEUE = [
  {
    title: 'All 39 hidden Skulls and 13 Terminals',
    reason:
      'Each coordinate, Rally Point and pickup trigger needs a current-build screenshot. The three auto-unlocked Skulls will be listed separately.',
  },
  {
    title: 'Complete mission walkthroughs',
    reason:
      'Existing mission pages remain outside the sitemap until routes, checkpoints, enemy waves and no-return points are verified in the release build.',
  },
  {
    title: 'How long to beat',
    reason:
      'Early estimates vary by difficulty, co-op group, exploration and Skulls. The manual will publish measured route samples rather than one false universal number.',
  },
  {
    title: 'Known issues and platform performance',
    reason:
      'Workarounds and performance modes change quickly. Every entry needs a platform, build number, checked date and official issue link.',
  },
] as const;

const QUICK_ANSWERS = [
  {
    question: 'Is there four-player co-op?',
    answer:
      'Yes. Online campaign co-op supports up to four players across PC, Xbox Series X|S and PlayStation 5. Console versions also support two-player split-screen.',
  },
  {
    question: 'Does cross-platform progression copy the current checkpoint?',
    answer:
      'No. Completed mission progress and supported account progression can travel, but a mid-mission checkpoint and the exact player position do not.',
  },
  {
    question: 'How many weapons are in the campaign?',
    answer:
      'The official inventory lists 17 usable firearms or melee weapons: the returning set plus nine additions. Frag and Plasma Grenades are tracked separately.',
  },
  {
    question: 'Are all 42 Skulls hidden in missions?',
    answer:
      'No. There are 39 hidden mission pickups. Three more modifiers unlock automatically after collection milestones, producing 42 usable Skulls in total.',
  },
] as const;

export const Route = createFileRoute('/guides')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/guides',
          title: TITLE,
          description: DESCRIPTION,
        })
      : {},
  component: GuidesPage,
});

function GuidesPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Campaign Evolved guides',
      url: `${baseUrl}/guides`,
      numberOfItems: LIVE_GUIDES.length,
      itemListElement: LIVE_GUIDES.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.title,
        url: `${baseUrl}${guide.href}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: QUICK_ANSWERS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Field manual index · reviewed July 25, 2026"
        title="Campaign Evolved guides"
        description="Start with a verified decision page, then move into mission detail only when you need it. Every live guide states its scope; every incomplete guide stays in the verification queue."
        actions={
          <PrimaryLink href="/gameplay">Start with gameplay</PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>
          This manual is being updated during the premium early-access window.
          Official facts are live now. Coordinates, timings, checkpoints and
          full-release performance claims wait for repeatable evidence.
        </Notice>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Available now"
            title="Choose the next decision"
            description="These pages are substantial enough to use and index. No account or login is required."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {LIVE_GUIDES.map((guide) => (
              <article
                key={guide.href}
                className="border-border bg-card group flex h-full flex-col rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  <p className="text-muted-foreground text-xs font-semibold tracking-[0.12em] uppercase">
                    {guide.meta}
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground mt-3 flex-1 leading-7">
                  {guide.description}
                </p>
                <Link
                  href={guide.href}
                  className="text-primary mt-6 inline-flex min-h-10 items-center gap-2 py-2 font-semibold underline-offset-4 group-hover:underline"
                >
                  Open guide
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Fast verification"
            title="Answers competitors often blur"
            description="These answers use first-party co-op, weapon and Skull documentation instead of repeating pre-release summaries."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {QUICK_ANSWERS.map((item) => (
              <article
                key={item.question}
                className="border-border bg-card rounded-xl border p-5"
              >
                <div className="flex items-start gap-3">
                  <ShieldQuestion
                    className="text-primary mt-0.5 size-5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-semibold">{item.question}</h2>
                    <p className="text-muted-foreground mt-2 leading-7">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Capture queue"
            title="What is deliberately not published as complete"
            description="A short page is not a finished guide. These topics become indexable only after the required evidence is captured."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {VERIFICATION_QUEUE.map((item) => (
              <article
                key={item.title}
                className="border-border bg-muted/25 rounded-xl border p-5"
              >
                <div className="flex items-center gap-2">
                  <Clock3
                    className="size-4 text-amber-500"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold tracking-[0.14em] text-amber-700 uppercase dark:text-amber-300">
                    Awaiting verified capture
                  </p>
                </div>
                <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
                <p className="text-muted-foreground mt-2 leading-7">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-border bg-muted/30 mt-16 rounded-xl border p-6 sm:p-8">
          <SectionHeading
            eyebrow="Primary source"
            title="Check the official player documentation"
            description="Purchase, account, support and active-service decisions should always be confirmed with the publisher."
          />
          <a
            href="https://support.halowaypoint.com/hc/en-us/sections/41602524602132-HALO-CAMPAIGN-EVOLVED"
            target="_blank"
            rel="noreferrer"
            className="text-primary inline-flex min-h-10 items-center gap-2 py-2 font-semibold underline-offset-4 hover:underline"
          >
            Open Halo Support
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </section>
      </PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </CampaignPage>
  );
}
