import type { ComponentType, SVGProps } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';

export interface IntelCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  stat?: { label: string; value: string };
  href?: string;
  linkLabel?: string;
  tone?: 'cyan' | 'amber';
  className?: string;
}

export function IntelCard({
  icon: Icon,
  title,
  body,
  stat,
  href,
  linkLabel = 'Explore intel',
  tone = 'cyan',
  className,
}: IntelCardProps) {
  const accent = tone === 'amber' ? 'text-amber-300' : 'text-cyan-300';

  return (
    <article
      className={cn(
        'group relative flex min-h-64 flex-col overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018))] p-6 text-white transition before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-current before:to-transparent before:opacity-30 hover:-translate-y-1 hover:border-white/24 hover:shadow-[0_18px_50px_rgba(0,0,0,.25)]',
        accent,
        className
      )}
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid size-10 place-items-center border border-current/30 bg-current/5">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {stat && (
          <dl className="text-right">
            <dt className="text-[0.58rem] tracking-[0.16em] text-white/36 uppercase">
              {stat.label}
            </dt>
            <dd className="mt-1 font-mono text-sm font-semibold text-white">
              {stat.value}
            </dd>
          </dl>
        )}
      </div>
      <h3 className="mt-8 text-lg font-bold tracking-[0.06em] text-white uppercase">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{body}</p>
      {href && (
        <CampaignLink
          action={{
            href,
            label: linkLabel,
            ariaLabel: `${linkLabel}: ${title}`,
          }}
          className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-[0.62rem] font-bold tracking-[0.14em] uppercase transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          {linkLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </CampaignLink>
      )}
    </article>
  );
}
