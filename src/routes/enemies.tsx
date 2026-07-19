import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialCard,
  EditorialHero,
  Notice,
  PageContainer,
  PrimaryLink,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

export const Route = createFileRoute('/enemies')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.enemies.meta.title']({}, { locale }),
      description: m['campaign.enemies.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/enemies',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: EnemiesPage,
});

function EnemiesPage() {
  const profiles = [
    {
      title: m['campaign.enemies.infantry.title'](),
      description: m['campaign.enemies.infantry.body'](),
      tactic: m['campaign.enemies.infantry.tactic'](),
    },
    {
      title: m['campaign.enemies.shielded.title'](),
      description: m['campaign.enemies.shielded.body'](),
      tactic: m['campaign.enemies.shielded.tactic'](),
    },
    {
      title: m['campaign.enemies.support.title'](),
      description: m['campaign.enemies.support.body'](),
      tactic: m['campaign.enemies.support.tactic'](),
    },
    {
      title: m['campaign.enemies.armored.title'](),
      description: m['campaign.enemies.armored.body'](),
      tactic: m['campaign.enemies.armored.tactic'](),
    },
    {
      title: m['campaign.enemies.outbreak.title'](),
      description: m['campaign.enemies.outbreak.body'](),
      tactic: m['campaign.enemies.outbreak.tactic'](),
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.threat_database']()}
        title={m['campaign.enemies.title']()}
        description={m['campaign.enemies.description']()}
        actions={
          <PrimaryLink href="/arsenal">
            {m['campaign.common.open_arsenal']()}
          </PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>{m['campaign.enemies.editorial_notice']()}</Notice>
        <section className="mt-12">
          <SectionHeading
            eyebrow={m['campaign.enemies.reading_label']()}
            title={m['campaign.enemies.profiles_title']()}
            description={m['campaign.enemies.profiles_description']()}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile) => (
              <EditorialCard
                key={profile.title}
                title={profile.title}
                description={profile.description}
              >
                <p className="border-border mt-5 border-t pt-4 text-sm leading-6">
                  <span className="font-semibold">
                    {m['campaign.enemies.tactical_note']()}
                  </span>{' '}
                  <span className="text-muted-foreground">
                    {profile.tactic}
                  </span>
                </p>
              </EditorialCard>
            ))}
          </div>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
