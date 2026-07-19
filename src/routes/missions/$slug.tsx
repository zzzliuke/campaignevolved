import { createFileRoute, notFound } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';

import { getMissionEntries } from '../-campaign-content';
import {
  Breadcrumbs,
  campaignHead,
  CampaignPage,
  EditorialHero,
  EditorialList,
  Notice,
  PageContainer,
  SecondaryLink,
  SectionHeading,
  type CampaignLocale,
} from '../-campaign-editorial';

export const Route = createFileRoute('/missions/$slug')({
  loader: ({ params }) => {
    const locale = getLocale() as CampaignLocale;
    const mission = getMissionEntries(locale).find(
      (entry) => entry.slug === params.slug
    );
    if (!mission) throw notFound();

    return {
      locale,
      mission,
      title: m['campaign.mission_detail.meta.title'](
        { mission: mission.title },
        { locale }
      ),
      description: m['campaign.mission_detail.meta.description'](
        { mission: mission.title, summary: mission.summary },
        { locale }
      ),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: `/missions/${loaderData.mission.slug}`,
          title: loaderData.title,
          description: loaderData.description,
          article: true,
        })
      : {},
  component: MissionDetailPage,
});

function MissionDetailPage() {
  const { locale, mission, title, description } = Route.useLoaderData();
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const missionUrl = localizeUrl(`${baseUrl}/missions/${mission.slug}`, {
    locale,
  }).href;
  const missionsUrl = localizeUrl(`${baseUrl}/missions`, { locale }).href;
  const homeUrl = localizeUrl(`${baseUrl}/`, { locale }).href;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description,
        url: missionUrl,
        mainEntityOfPage: missionUrl,
        inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
        datePublished: '2026-07-19',
        dateModified: '2026-07-19',
        author: {
          '@type': 'Organization',
          name: 'Campaign Evolved Manual',
          url: homeUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Campaign Evolved Manual',
          url: homeUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.svg`,
          },
        },
        image: `${baseUrl}/images/campaign/campaign-evolved-manual-og.webp`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: m['campaign.common.home'](),
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: m['campaign.missions.title'](),
            item: missionsUrl,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: mission.title,
            item: missionUrl,
          },
        ],
      },
    ],
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={`${mission.number} · ${mission.group}`}
        title={mission.title}
        description={mission.summary}
        actions={
          <SecondaryLink href="/missions">
            {m['campaign.mission_detail.all_missions']()}
          </SecondaryLink>
        }
      />
      <PageContainer>
        <Breadcrumbs
          ariaLabel={m['campaign.common.breadcrumb']()}
          items={[
            { label: m['campaign.common.home'](), href: '/' },
            { label: m['campaign.missions.title'](), href: '/missions' },
            { label: mission.title },
          ]}
        />

        <Notice>
          {mission.provisional
            ? m['campaign.mission_detail.meteor_notice']()
            : m['campaign.mission_detail.planning_notice']()}
        </Notice>

        <article className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-12">
            <section>
              <SectionHeading title={m['campaign.mission_detail.overview']()} />
              <p className="text-muted-foreground leading-8">
                {mission.overview}
              </p>
            </section>

            <section>
              <SectionHeading
                title={m['campaign.mission_detail.recommended_approach']()}
              />
              <p className="text-muted-foreground leading-8">
                {mission.approach}
              </p>
            </section>

            <section>
              <SectionHeading
                title={m['campaign.mission_detail.objective_sequence']()}
                description={m['campaign.mission_detail.objective_note']()}
              />
              <ol className="space-y-4">
                {mission.objectives.map((objective, index) => (
                  <li
                    key={objective}
                    className="border-border bg-card flex gap-4 rounded-lg border p-4"
                  >
                    <span className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-1 leading-7">
                      {objective}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <SectionHeading
                title={m['campaign.mission_detail.encounter_warning']()}
              />
              <Notice>{mission.warning}</Notice>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="border-border bg-card rounded-xl border p-5">
              <h2 className="text-lg font-semibold">
                {m['campaign.mission_detail.checklist']()}
              </h2>
              <div className="mt-4">
                <EditorialList items={mission.checklist} />
              </div>
            </section>
            <section className="border-border bg-card rounded-xl border p-5">
              <h2 className="text-lg font-semibold">
                {m['campaign.mission_detail.coop_notes']()}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-7">
                {mission.coop}
              </p>
            </section>
            <section className="border-border rounded-xl border p-5">
              <h2 className="text-lg font-semibold">
                {m['campaign.mission_detail.related_reference']()}
              </h2>
              <nav className="mt-4 flex flex-col items-start gap-3">
                <SecondaryLink href="/arsenal">
                  {m['campaign.arsenal.title']()}
                </SecondaryLink>
                <SecondaryLink href="/enemies">
                  {m['campaign.enemies.title']()}
                </SecondaryLink>
                <SecondaryLink href="/vehicles">
                  {m['campaign.vehicles.title']()}
                </SecondaryLink>
              </nav>
            </section>
          </aside>
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
