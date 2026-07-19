import { createFileRoute } from '@tanstack/react-router';

import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';

import {
  campaignHead,
  CampaignPage,
  EditorialCard,
  EditorialHero,
  EditorialList,
  PageContainer,
  SecondaryLink,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

export const Route = createFileRoute('/about')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.about.meta.title']({}, { locale }),
      description: m['campaign.about.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/about',
          title: loaderData.title,
          description: loaderData.description,
        })
      : {},
  component: AboutPage,
});

function AboutPage() {
  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.about_manual']()}
        title={m['campaign.about.title']()}
        description={m['campaign.about.description']()}
      />
      <PageContainer>
        <div className="grid gap-5 lg:grid-cols-3">
          <EditorialCard
            title={m['campaign.about.independent.title']()}
            description={m['campaign.about.independent.body']()}
          />
          <EditorialCard
            title={m['campaign.about.bilingual.title']()}
            description={m['campaign.about.bilingual.body']()}
          />
          <EditorialCard
            title={m['campaign.about.useful.title']()}
            description={m['campaign.about.useful.body']()}
          />
        </div>

        <section className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <SectionHeading
              eyebrow={m['campaign.about.method_label']()}
              title={m['campaign.about.method_title']()}
              description={m['campaign.about.method_description']()}
            />
            <EditorialList
              items={[
                m['campaign.about.method.source'](),
                m['campaign.about.method.separation'](),
                m['campaign.about.method.correction'](),
                m['campaign.about.method.spoiler'](),
              ]}
            />
          </div>
          <aside className="border-border bg-card rounded-xl border p-6">
            <h2 className="text-xl font-semibold">
              {m['campaign.about.read_disclaimer']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-7">
              {m['campaign.about.read_disclaimer_body']()}
            </p>
            <div className="mt-5">
              <SecondaryLink href="/disclaimer">
                {m['campaign.disclaimer.title']()}
              </SecondaryLink>
            </div>
          </aside>
        </section>
      </PageContainer>
    </CampaignPage>
  );
}
