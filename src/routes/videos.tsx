import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { getLocale } from '@/paraglide/runtime.js';
import { LiteYouTubeEmbed } from '@/components/campaign';
import {
  campaignVideos,
  VIDEO_SNAPSHOT_DATE,
  videoCategories,
} from '@/content/campaign/videos';

import {
  campaignHead,
  CampaignPage,
  EditorialHero,
  Notice,
  PageContainer,
  SectionHeading,
  type CampaignLocale,
} from './-campaign-editorial';

const PAGE_TITLE =
  'Campaign Evolved Videos – Trailers, Gameplay & Walkthroughs';
const PAGE_DESCRIPTION =
  'Watch the most-viewed Campaign Evolved trailers, gameplay demos, reviews and walkthroughs from a verified July 25, 2026 YouTube snapshot.';

export const Route = createFileRoute('/videos')({
  loader: () => ({ locale: getLocale() as CampaignLocale }),
  head: ({ loaderData }) =>
    campaignHead({
      locale: loaderData?.locale ?? 'en',
      path: '/videos',
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    }),
  component: VideosPage,
});

function VideosPage() {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const pageUrl = `${baseUrl}/videos`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#video-ranking`,
        name: 'Campaign Evolved YouTube video snapshot',
        description: PAGE_DESCRIPTION,
        url: pageUrl,
        dateModified: VIDEO_SNAPSHOT_DATE,
        numberOfItems: campaignVideos.length,
        itemListOrder: 'https://schema.org/ItemListOrderDescending',
        itemListElement: campaignVideos.map((video) => ({
          '@type': 'ListItem',
          position: video.rank,
          name: video.title,
          url: video.watchUrl,
          item: {
            '@id': `${pageUrl}#video-${video.videoId}`,
          },
        })),
      },
      ...campaignVideos.map((video) => ({
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video-${video.videoId}`,
        name: video.title,
        description: `${video.title}, published by ${video.channel}. View count recorded in the Campaign Evolved Manual snapshot dated ${VIDEO_SNAPSHOT_DATE}.`,
        thumbnailUrl: [`${baseUrl}${video.thumbnail}`],
        uploadDate: video.publishedDate,
        duration: video.durationIso,
        contentUrl: video.watchUrl,
        embedUrl: video.embedUrl,
        inLanguage: 'en',
        author: {
          '@type': 'Organization',
          name: video.channel,
        },
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: {
            '@type': 'WatchAction',
          },
          userInteractionCount: video.viewCountSnapshot,
        },
      })),
    ],
  };

  return (
    <CampaignPage>
      <EditorialHero
        eyebrow="Video intelligence"
        title="Campaign Evolved Videos"
        description="A performance-conscious watch center for official trailers, gameplay demonstrations, commentary and full campaign runs. Players load only after you choose a video."
      />
      <PageContainer>
        <Notice>
          Ranking snapshot: July 25, 2026. We searched multiple relevant YouTube
          queries sorted by view count, sampled four result pages per query,
          removed unrelated legacy Halo results, deduplicated by video ID, and
          verified public watch-page metadata. Counts change continuously, and
          regional or personalized search results may differ.
        </Notice>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="border-border bg-card rounded-full border px-3 py-1.5 font-medium">
            {campaignVideos.length} verified videos
          </span>
          <span className="border-border bg-card rounded-full border px-3 py-1.5 font-medium">
            No player loads before a click
          </span>
          <span className="border-border bg-card rounded-full border px-3 py-1.5 font-medium">
            Spoilers clearly marked
          </span>
        </div>

        {videoCategories.map((category) => {
          const videos = campaignVideos.filter(
            (video) => video.category === category
          );
          const headingId = `videos-${category
            .toLowerCase()
            .replace(/[^a-z]+/g, '-')}`;

          return (
            <section
              key={category}
              className="mt-16"
              aria-labelledby={headingId}
            >
              <div id={headingId}>
                <SectionHeading
                  eyebrow={`${String(videos.length).padStart(2, '0')} entries`}
                  title={category}
                  description={categoryDescription(category)}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {videos.map((video) => (
                  <article
                    key={video.videoId}
                    className="border-border bg-card overflow-hidden rounded-xl border shadow-sm"
                  >
                    <LiteYouTubeEmbed video={video} />
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                        <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-1">
                          Rank {video.rank}
                        </span>
                        {video.spoiler ? (
                          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-amber-800 dark:text-amber-200">
                            Spoilers
                          </span>
                        ) : (
                          <span className="border-border text-muted-foreground rounded-full border px-2.5 py-1">
                            Spoiler-light
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 text-xl leading-7 font-semibold tracking-tight">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm font-medium">
                        {video.channel}
                      </p>
                      <dl className="border-border text-muted-foreground mt-5 grid grid-cols-2 gap-4 border-t pt-4 text-xs">
                        <div>
                          <dt className="font-semibold tracking-wide uppercase">
                            Published
                          </dt>
                          <dd className="mt-1">
                            <time dateTime={video.publishedDate}>
                              {formatDate(video.publishedDate)}
                            </time>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-semibold tracking-wide uppercase">
                            Views at snapshot
                          </dt>
                          <dd className="mt-1">{video.viewCountLabel}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
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

function categoryDescription(
  category: (typeof videoCategories)[number]
): string {
  switch (category) {
    case 'Official':
      return 'Reveal films, story trailers and developer presentations published by official or platform partner channels.';
    case 'Gameplay':
      return 'Extended demonstrations and recorded sessions that show combat, mission flow and difficulty settings in motion.';
    case 'Reviews & Analysis':
      return 'Independent reactions and buyer-focused commentary. Treat opinion as editorial context, not official confirmation.';
    case 'Walkthroughs':
      return 'Long-form campaign coverage for players who want to follow a complete run. Expect major spoilers.';
  }
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
