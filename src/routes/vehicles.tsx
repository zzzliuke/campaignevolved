import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink, Gauge, Route as RouteIcon, Users } from 'lucide-react';

import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';
import { REFERENCE_SOURCES, VEHICLES } from '@/content/campaign/reference';

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

const TITLE = 'Campaign Evolved Vehicles Guide – Roles, Crews & Counterplay';
const DESCRIPTION =
  'Compare the Warthog, Scorpion, Ghost, Wraith, Banshee and Shade in Campaign Evolved, with crew plans, strongest uses and common failure modes.';

export const Route = createFileRoute('/vehicles')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/vehicles',
          title: TITLE,
          description: DESCRIPTION,
        })
      : {},
  component: VehiclesPage,
});

function VehiclesPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Campaign Evolved vehicles',
    url: `${baseUrl}/vehicles`,
    numberOfItems: VEHICLES.length,
    itemListElement: VEHICLES.map((vehicle, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: vehicle.name,
      description: `${vehicle.role}. ${vehicle.strongestUse}`,
    })),
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Mobility reference · verified July 25, 2026"
        title="Campaign Evolved vehicle operations"
        description="Vehicles are encounter tools, not disposable shortcuts. A clean run starts with an exit direction, defined crew roles, and a plan for the infantry lane the vehicle cannot cover."
        actions={
          <PrimaryLink href="/gameplay">Read the gameplay guide</PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>
          <strong>Official inventory scope.</strong> Halo Support currently
          lists the Warthog, Scorpion, Ghost, Wraith, Banshee, and Shade. Other
          vehicles reported in new mission footage remain outside this
          “complete” list until the final build and official documentation
          agree.
        </Notice>

        <section className="mt-12">
          <SectionHeading
            eyebrow="Crew doctrine"
            title="Plan the run before entering the vehicle"
            description="Four-player online co-op makes role clarity more important. One driver call should control direction, while passengers own threats and safe dismount timing."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: RouteIcon,
                title: 'Driver',
                body: 'Owns route, speed, facing, and the decision to disengage. Call the next turn before the gunner loses the firing lane.',
              },
              {
                icon: Gauge,
                title: 'Gunner or operator',
                body: 'Prioritizes anti-vehicle weapons, fixed turrets, and exposed heavy infantry instead of chasing every small target.',
              },
              {
                icon: Users,
                title: 'Passengers',
                body: 'Cover blind sides, preserve anti-armor ammunition, and dismount together before a narrow or heavily mined approach.',
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
            eyebrow="Official vehicle roles"
            title="Six machines, six different jobs"
            description="The strongest use describes the advantage to protect. The failure mode shows the condition that turns that advantage into a liability."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {VEHICLES.map((vehicle) => (
              <article
                key={vehicle.name}
                className="border-border bg-card overflow-hidden rounded-xl border shadow-sm"
              >
                <header className="border-border bg-muted/35 flex items-start justify-between gap-4 border-b px-5 py-5 sm:px-6">
                  <div>
                    <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
                      {vehicle.side}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      {vehicle.name}
                    </h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {vehicle.role}
                    </p>
                  </div>
                  <span className="border-primary/25 bg-primary/5 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                    {vehicle.evidence}
                  </span>
                </header>
                <dl className="grid gap-5 p-5 sm:p-6">
                  <div>
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Crew
                    </dt>
                    <dd className="mt-2 font-medium">{vehicle.crew}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Strongest use
                    </dt>
                    <dd className="text-muted-foreground mt-2 leading-7">
                      {vehicle.strongestUse}
                    </dd>
                  </div>
                  <div className="border-border border-t pt-5">
                    <dt className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Common failure mode
                    </dt>
                    <dd className="text-muted-foreground mt-2 leading-7">
                      {vehicle.failureMode}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="border-border bg-muted/30 mt-16 rounded-xl border p-6 sm:p-8">
          <SectionHeading
            eyebrow="What changed"
            title="The expanded vehicle sandbox"
            description="Campaign Evolved adds enemy vehicle hijacking, lets players drive the Wraith, offers modern and classic Warthog controls, and expands the Warthog to carry a four-player fireteam. Enemies can attempt to hijack player vehicles too."
          />
          <div className="flex flex-wrap gap-x-6 gap-y-3">
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
