import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';
import { LiteYouTubeEmbed } from '@/components/campaign';
import { campaignVideos } from '@/content/campaign/videos';

export function VideoShowcase() {
  const featuredVideos = campaignVideos.slice(0, 3);

  return (
    <section className="bg-[#080d12] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-amber-300 uppercase">
              {m['campaign.home.videos.eyebrow']()}
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
              {m['campaign.home.videos.title']()}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              {m['campaign.home.videos.description']()}
            </p>
          </div>
          <Link
            href="/videos"
            className="inline-flex min-h-11 items-center gap-3 self-start border border-white/20 px-5 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:self-auto"
          >
            {m['campaign.home.videos.action']()}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredVideos.map((video) => (
            <article
              key={video.videoId}
              className="group overflow-hidden border border-white/12 bg-white/[0.035] transition hover:border-cyan-300/35 hover:bg-white/[0.055]"
            >
              <LiteYouTubeEmbed video={video} className="rounded-none" />
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-[0.62rem] font-semibold tracking-[0.12em] uppercase">
                  <span className="text-cyan-300">
                    {m['campaign.home.videos.rank']({ rank: video.rank })}
                  </span>
                  <span className="text-white/42">
                    {video.category} ·{' '}
                    {m['campaign.home.videos.views']({
                      views: video.viewCountLabel,
                    })}
                  </span>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-bold text-white">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-white/48">{video.channel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
