import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

import type { CampaignBreadcrumb } from './types';

export interface ManualPageShellProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  breadcrumbs?: CampaignBreadcrumb[];
  breadcrumbLabel?: string;
  mainClassName?: string;
  className?: string;
}

export function ManualPageShell({
  header,
  footer,
  children,
  breadcrumbs,
  breadcrumbLabel = 'Breadcrumb',
  mainClassName,
  className,
}: ManualPageShellProps) {
  return (
    <div className={cn('min-h-screen bg-[#090e13] text-white', className)}>
      {header}
      <main id="main-content" className={mainClassName}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label={breadcrumbLabel}
            className="mx-auto max-w-[1280px] px-5 pt-[84px] sm:px-8 lg:px-10 lg:pt-24"
          >
            <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] tracking-[0.12em] text-white/45 uppercase">
              {breadcrumbs.map((item, index) => {
                const current = index === breadcrumbs.length - 1;
                return (
                  <li
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2"
                  >
                    {index > 0 && (
                      <ChevronRight
                        className="size-3 text-white/24"
                        aria-hidden="true"
                      />
                    )}
                    {item.href && !current ? (
                      <Link
                        href={item.href}
                        className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={current ? 'page' : undefined}
                        className={current ? 'text-white/72' : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        {children}
      </main>
      {footer}
    </div>
  );
}
