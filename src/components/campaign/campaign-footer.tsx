import type { ReactNode } from 'react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';
import { CampaignLogo } from './campaign-logo';
import type { CampaignAction } from './types';

export interface CampaignFooterGroup {
  title: string;
  links: CampaignAction[];
}

export interface CampaignFooterProps {
  groups: CampaignFooterGroup[];
  disclaimer: string;
  copyright: string;
  homeLabel?: string;
  brand?: ReactNode;
  localeControl?: ReactNode;
  sourceLinks?: CampaignAction[];
  className?: string;
}

export function CampaignFooter({
  groups,
  disclaimer,
  copyright,
  homeLabel = 'Campaign Evolved Manual home',
  brand,
  localeControl,
  sourceLinks,
  className,
}: CampaignFooterProps) {
  return (
    <footer
      className={cn(
        'relative overflow-hidden border-t border-white/10 bg-[#060a0e] text-white before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-300/40 before:to-transparent',
        className
      )}
    >
      <div className="mx-auto max-w-[1280px] px-5 pt-14 pb-7 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link
              href="/"
              aria-label={homeLabel}
              className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {brand ?? <CampaignLogo accent="amber" />}
            </Link>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
              {disclaimer}
            </p>
            {sourceLinks && sourceLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {sourceLinks.map((link) => (
                  <CampaignLink
                    key={`${link.href}-${link.label}`}
                    action={link}
                    className="text-[0.62rem] font-semibold tracking-[0.12em] text-white/42 uppercase transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-[0.65rem] font-bold tracking-[0.18em] text-white uppercase">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <CampaignLink
                        action={link}
                        className="text-sm text-white/45 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/34">{copyright}</p>
          {localeControl && (
            <div className="flex items-center">{localeControl}</div>
          )}
        </div>
      </div>
    </footer>
  );
}
