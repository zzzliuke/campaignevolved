import type { ReactNode } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';

export type CampaignLocale = 'en';

export function campaignHead({
  locale,
  path,
  title,
  description,
  article = false,
}: {
  locale: CampaignLocale;
  path: string;
  title: string;
  description: string;
  article?: boolean;
}) {
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const canonicalUrl = localizeUrl(`${baseUrl}${path}`, { locale }).href;
  const image = `${baseUrl}/images/campaign/campaign-evolved-manual-og.webp`;

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: article ? 'article' : 'website' },
      { property: 'og:site_name', content: envConfigs.app_name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  };
}

export function CampaignPage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 pt-[60px] lg:pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function EditorialHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <header className="border-border bg-muted/25 relative isolate overflow-hidden border-b">
      <div
        className="bg-primary/10 absolute -top-40 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.24em] uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-3xl text-base leading-7 text-pretty sm:text-lg sm:leading-8">
          {description}
        </p>
        {actions ? (
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7 max-w-3xl">
      {eyebrow ? (
        <p className="text-primary mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-3 leading-7">{description}</p>
      ) : null}
    </div>
  );
}

export function EditorialCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  children?: ReactNode;
}) {
  return (
    <article className="border-border bg-card flex h-full flex-col rounded-xl border p-5 shadow-sm sm:p-6">
      {eyebrow ? (
        <p className="text-primary text-xs font-semibold tracking-[0.16em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
      {description ? (
        <p className="text-muted-foreground mt-3 flex-1 leading-7">
          {description}
        </p>
      ) : null}
      {children}
      {href && linkLabel ? (
        <Link
          href={href}
          className="text-primary mt-5 inline-flex min-h-10 items-center gap-1.5 py-2 text-sm font-semibold underline-offset-4 hover:underline"
        >
          {linkLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}

export function Breadcrumbs({
  items,
  ariaLabel,
}: {
  items: Array<{ label: string; href?: string }>;
  ariaLabel: string;
}) {
  return (
    <nav aria-label={ariaLabel} className="mb-8">
      <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-1.5"
          >
            {index > 0 ? (
              <ChevronRight className="size-3.5" aria-hidden="true" />
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-foreground inline-flex min-h-10 items-center py-2"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex min-h-10 items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors"
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="border-border bg-background hover:bg-muted inline-flex min-h-10 items-center rounded-md border px-5 py-2 text-sm font-semibold transition-colors"
    >
      {children}
    </Link>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <aside className="border-primary/30 bg-primary/5 text-foreground rounded-lg border p-4 text-sm leading-6">
      {children}
    </aside>
  );
}

export function EditorialList({ items }: { items: string[] }) {
  return (
    <ul className="text-muted-foreground space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span
            className="bg-primary mt-[0.7rem] size-1.5 shrink-0 rounded-full"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
