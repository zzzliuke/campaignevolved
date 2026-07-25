import { useEffect, useId, useState, type ReactNode } from 'react';
import { Menu, X } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

import { CampaignLink } from './campaign-link';
import { CampaignLogo } from './campaign-logo';
import type { CampaignNavItem } from './types';

export interface CampaignHeaderProps {
  navLabel?: string;
  homeLabel?: string;
  menuOpenLabel?: string;
  menuCloseLabel?: string;
  navItems: CampaignNavItem[];
  actions?: ReactNode;
  mobileActions?: ReactNode;
  brand?: ReactNode;
  className?: string;
}

export function CampaignHeader({
  navLabel = 'Primary navigation',
  homeLabel = 'Campaign Evolved Manual home',
  menuOpenLabel = 'Open navigation menu',
  menuCloseLabel = 'Close navigation menu',
  navItems,
  actions,
  mobileActions,
  brand,
  className,
}: CampaignHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1015]/90 text-white shadow-[0_14px_50px_rgba(0,0,0,0.26)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0b1015]/76',
        className
      )}
    >
      <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:h-[72px] lg:px-10">
        <Link
          href="/"
          title={homeLabel}
          className="relative z-10 flex min-h-10 min-w-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          onClick={() => setMobileOpen(false)}
        >
          {brand ?? <CampaignLogo />}
        </Link>

        <nav
          aria-label={navLabel}
          className="hidden h-full items-stretch lg:flex"
        >
          {navItems.map((item) => (
            <CampaignLink
              key={`${item.href}-${item.label}`}
              action={item}
              className="group relative flex items-center px-4 text-xs font-semibold tracking-[0.14em] text-white/68 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-cyan-300"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
            </CampaignLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {actions}
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          onClick={() => setMobileOpen((open) => !open)}
          className="relative z-10 grid size-10 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-[60px] z-40 bg-[#060a0e]/96 backdrop-blur-lg transition duration-300 lg:hidden',
          mobileOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0'
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          id={menuId}
          aria-label={navLabel}
          className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto px-6 pt-8 pb-28"
        >
          {navItems.map((item, index) => (
            <CampaignLink
              key={`${item.href}-${item.label}`}
              action={item}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="group border-b border-white/10 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[0.65rem] text-cyan-300/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xl font-semibold tracking-[0.12em] text-white uppercase">
                  {item.label}
                </span>
              </span>
              {item.description && (
                <span className="mt-2 ml-10 block text-sm leading-6 text-white/52">
                  {item.description}
                </span>
              )}
            </CampaignLink>
          ))}

          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
            {mobileActions ?? actions}
          </div>
        </nav>
      </div>
    </header>
  );
}
