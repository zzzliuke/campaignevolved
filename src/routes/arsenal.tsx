import { createFileRoute } from '@tanstack/react-router';
import { Crosshair, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';
import {
  EQUIPMENT,
  REFERENCE_SOURCES,
  WEAPONS,
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
  'Campaign Evolved Weapons Guide – Complete Arsenal & Counter Roles';
const DESCRIPTION =
  'Compare all 17 Campaign Evolved weapons by range, battlefield role, best use and practical loadout pairing, plus grenades and stored equipment.';

export const Route = createFileRoute('/arsenal')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/arsenal',
          title: TITLE,
          description: DESCRIPTION,
        })
      : {},
  component: ArsenalPage,
});

function ArsenalPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Campaign Evolved weapon list',
    url: `${baseUrl}/arsenal`,
    numberOfItems: WEAPONS.length,
    itemListElement: WEAPONS.map((weapon, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: weapon.name,
      description: `${weapon.role}. Best for ${weapon.bestFor.toLowerCase()}.`,
    })),
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Verified systems reference · July 25, 2026"
        title="Campaign Evolved weapons guide"
        description="The official inventory contains 17 usable firearms or melee weapons: eight returning Combat Evolved staples and nine additions from later Halo sandboxes. Use this matrix to fill encounter roles, not to chase a context-free tier list."
        actions={
          <PrimaryLink href="/gameplay">Learn the combat loop</PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>
          <strong>Evidence status: Official inventory.</strong> Names and roles
          are based on Halo Support. The field notes are editorial
          interpretations and avoid unverified damage values, hidden stats, or
          universal rankings.
        </Notice>

        <section className="mt-12" aria-labelledby="weapon-matrix-title">
          <SectionHeading
            eyebrow="17-weapon matrix"
            title="Match the weapon to the job"
            description="A dependable pair normally covers two different jobs: shield break plus precision finish, close control plus long-range safety, or infantry pressure plus anti-vehicle damage."
          />
          <div className="border-border bg-card overflow-x-auto rounded-xl border shadow-sm">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm">
              <caption className="sr-only" id="weapon-matrix-title">
                All Campaign Evolved weapons by faction, range, role, and best
                use
              </caption>
              <thead className="bg-muted/60 text-foreground">
                <tr>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Weapon
                  </th>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Family
                  </th>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Range
                  </th>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Role
                  </th>
                  <th className="px-5 py-4 font-semibold" scope="col">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-border divide-y">
                {WEAPONS.map((weapon) => (
                  <tr key={weapon.name} className="hover:bg-muted/25">
                    <th
                      scope="row"
                      className="text-foreground px-5 py-4 font-semibold"
                    >
                      <span className="block">{weapon.name}</span>
                      <span className="text-primary mt-1 block text-[0.65rem] font-semibold tracking-[0.1em] uppercase">
                        {weapon.introduced}
                      </span>
                    </th>
                    <td className="text-muted-foreground px-5 py-4">
                      {weapon.family}
                    </td>
                    <td className="text-muted-foreground px-5 py-4">
                      {weapon.range}
                    </td>
                    <td className="text-muted-foreground px-5 py-4">
                      {weapon.role}
                    </td>
                    <td className="text-muted-foreground max-w-md px-5 py-4 leading-6">
                      {weapon.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="field-notes-title">
          <SectionHeading
            eyebrow="Editorial application"
            title="Field notes for every weapon"
            description="These notes translate the official role descriptions into a decision you can make during a mission. They are guidance, not datamined statistics."
          />
          <div
            id="field-notes-title"
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {WEAPONS.map((weapon) => (
              <article
                key={weapon.name}
                className="border-border bg-card rounded-xl border p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{weapon.name}</h3>
                  <Crosshair
                    className="text-primary mt-0.5 size-5 shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  {weapon.fieldNote}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Grenades and stored pickups"
            title="Equipment changes the timing of a fight"
            description="Campaign Evolved lets players store Overshield and Active Camo, then activate them when the encounter calls for it."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {EQUIPMENT.map((item) => (
              <article
                key={item.name}
                className="border-border bg-card rounded-xl border p-5"
              >
                <div className="flex items-center gap-3">
                  {item.name.includes('Grenade') ? (
                    <Sparkles
                      className="text-primary size-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ShieldCheck
                      className="text-primary size-5"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 leading-7">
                  {item.use}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-border bg-muted/30 mt-16 rounded-xl border p-6 sm:p-8">
          <SectionHeading
            eyebrow="Source ledger"
            title="Where this inventory was verified"
          />
          <ul className="space-y-3">
            {REFERENCE_SOURCES.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary inline-flex min-h-10 items-center gap-2 py-2 font-medium underline-offset-4 hover:underline"
                >
                  {source.name}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
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
