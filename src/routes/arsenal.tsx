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

export const Route = createFileRoute('/arsenal')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.arsenal.meta.title']({}, { locale }),
      description: m['campaign.arsenal.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/arsenal',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: ArsenalPage,
});

function ArsenalPage() {
  const categories = [
    {
      title: m['campaign.arsenal.precision.title'](),
      description: m['campaign.arsenal.precision.body'](),
      note: m['campaign.arsenal.precision.note'](),
    },
    {
      title: m['campaign.arsenal.plasma.title'](),
      description: m['campaign.arsenal.plasma.body'](),
      note: m['campaign.arsenal.plasma.note'](),
    },
    {
      title: m['campaign.arsenal.close.title'](),
      description: m['campaign.arsenal.close.body'](),
      note: m['campaign.arsenal.close.note'](),
    },
    {
      title: m['campaign.arsenal.explosive.title'](),
      description: m['campaign.arsenal.explosive.body'](),
      note: m['campaign.arsenal.explosive.note'](),
    },
    {
      title: m['campaign.arsenal.support.title'](),
      description: m['campaign.arsenal.support.body'](),
      note: m['campaign.arsenal.support.note'](),
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.systems_reference']()}
        title={m['campaign.arsenal.title']()}
        description={m['campaign.arsenal.description']()}
        actions={
          <PrimaryLink href="/missions">
            {m['campaign.common.browse_missions']()}
          </PrimaryLink>
        }
      />
      <PageContainer>
        <Notice>{m['campaign.arsenal.verified_notice']()}</Notice>
        <section className="mt-12">
          <SectionHeading
            eyebrow={m['campaign.arsenal.loadout_label']()}
            title={m['campaign.arsenal.categories_title']()}
            description={m['campaign.arsenal.categories_description']()}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <EditorialCard
                key={category.title}
                title={category.title}
                description={category.description}
              >
                <p className="border-border text-muted-foreground mt-5 border-t pt-4 text-sm leading-6">
                  {category.note}
                </p>
              </EditorialCard>
            ))}
          </div>
        </section>
        <section className="border-border mt-14 rounded-xl border p-6 sm:p-8">
          <SectionHeading title={m['campaign.arsenal.nine_title']()} />
          <p className="text-muted-foreground max-w-3xl leading-8">
            {m['campaign.arsenal.nine_body']()}
          </p>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
