import { m } from '@/paraglide/messages.js';
import { CinematicHero } from '@/components/campaign';

export function Hero() {
  return (
    <CinematicHero
      eyebrow={m['campaign.home.hero.eyebrow']()}
      title={m['campaign.home.hero.title']()}
      description={m['campaign.home.hero.description']()}
      image={{
        src: '/images/campaign/campaign-evolved-manual-hero.webp',
        alt: '',
        width: 1915,
        height: 821,
        position: 'center center',
        priority: true,
      }}
      primaryAction={{
        href: '/missions',
        label: m['campaign.home.hero.primary'](),
      }}
      secondaryAction={{
        href: '/guides',
        label: m['campaign.home.hero.secondary'](),
      }}
      stats={[
        {
          label: m['campaign.home.hero.stats.missions'](),
          value: m['campaign.home.hero.stats.missions_value'](),
        },
        {
          label: m['campaign.home.hero.stats.coop'](),
          value: m['campaign.home.hero.stats.coop_value'](),
        },
        {
          label: m['campaign.home.hero.stats.release'](),
          value: m['campaign.home.hero.stats.release_value'](),
        },
      ]}
      scrollLabel={m['campaign.home.hero.scroll']()}
    />
  );
}
