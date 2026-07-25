import { ArrowDown, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';
import type {
  CampaignAction,
  CampaignImageSource,
  CampaignStat,
} from './types';

export interface CinematicHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: CampaignImageSource;
  primaryAction: CampaignAction;
  secondaryAction?: CampaignAction;
  stats?: CampaignStat[];
  scrollLabel?: string;
  scrollHref?: string;
  className?: string;
}

export function CinematicHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  stats,
  scrollLabel,
  scrollHref = '#manual-index',
  className,
}: CinematicHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-[700px] overflow-hidden bg-[#0a0f14] pt-[60px] text-white lg:min-h-[760px] lg:pt-[72px]',
        className
      )}
    >
      <picture className="absolute inset-0 -z-30">
        {image.mobileSrc && (
          <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
        )}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          fetchPriority={image.priority ? 'high' : undefined}
          loading={image.priority ? 'eager' : undefined}
          decoding="async"
          className="size-full object-cover"
          style={{ objectPosition: image.position }}
        />
      </picture>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,8,12,.96)_0%,rgba(4,8,12,.82)_38%,rgba(4,8,12,.28)_70%,rgba(4,8,12,.58)_100%)] max-md:bg-[linear-gradient(0deg,rgba(4,8,12,.98)_0%,rgba(4,8,12,.84)_48%,rgba(4,8,12,.18)_100%)]" />
      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(108,232,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(108,232,255,.08)_1px,transparent_1px)] [mask-image:linear-gradient(to_right,black,transparent_72%)] [background-size:64px_64px] opacity-30" />

      <div className="mx-auto flex w-full max-w-[1440px] items-end px-5 pt-24 pb-14 sm:px-8 md:items-center md:py-24 lg:px-14">
        <div className="w-full max-w-[780px]">
          <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.3em] text-cyan-200 uppercase sm:text-xs">
            <span className="h-px w-9 bg-cyan-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="max-w-[760px] text-[clamp(2.65rem,7vw,6rem)] leading-[0.93] font-black tracking-[-0.035em] text-balance uppercase drop-shadow-2xl">
            {title}
          </h1>
          <p className="mt-6 max-w-[650px] text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CampaignLink
              action={primaryAction}
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-cyan-300 px-6 text-xs font-bold tracking-[0.16em] text-[#061116] uppercase shadow-[0_0_30px_rgba(103,232,249,.16)] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              {primaryAction.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </CampaignLink>
            {secondaryAction && (
              <CampaignLink
                action={secondaryAction}
                className="inline-flex min-h-12 items-center justify-center border border-white/25 bg-black/20 px-6 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm transition hover:border-white/55 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              />
            )}
          </div>

          {stats && stats.length > 0 && (
            <dl className="mt-10 grid max-w-[660px] grid-cols-2 border-y border-white/14 bg-black/15 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-white/12 px-4 py-3 last:border-r-0 sm:px-5"
                >
                  <dt className="text-[0.6rem] tracking-[0.18em] text-white/45 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      {scrollLabel && (
        <a
          href={scrollHref}
          className="absolute right-6 bottom-8 hidden min-h-10 items-center gap-2 py-2 text-[0.6rem] tracking-[0.22em] text-white/54 uppercase transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 md:flex lg:right-12"
        >
          {scrollLabel}
          <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
        </a>
      )}
    </section>
  );
}
