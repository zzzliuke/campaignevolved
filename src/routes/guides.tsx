import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialCard,
  EditorialHero,
  EditorialList,
  Notice,
  PageContainer,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

export const Route = createFileRoute('/guides')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.guides.meta.title']({}, { locale }),
      description: m['campaign.guides.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/guides',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: GuidesPage,
});

function GuidesPage() {
  const guides = [
    {
      title: m['campaign.guides.first_run.title'](),
      body: m['campaign.guides.first_run.body'](),
      steps: [
        m['campaign.guides.first_run.step1'](),
        m['campaign.guides.first_run.step2'](),
        m['campaign.guides.first_run.step3'](),
      ],
    },
    {
      title: m['campaign.guides.coop.title'](),
      body: m['campaign.guides.coop.body'](),
      steps: [
        m['campaign.guides.coop.step1'](),
        m['campaign.guides.coop.step2'](),
        m['campaign.guides.coop.step3'](),
      ],
    },
    {
      title: m['campaign.guides.difficulty.title'](),
      body: m['campaign.guides.difficulty.body'](),
      steps: [
        m['campaign.guides.difficulty.step1'](),
        m['campaign.guides.difficulty.step2'](),
        m['campaign.guides.difficulty.step3'](),
      ],
    },
    {
      title: m['campaign.guides.collectibles.title'](),
      body: m['campaign.guides.collectibles.body'](),
      steps: [
        m['campaign.guides.collectibles.step1'](),
        m['campaign.guides.collectibles.step2'](),
        m['campaign.guides.collectibles.step3'](),
      ],
    },
    {
      title: m['campaign.guides.accessibility.title'](),
      body: m['campaign.guides.accessibility.body'](),
      steps: [
        m['campaign.guides.accessibility.step1'](),
        m['campaign.guides.accessibility.step2'](),
        m['campaign.guides.accessibility.step3'](),
      ],
    },
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.operations_desk']()}
        title={m['campaign.guides.title']()}
        description={m['campaign.guides.description']()}
      />
      <PageContainer>
        <Notice>{m['campaign.guides.scope_notice']()}</Notice>
        <section className="mt-12">
          <SectionHeading
            eyebrow={m['campaign.guides.playbook_label']()}
            title={m['campaign.guides.playbooks_title']()}
            description={m['campaign.guides.playbooks_description']()}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {guides.map((guide) => (
              <EditorialCard
                key={guide.title}
                title={guide.title}
                description={guide.body}
              >
                <div className="border-border mt-5 border-t pt-5">
                  <EditorialList items={guide.steps} />
                </div>
              </EditorialCard>
            ))}
          </div>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
