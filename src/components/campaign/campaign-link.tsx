import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

import type { CampaignAction } from './types';

export function isExternalHref(href: string) {
  return /^(?:https?:|mailto:|tel:)/i.test(href);
}

export function CampaignLink({
  action,
  children,
  className,
  ...props
}: {
  action: CampaignAction;
  children?: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  const external = action.external || isExternalHref(action.href);
  const sharedProps = {
    className: cn(className),
    'aria-label': action.ariaLabel,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    ...props,
  };

  if (external) {
    return (
      <a href={action.href} {...sharedProps}>
        {children ?? action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} {...sharedProps}>
      {children ?? action.label}
    </Link>
  );
}
