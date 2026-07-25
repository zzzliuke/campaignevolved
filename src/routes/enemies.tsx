import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink, Radar, ShieldAlert, Target } from 'lucide-react';

import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';
import {
  ENEMIES,
  REFERENCE_SOURCES,
  type EvidenceLevel,
} from '@/content/campaign/reference';

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
  'Campaign Evolved Enemies Guide – Weaknesses, Roles & Counter Plans';
const DESCRIPTION =
  'Identify Campaign Evolved Covenant, Sacristan, Flood and Forerunner threats, then match each battlefield role with a practical counter plan.';

function evidenceClasses(evidence: EvidenceLevel): string {
  switch (evidence) {
    case 'Official':
      return 'border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-200';
    case 'Early-access tested':
      return 'border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200';
    case 'Community-reported':
      return 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-200';
    case 'Needs recheck':
      return 'border-rose-400/30 bg-rose-400/10 text-rose-700 dark:text-rose-200';
  }
}

export const Route = createFileRoute('/enemies')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/enemies',
          title: TITLE,
          description: DESCRIPTION,
        })
      : {},
  component: EnemiesPage,
});

function EnemiesPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Campaign Evolved enemy counter guide',
    url: `${baseUrl}/enemies`,
    numberOfItems: ENEMIES.length,
    itemListElement: ENEMIES.map((enemy, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: enemy.name,
      description: `${enemy.battlefieldRole}. ${enemy.counterPlan}`,
    })),
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Threat database · verified July 25, 2026"
        title="Campaign Evolved enemies and counters"
        description="Read an encounter by role before committing ammunition. Shielded leaders, ranged support, heavy armor, swarms and aerial pressure each demand a different first target and a different tool."
        actions={
          <PrimaryLink href="/arsenal">Open the weapon matrix</PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>
          <strong>Spoiler-light scope.</strong> This page names enemy families
          and combat behavior but avoids story outcomes and mission reveals.
          Exact mission placements belong in walkthroughs after full-release
          verification.
        </Notice>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Decision framework"
            title="Three questions before the first shot"
            description="The correct counter is usually determined by what controls the arena, what can recover, and what closes distance fastest."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Radar,
                title: 'Who owns the sightline?',
                body: 'Remove snipers, turrets, beams, and elevated support before crossing open ground.',
              },
              {
                icon: ShieldAlert,
                title: 'Who can reset the fight?',
                body: 'Once a shield breaks, finish that target before it retreats and recovers behind the group.',
              },
              {
                icon: Target,
                title: 'Who collapses your space?',
                body: 'Stop charging, swarming, or hijacking threats before they force a rushed weapon swap.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-border bg-card rounded-xl border p-5"
              >
                <item.icon className="text-primary size-6" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="text-muted-foreground mt-2 leading-7">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Named threat profiles"
            title="Identify, isolate, counter"
            description="Each profile separates the first visual read from the action to take. Evidence labels show whether the underlying enemy inclusion is official or early-access tested."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {ENEMIES.map((enemy) => (
              <article
                key={enemy.name}
                className="border-border bg-card flex h-full flex-col rounded-xl border p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                      {enemy.faction}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      {enemy.name}
                    </h2>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${evidenceClasses(enemy.evidence)}`}
                  >
                    {enemy.evidence}
                  </span>
                </div>
                <p className="text-foreground mt-4 font-medium">
                  {enemy.battlefieldRole}
                </p>
                <dl className="mt-5 grid gap-5">
                  <div>
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      First read
                    </dt>
                    <dd className="text-muted-foreground mt-2 leading-7">
                      {enemy.firstRead}
                    </dd>
                  </div>
                  <div className="border-border border-t pt-5">
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Counter plan
                    </dt>
                    <dd className="text-muted-foreground mt-2 leading-7">
                      {enemy.counterPlan}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="border-border bg-muted/30 mt-16 rounded-xl border p-6 sm:p-8">
          <SectionHeading
            eyebrow="Verification policy"
            title="What this database does not guess"
            description="Enemy health, exact scaling by player count, spawn composition, and mission-by-mission placement are build-specific. They will be added only after repeatable capture."
          />
          <ul className="text-muted-foreground grid gap-3 leading-7 sm:grid-cols-2">
            <li>• No invented damage or health numbers.</li>
            <li>• No universal weapon tier applied to every difficulty.</li>
            <li>• No assumed co-op health or AI scaling formula.</li>
            <li>• No collectible or spawn coordinates without evidence.</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {REFERENCE_SOURCES.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary inline-flex min-h-10 items-center gap-2 py-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                {source.name}
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
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
