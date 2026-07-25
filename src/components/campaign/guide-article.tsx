import type { ReactNode } from 'react';
import { Clock3 } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface GuideTocItem {
  id: string;
  label: string;
}

export interface GuideArticleProps {
  eyebrow?: string;
  title: string;
  summary?: string;
  metadata?: Array<{ label: string; value: string }>;
  tocLabel: string;
  tocItems: GuideTocItem[];
  readingTime?: string;
  readingTimeLabel?: string;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
}

export function GuideArticle({
  eyebrow,
  title,
  summary,
  metadata,
  tocLabel,
  tocItems,
  readingTime,
  readingTimeLabel = 'Reading time',
  children,
  aside,
  className,
}: GuideArticleProps) {
  const jumpNav = (
    <nav aria-label={tocLabel}>
      <p className="mb-4 text-[0.62rem] font-bold tracking-[0.18em] text-cyan-300 uppercase">
        {tocLabel}
      </p>
      <ol className="space-y-2 border-l border-white/12">
        {tocItems.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="grid min-h-10 grid-cols-[24px_1fr] items-center gap-2 border-l border-transparent py-2 pl-3 text-sm leading-5 text-white/50 transition hover:border-cyan-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <span className="font-mono text-[0.62rem] text-white/28">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

  return (
    <article
      className={cn(
        'mx-auto max-w-[1120px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16',
        className
      )}
    >
      <header className="max-w-[820px] border-b border-white/12 pb-10">
        {eyebrow && (
          <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-[clamp(2.4rem,6vw,4.75rem)] leading-[0.98] font-black tracking-[-0.03em] text-balance uppercase">
          {title}
        </h1>
        {summary && (
          <p className="mt-5 max-w-[740px] text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
            {summary}
          </p>
        )}
        {(readingTime || (metadata && metadata.length > 0)) && (
          <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {readingTime && (
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Clock3 className="size-4 text-cyan-300" aria-hidden="true" />
                <dt className="sr-only">{readingTimeLabel}</dt>
                <dd>{readingTime}</dd>
              </div>
            )}
            {metadata?.map((item) => (
              <div key={item.label}>
                <dt className="text-[0.58rem] tracking-[0.14em] text-white/32 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-white/68">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="mt-10 border border-white/10 bg-white/[0.025] p-5 lg:hidden">
        {jumpNav}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[260px_minmax(0,740px)] lg:items-start">
        <aside className="hidden lg:sticky lg:top-28 lg:block">
          {jumpNav}
          {aside && (
            <div className="mt-8 border-t border-white/10 pt-7">{aside}</div>
          )}
        </aside>
        <div className="min-w-0 space-y-10 text-base leading-8 text-white/70 [&_a]:text-cyan-300 [&_a]:underline-offset-4 [&_a:hover]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-amber-300 [&_blockquote]:bg-amber-300/5 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_h2]:scroll-mt-28 [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:tracking-[-0.01em] [&_h2]:text-white [&_h2]:uppercase [&_h3]:scroll-mt-28 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:uppercase [&_li]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </article>
  );
}

export function GuideCallout({
  title,
  children,
  tone = 'cyan',
}: {
  title: string;
  children: ReactNode;
  tone?: 'cyan' | 'amber';
}) {
  return (
    <aside
      className={cn(
        'border-l-2 bg-white/[0.035] px-5 py-4',
        tone === 'amber' ? 'border-amber-300' : 'border-cyan-300'
      )}
    >
      <p className="text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase">
        {title}
      </p>
      <div className="mt-2 text-sm leading-6 text-white/60">{children}</div>
    </aside>
  );
}
