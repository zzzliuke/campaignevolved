import { cn } from '@/lib/utils';

export interface CampaignLogoProps {
  compact?: boolean;
  showText?: boolean;
  className?: string;
  text?: string;
  accent?: 'cyan' | 'amber';
}

/** Original split C/E monogram with an orbital sweep. */
export function CampaignLogo({
  compact = false,
  showText = !compact,
  className,
  text = 'Campaign Evolved Manual',
  accent = 'cyan',
}: CampaignLogoProps) {
  const accentClass = accent === 'amber' ? 'text-amber-400' : 'text-cyan-300';

  return (
    <span
      className={cn(
        'inline-flex min-w-0 items-center gap-2.5 text-white',
        className
      )}
    >
      <svg
        viewBox="0 0 48 48"
        role={showText ? undefined : 'img'}
        aria-hidden={showText ? true : undefined}
        aria-label={showText ? undefined : text}
        className={cn('shrink-0', compact ? 'size-7' : 'size-9')}
      >
        <path
          d="M35.5 11.5A16 16 0 1 0 35.5 36.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M22 15h15M22 24h11M22 33h15"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="square"
        />
        <path
          d="M6.5 33.5C17 45 37 42.5 43 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={accentClass}
        />
        <circle
          cx="43"
          cy="28"
          r="2.5"
          fill="currentColor"
          className={accentClass}
        />
      </svg>

      {showText && (
        <span className="min-w-0 leading-none">
          <span className="block truncate text-[0.72rem] font-semibold tracking-[0.26em] text-white uppercase sm:text-[0.8rem]">
            Campaign Evolved
          </span>
          <span
            className={cn(
              'mt-1 block text-[0.55rem] font-medium tracking-[0.32em] uppercase',
              accentClass
            )}
          >
            {text.replace(/^Campaign Evolved\s*/i, '') || 'Manual'}
          </span>
        </span>
      )}
    </span>
  );
}
