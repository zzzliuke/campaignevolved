import { Boxes, Skull, Sparkles, Users } from 'lucide-react';

import { m } from '@/paraglide/messages.js';
import { IntelCard } from '@/components/campaign';

export function IntelSystems() {
  const items = [
    {
      icon: Boxes,
      href: '/arsenal',
      title: m['campaign.home.systems.sandbox.title'](),
      body: m['campaign.home.systems.sandbox.body'](),
      stat: {
        label: m['campaign.home.systems.sandbox.stat_label'](),
        value: m['campaign.home.systems.sandbox.stat_value'](),
      },
    },
    {
      icon: Users,
      href: '/guides',
      title: m['campaign.home.systems.coop.title'](),
      body: m['campaign.home.systems.coop.body'](),
      stat: {
        label: m['campaign.home.systems.coop.stat_label'](),
        value: m['campaign.home.systems.coop.stat_value'](),
      },
    },
    {
      icon: Skull,
      href: '/guides',
      title: m['campaign.home.systems.skulls.title'](),
      body: m['campaign.home.systems.skulls.body'](),
      stat: {
        label: m['campaign.home.systems.skulls.stat_label'](),
        value: m['campaign.home.systems.skulls.stat_value'](),
      },
      tone: 'amber' as const,
    },
    {
      icon: Sparkles,
      href: '/missions',
      title: m['campaign.home.systems.meteor.title'](),
      body: m['campaign.home.systems.meteor.body'](),
      stat: {
        label: m['campaign.home.systems.meteor.stat_label'](),
        value: m['campaign.home.systems.meteor.stat_value'](),
      },
      tone: 'amber' as const,
    },
  ];

  return (
    <section className="campaign-grid bg-[#080d12] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-cyan-300 uppercase">
            {m['campaign.home.systems.eyebrow']()}
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
            {m['campaign.home.systems.title']()}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            {m['campaign.home.systems.description']()}
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <IntelCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
