import type { ReactNode } from 'react';

export interface CampaignAction {
  label: string;
  href: string;
  ariaLabel?: string;
  external?: boolean;
}

export interface CampaignNavItem extends CampaignAction {
  description?: string;
}

export interface CampaignImageSource {
  src: string;
  alt: string;
  mobileSrc?: string;
  width?: number;
  height?: number;
  /** CSS object-position value, for example `60% center`. */
  position?: string;
  priority?: boolean;
}

export interface CampaignBreadcrumb {
  label: string;
  href?: string;
}

export interface CampaignStat {
  label: string;
  value: ReactNode;
}
