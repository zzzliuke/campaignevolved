import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import {
  FieldManualFeature,
  MissionPreparation,
} from '@/blocks/campaign-features';
import { CAMPAIGN_FAQ_KEYS, FAQ } from '@/blocks/faq';
import { Features } from '@/blocks/features';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import { Hero } from '@/blocks/hero';
import { IntelSystems } from '@/blocks/intel-systems';
import { MissionDossiers } from '@/blocks/mission-dossiers';

function HomePage() {
  const { locale } = Route.useLoaderData();
  const messageOptions = { locale } as const;
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const faqEntities = CAMPAIGN_FAQ_KEYS.map((key) => ({
    '@type': 'Question',
    name: m[`campaign.home.faq.${key}.question`]({}, messageOptions),
    acceptedAnswer: {
      '@type': 'Answer',
      text: m[`campaign.home.faq.${key}.answer`]({}, messageOptions),
    },
  }));
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Campaign Evolved Manual',
      url: `${baseUrl}/`,
      inLanguage: 'en',
      description: m['campaign.seo.home.description']({}, messageOptions),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Campaign Evolved Manual',
      url: `${baseUrl}/`,
      logo: `${baseUrl}/logo.svg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080d12] text-white">
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <MissionDossiers />
        <MissionPreparation />
        <IntelSystems />
        <FieldManualFeature />
        <FAQ />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  );
}

export const Route = createFileRoute('/')({
  loader: () => ({ locale: getLocale() }),
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const options = { locale } as const;
    const title = m['campaign.seo.home.title']({}, options);
    const description = m['campaign.seo.home.description']({}, options);
    const baseUrl = envConfigs.app_url.replace(/\/$/, '');
    const canonicalUrl = localizeUrl(`${baseUrl}/`, { locale }).href;
    const image = `${baseUrl}/images/campaign/campaign-evolved-manual-og.webp`;

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Campaign Evolved Manual' },
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
  },
  component: HomePage,
});
