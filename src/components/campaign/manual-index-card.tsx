import type { ComponentType, SVGProps } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';

export interface ManualIndexCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  index: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
  accent?: 'cyan' | 'amber' | 'slate';
  className?: string;
}

const accentStyles = {
  cyan: 'text-cyan-300 group-hover:border-cyan-300/60 before:bg-cyan-300',
  amber: 'text-amber-300 group-hover:border-amber-300/60 before:bg-amber-300',
  slate: 'text-slate-300 group-hover:border-slate-200/50 before:bg-slate-300',
};

export function ManualIndexCard({
  icon: Icon,
  index,
  title,
  description,
  meta,
  href,
  accent = 'cyan',
  className,
}: ManualIndexCardProps) {
  return (
    <article
      className={cn(
        'group relative isolate min-h-[290px] overflow-hidden border border-white/12 bg-white/[0.035] before:absolute before:top-0 before:right-0 before:h-px before:w-16 before:origin-right before:transition-transform before:duration-300 after:absolute after:top-0 after:right-0 after:size-5 after:border-b after:border-l after:border-white/18 after:bg-[#0c1218] after:[clip-path:polygon(100%_0,100%_100%,0_0)] hover:bg-white/[0.06]',
        accentStyles[accent],
        className
      )}
    >
      <CampaignLink
        action={{ href, label: title, ariaLabel: title }}
        className="flex h-full min-h-[290px] flex-col p-6 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-current"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-11 place-items-center border border-current/30 bg-current/5">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs tracking-[0.16em] text-white/34">
            {index}
          </span>
        </div>
        <h3 className="mt-9 text-xl leading-tight font-bold tracking-[0.05em] text-white uppercase">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/58">{description}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          {meta ? (
            <span className="text-[0.62rem] font-semibold tracking-[0.14em] text-white/38 uppercase">
              {meta}
            </span>
          ) : (
            <span />
          )}
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </CampaignLink>
    </article>
  );
}

export function ManualIndexGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
}
