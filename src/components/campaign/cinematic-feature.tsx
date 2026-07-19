import { ArrowRight, Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';
import type { CampaignAction, CampaignImageSource } from './types';

export interface CinematicFeatureProps {
  image: CampaignImageSource;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  action?: CampaignAction;
  alignment?: 'left' | 'right';
  tone?: 'cyan' | 'amber';
  className?: string;
}

export function CinematicFeature({
  image,
  eyebrow,
  title,
  body,
  bullets,
  action,
  alignment = 'left',
  tone = 'cyan',
  className,
}: CinematicFeatureProps) {
  const accent = tone === 'amber' ? 'text-amber-300' : 'text-cyan-300';
  const accentBorder =
    tone === 'amber'
      ? 'border-amber-300/60 hover:bg-amber-300 hover:text-[#151006]'
      : 'border-cyan-300/60 hover:bg-cyan-300 hover:text-[#061116]';

  return (
    <section
      className={cn(
        'relative isolate flex min-h-[620px] overflow-hidden bg-[#090e13] text-white [clip-path:polygon(0_0,30%_0,calc(30%_+_32px)_14px,calc(70%_-_32px)_14px,70%_0,100%_0,100%_100%,0_100%)] lg:min-h-[700px] lg:[clip-path:polygon(0_0,30%_0,calc(30%_+_96px)_28px,calc(70%_-_96px)_28px,70%_0,100%_0,100%_100%,0_100%)]',
        className
      )}
    >
      <picture className="absolute inset-0 -z-20">
        {image.mobileSrc && (
          <source media="(max-width: 767px)" srcSet={image.mobileSrc} />
        )}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
          style={{ objectPosition: image.position }}
        />
      </picture>

      <div
        className={cn(
          'absolute inset-0 -z-10 max-lg:bg-[linear-gradient(0deg,rgba(5,9,13,.98)_0%,rgba(5,9,13,.89)_43%,rgba(5,9,13,.12)_100%)]',
          alignment === 'left'
            ? 'lg:bg-[linear-gradient(90deg,rgba(5,9,13,.98)_0%,rgba(5,9,13,.88)_36%,rgba(5,9,13,.15)_72%)]'
            : 'lg:bg-[linear-gradient(270deg,rgba(5,9,13,.98)_0%,rgba(5,9,13,.88)_36%,rgba(5,9,13,.15)_72%)]'
        )}
      />

      <div
        className={cn(
          'mx-auto flex w-full max-w-[1440px] items-end px-5 pt-44 pb-14 sm:px-8 lg:items-center lg:px-14 lg:py-24',
          alignment === 'right' && 'lg:justify-end'
        )}
      >
        <div className="max-w-[620px]">
          <p
            className={cn(
              'text-[0.68rem] font-semibold tracking-[0.26em] uppercase',
              accent
            )}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] font-black tracking-[-0.02em] text-balance uppercase">
            {title}
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            {body}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-5 text-white/70"
                >
                  <Check
                    className={cn('mt-0.5 size-4 shrink-0', accent)}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {action && (
            <CampaignLink
              action={action}
              className={cn(
                'mt-8 inline-flex min-h-11 items-center gap-3 border px-5 text-[0.65rem] font-bold tracking-[0.16em] uppercase transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
                accentBorder
              )}
            >
              {action.label}
              <ArrowRight className="size-4" />
            </CampaignLink>
          )}
        </div>
      </div>
    </section>
  );
}
