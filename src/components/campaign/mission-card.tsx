import { ArrowRight, ShieldAlert } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';

export interface MissionCardProps {
  missionNumber: string;
  title: string;
  phase: string;
  description: string;
  difficultyNote?: string;
  href: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  actionLabel?: string;
  className?: string;
}

export function MissionCard({
  missionNumber,
  title,
  phase,
  description,
  difficultyNote,
  href,
  image,
  actionLabel = 'Open mission briefing',
  className,
}: MissionCardProps) {
  return (
    <article
      className={cn(
        'group grid overflow-hidden border border-slate-400/15 bg-[#101820] transition hover:border-cyan-300/38 hover:bg-[#121d26]',
        image && 'md:grid-cols-[220px_1fr]',
        className
      )}
    >
      {image && (
        <div className="relative min-h-44 overflow-hidden bg-slate-900 md:min-h-full">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-75 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#101820]" />
        </div>
      )}

      <div className="flex min-w-0 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <span className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan-300 uppercase">
            {missionNumber}
          </span>
          <span className="text-[0.62rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
            {phase}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-[0.035em] text-white uppercase">
          {title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {difficultyNote ? (
            <p className="flex max-w-md items-start gap-2 text-xs leading-5 text-amber-200/72">
              <ShieldAlert
                className="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {difficultyNote}
            </p>
          ) : (
            <span />
          )}
          <CampaignLink
            action={{
              href,
              label: actionLabel,
              ariaLabel: `${actionLabel}: ${title}`,
            }}
            className="inline-flex items-center gap-2 self-start text-[0.65rem] font-bold tracking-[0.14em] text-cyan-300 uppercase transition hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:self-auto"
          >
            {actionLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </CampaignLink>
        </div>
      </div>
    </article>
  );
}
