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

export const Route = createFileRoute('/news')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;
    return {
      locale,
      title: m['campaign.news.meta.title']({}, { locale }),
      description: m['campaign.news.meta.description']({}, { locale }),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/news',
          title: loaderData.title,
          description: loaderData.description,
          article: true,
        })
      : {},
  component: NewsPage,
});

function NewsPage() {
  const releaseFacts = [
    m['campaign.news.fact.release'](),
    m['campaign.news.fact.early_access'](),
    m['campaign.news.fact.missions'](),
    m['campaign.news.fact.coop'](),
    m['campaign.news.fact.crossplay'](),
    m['campaign.news.fact.weapons'](),
  ];

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow={m['campaign.common.intelligence_update']()}
        title={m['campaign.news.title']()}
        description={m['campaign.news.description']()}
      />
      <PageContainer>
        <article className="mx-auto max-w-4xl">
          <p className="text-muted-foreground text-sm font-medium">
            {m['campaign.news.dateline']()}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {m['campaign.news.release_brief.title']()}
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-8">
            {m['campaign.news.release_brief.lead']()}
          </p>

          <div className="mt-8">
            <EditorialList items={releaseFacts} />
          </div>

          <div className="mt-10">
            <Notice>{m['campaign.news.source_note']()}</Notice>
          </div>

          <section className="mt-12">
            <SectionHeading title={m['campaign.news.coverage_title']()} />
            <div className="grid gap-5 sm:grid-cols-2">
              <EditorialCard
                title={m['campaign.news.coverage.launch.title']()}
                description={m['campaign.news.coverage.launch.body']()}
              />
              <EditorialCard
                title={m['campaign.news.coverage.manual.title']()}
                description={m['campaign.news.coverage.manual.body']()}
              />
            </div>
          </section>
        </article>
      </PageContainer>
    </CampaignPage>
  );
}
