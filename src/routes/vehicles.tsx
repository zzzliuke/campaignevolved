import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialCard,
  EditorialHero,
  PageContainer,
  PrimaryLink,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

export const Route = createFileRoute('/vehicles')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.vehicles.meta.title']({}, { locale }),
      description: m['campaign.vehicles.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/vehicles',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: VehiclesPage,
});

function VehiclesPage() {
  const roles = [
    {
      title: m['campaign.vehicles.scout.title'](),
      description: m['campaign.vehicles.scout.body'](),
      tactic: m['campaign.vehicles.scout.tactic'](),
    },
    {
      title: m['campaign.vehicles.armor.title'](),
      description: m['campaign.vehicles.armor.body'](),
      tactic: m['campaign.vehicles.armor.tactic'](),
    },
    {
      title: m['campaign.vehicles.air.title'](),
      description: m['campaign.vehicles.air.body'](),
      tactic: m['campaign.vehicles.air.tactic'](),
    },
    {
      title: m['campaign.vehicles.transport.title'](),
      description: m['campaign.vehicles.transport.body'](),
      tactic: m['campaign.vehicles.transport.tactic'](),
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.mobility_reference']()}
        title={m['campaign.vehicles.title']()}
        description={m['campaign.vehicles.description']()}
        actions={
          <PrimaryLink href="/guides">
            {m['campaign.common.open_guides']()}
          </PrimaryLink>
        }
      />
      <PageContainer>
        <SectionHeading
          eyebrow={m['campaign.vehicles.roles_label']()}
          title={m['campaign.vehicles.roles_title']()}
          description={m['campaign.vehicles.roles_description']()}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((role) => (
            <EditorialCard
              key={role.title}
              title={role.title}
              description={role.description}
            >
              <p className="border-border mt-5 border-t pt-4 text-sm leading-6">
                <span className="font-semibold">
                  {m['campaign.vehicles.crew_note']()}
                </span>{' '}
                <span className="text-muted-foreground">{role.tactic}</span>
              </p>
            </EditorialCard>
          ))}
        </div>
        <section className="border-border bg-muted/30 mt-14 rounded-xl border p-6 sm:p-8">
          <SectionHeading title={m['campaign.vehicles.coop_title']()} />
          <p className="text-muted-foreground max-w-3xl leading-8">
            {m['campaign.vehicles.coop_body']()}
          </p>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
