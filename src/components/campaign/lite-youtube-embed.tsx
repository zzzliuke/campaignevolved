import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { CampaignVideo } from '@/content/campaign/videos';

export interface LiteYouTubeEmbedProps {
  video: CampaignVideo;
  priority?: boolean;
  className?: string;
}

export function LiteYouTubeEmbed({
  video,
  priority = false,
  className,
}: LiteYouTubeEmbedProps) {
  const [activated, setActivated] = useState(false);

  return (
    <figure className={cn('overflow-hidden rounded-lg', className)}>
      <div className="bg-muted relative aspect-video overflow-hidden">
        {activated ? (
          <iframe
            className="absolute inset-0 size-full border-0"
            src={`${video.embedUrl}?autoplay=1&rel=0`}
            title={`${video.title} — YouTube video player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="group focus-visible:outline-primary absolute inset-0 size-full cursor-pointer overflow-hidden text-left focus-visible:outline-3 focus-visible:outline-offset-[-3px]"
            onClick={() => setActivated(true)}
            aria-label={`Play ${video.title} from ${video.channel}`}
          >
            <img
              src={video.thumbnail}
              alt=""
              width={1280}
              height={720}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              decoding="async"
              className="size-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <span
              className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10"
              aria-hidden="true"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-105 group-hover:bg-red-500 motion-reduce:transition-none">
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </span>
            </span>
            <span className="absolute right-3 bottom-3 rounded bg-black/85 px-2 py-1 font-mono text-xs font-semibold text-white">
              {video.duration}
            </span>
          </button>
        )}
      </div>
      <figcaption className="sr-only">
        {video.title} by {video.channel}
      </figcaption>
      <a
        href={video.watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card text-muted-foreground hover:text-foreground focus-visible:outline-primary inline-flex min-h-11 w-full items-center justify-end gap-1.5 border-x border-b px-3 py-2 text-xs font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
        aria-label={`Watch ${video.title} on YouTube in a new tab`}
      >
        Watch on YouTube
        <ExternalLink className="size-3.5" aria-hidden="true" />
      </a>
    </figure>
  );
}
