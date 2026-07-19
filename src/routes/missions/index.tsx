import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import { getMissionEntries } from '../-campaign-content';
import {
  campaignHead,
  CampaignPage,
  EditorialCard,
  EditorialHero,
  Notice,
  PageContainer,
  SectionHeading,
  type CampaignLocale,
} from '../-campaign-editorial';

export const Route = createFileRoute('/missions/')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.missions.meta.title']({}, { locale }),
      description: m['campaign.missions.meta.description']({}, { locale }),
      missions: getMissionEntries(locale),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/missions',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: MissionsPage,
});

function MissionsPage() {
  const { missions } = Route.useLoaderData();

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.field_manual']()}
        title={m['campaign.missions.title']()}
        description={m['campaign.missions.description']()}
      />
      <PageContainer>
        <Notice>{m['campaign.missions.prerelease_notice']()}</Notice>

        <section className="mt-12" aria-labelledby="mission-index-heading">
          <SectionHeading
            eyebrow={m['campaign.missions.verified_label']()}
            title={m['campaign.missions.index_title']()}
            description={m['campaign.missions.index_description']()}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {missions.map((mission) => (
              <EditorialCard
                key={mission.slug}
                eyebrow={`${mission.number} · ${mission.group}`}
                title={mission.title}
                description={mission.summary}
                href={`/missions/${mission.slug}`}
                linkLabel={m['campaign.common.open_briefing']()}
              >
                {mission.provisional ? (
                  <p className="text-muted-foreground mt-4 text-xs font-medium">
                    {m['campaign.missions.editorial_label_notice']()}
                  </p>
                ) : null}
              </EditorialCard>
            ))}
          </div>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
