import { Crosshair, Map, ShieldAlert, Truck } from 'lucide-react';

import { m } from '@/paraglide/messages.js';
import { ManualIndexCard, ManualIndexGrid } from '@/components/campaign';

export function Features() {
  const cards = [
    {
      icon: Map,
      index: '01',
      href: '/missions',
      accent: 'cyan' as const,
      title: m['campaign.home.index.missions.title'](),
      description: m['campaign.home.index.missions.description'](),
      meta: m['campaign.home.index.missions.meta'](),
    },
    {
      icon: Crosshair,
      index: '02',
      href: '/arsenal',
      accent: 'amber' as const,
      title: m['campaign.home.index.arsenal.title'](),
      description: m['campaign.home.index.arsenal.description'](),
      meta: m['campaign.home.index.arsenal.meta'](),
    },
    {
      icon: ShieldAlert,
      index: '03',
      href: '/enemies',
      accent: 'slate' as const,
      title: m['campaign.home.index.enemies.title'](),
      description: m['campaign.home.index.enemies.description'](),
      meta: m['campaign.home.index.enemies.meta'](),
    },
    {
      icon: Truck,
      index: '04',
      href: '/vehicles',
      accent: 'cyan' as const,
      title: m['campaign.home.index.vehicles.title'](),
      description: m['campaign.home.index.vehicles.description'](),
      meta: m['campaign.home.index.vehicles.meta'](),
    },
  ];

  return (
    <section
      id="manual-index"
      className="campaign-grid relative overflow-hidden bg-[#090e13] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-cyan-300 uppercase">
            {m['campaign.home.index.eyebrow']()}
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
            {m['campaign.home.index.title']()}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            {m['campaign.home.index.description']()}
          </p>
        </div>
        <ManualIndexGrid className="mt-12">
          {cards.map((card) => (
            <ManualIndexCard key={card.href} {...card} />
          ))}
        </ManualIndexGrid>
      </div>
    </section>
  );
}
