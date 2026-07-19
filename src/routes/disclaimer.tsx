import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialHero,
  PageContainer,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

export const Route = createFileRoute('/disclaimer')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.disclaimer.meta.title']({}, { locale }),
      description: m['campaign.disclaimer.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/disclaimer',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: DisclaimerPage,
});

function DisclaimerPage() {
  const sections = [
    {
      title: m['campaign.disclaimer.independent.title'](),
      body: m['campaign.disclaimer.independent.body'](),
    },
    {
      title: m['campaign.disclaimer.trademarks.title'](),
      body: m['campaign.disclaimer.trademarks.body'](),
    },
    {
      title: m['campaign.disclaimer.accuracy.title'](),
      body: m['campaign.disclaimer.accuracy.body'](),
    },
    {
      title: m['campaign.disclaimer.spoilers.title'](),
      body: m['campaign.disclaimer.spoilers.body'](),
    },
    {
      title: m['campaign.disclaimer.links.title'](),
      body: m['campaign.disclaimer.links.body'](),
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.legal_information']()}
        title={m['campaign.disclaimer.title']()}
        description={m['campaign.disclaimer.description']()}
      />
      <PageContainer>
        <article className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <SectionHeading title={section.title} />
              <p className="text-muted-foreground leading-8">{section.body}</p>
            </section>
          ))}
          <p className="border-border text-muted-foreground border-t pt-6 text-sm">
            {m['campaign.disclaimer.updated']()}
          </p>
        </article>
      </PageContainer>
    </CampaignPage>
  );
}
