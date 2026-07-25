import { createFileRoute } from '@tanstack/react-router';
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialHero,
  Notice,
  PageContainer,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

const TITLE =
  'Campaign Evolved Release – Early Access, Launch Time & Manual Updates';
const DESCRIPTION =
  'Track the verified Campaign Evolved early-access and global release schedule, current manual coverage, known-issue source and post-launch verification plan.';

const OFFICIAL_SOURCES = [
  {
    label: 'Halo: Campaign Evolved official game page',
    href: 'https://www.halowaypoint.com/en-us/games/halo-campaign-evolved',
  },
  {
    label: 'Halo Waypoint — Early Access Begins',
    href: 'https://www.halowaypoint.com/news/early-access-begins',
  },
  {
    label: 'Halo Support — Early Access release notes',
    href: 'https://support.halowaypoint.com/hc/en-us/articles/51174525772564-Halo-Campaign-Evolved-Release-Notes-Early-Access',
  },
  {
    label: 'Xbox Game Pass — July 2026 Wave 2',
    href: 'https://news.xbox.com/en-us/2026/07/21/xbox-game-pass-july-2026-wave-2/',
  },
] as const;

export const Route = createFileRoute('/news')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/news',
          title: TITLE,
          description: DESCRIPTION,
          article: true,
        })
      : {},
  component: NewsPage,
});

function NewsPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-07-19',
    dateModified: '2026-07-25',
    inLanguage: 'en',
    mainEntityOfPage: `${baseUrl}/news`,
    author: {
      '@type': 'Organization',
      name: 'Campaign Evolved Manual editorial desk',
      url: `${baseUrl}/about`,
    },
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Launch intelligence · updated July 25, 2026"
        title="Campaign Evolved release status"
        description="Premium early access is active. The global launch remains July 28, 2026, so systems facts are live while exact routes, performance results and collectible coordinates continue through release-build verification."
      />
      <PageContainer>
        <article className="mx-auto max-w-4xl">
          <Notice>
            <strong>Current window:</strong> Premium early access began July 23.
            The worldwide release is scheduled for July 28, 2026 at 8:00 a.m.
            PDT. Launch timing can vary by service or region, so confirm
            entitlement and download status on the platform you use.
          </Notice>

          <section className="mt-12">
            <SectionHeading
              eyebrow="Verified schedule"
              title="Two launch states, one content policy"
              description="The manual distinguishes first-party facts from observations tied to the early-access build."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="border-border bg-card rounded-xl border p-5">
                <CalendarDays
                  className="text-primary size-6"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground mt-4 text-xs font-semibold tracking-[0.14em] uppercase">
                  July 23, 2026
                </p>
                <h2 className="mt-1 text-xl font-semibold">
                  Premium early access
                </h2>
                <p className="text-muted-foreground mt-3 leading-7">
                  Eligible Premium and Collector’s Edition players can enter
                  early. Reviews and footage from this window are useful but
                  remain labeled by build and platform.
                </p>
              </article>
              <article className="border-border bg-card rounded-xl border p-5">
                <CheckCircle2
                  className="size-6 text-emerald-500"
                  aria-hidden="true"
                />
                <p className="text-muted-foreground mt-4 text-xs font-semibold tracking-[0.14em] uppercase">
                  July 28, 2026 · 8:00 a.m. PDT
                </p>
                <h2 className="mt-1 text-xl font-semibold">Global release</h2>
                <p className="text-muted-foreground mt-3 leading-7">
                  Standard access opens across the announced platforms, with
                  Xbox Game Pass Ultimate and PC Game Pass launch availability
                  included in the official schedule.
                </p>
              </article>
            </div>
          </section>

          <section className="mt-14">
            <SectionHeading
              eyebrow="Coverage state"
              title="What is safe to use now"
            />
            <div className="border-border divide-border divide-y overflow-hidden rounded-xl border">
              {[
                {
                  title: 'Official systems and inventory',
                  status: 'Live',
                  body: 'Co-op, the 17-weapon inventory, six officially listed vehicles, difficulty tools, 39 hidden Skulls plus three automatic unlocks, and 13 Terminals.',
                },
                {
                  title: 'Gameplay and counter guidance',
                  status: 'Live with labels',
                  body: 'Core-loop advice combines official mechanics with clearly separated editorial interpretation.',
                },
                {
                  title: 'Exact mission routes and collectibles',
                  status: 'Verification in progress',
                  body: 'Provisional articles stay outside the sitemap until every coordinate, checkpoint and no-return point has current-build evidence.',
                },
                {
                  title: 'Performance and known issues',
                  status: 'Follow official release notes',
                  body: 'Platform behavior and workarounds can change quickly. The live Halo Support release-note page remains the primary source.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-semibold">{item.title}</h2>
                    <span className="border-primary/25 bg-primary/5 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-3 leading-7">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <div className="flex items-start gap-3">
              <AlertTriangle
                className="mt-1 size-5 shrink-0 text-amber-500"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-2xl font-semibold">
                  Known source conflict being tracked
                </h2>
                <p className="text-muted-foreground mt-3 leading-7">
                  Current official and reference material does not consistently
                  name the third Operation: METEORITE mission. This manual will
                  not silently choose one label. The release-build mission menu
                  or a corrected first-party page will resolve the record.
                </p>
              </div>
            </div>
          </section>

          <section className="border-border bg-muted/30 mt-14 rounded-xl border p-6 sm:p-8">
            <SectionHeading
              eyebrow="Official source ledger"
              title="Confirm changing launch information"
            />
            <ul className="space-y-3">
              {OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary inline-flex min-h-10 items-center gap-2 py-2 font-medium underline-offset-4 hover:underline"
                  >
                    {source.label}
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
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
