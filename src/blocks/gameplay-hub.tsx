import {
  Crosshair,
  Layers3,
  Route,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';

type GameplayPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: 'cyan' | 'amber';
};

export function GameplayHub() {
  const pillars: GameplayPillar[] = [
    {
      icon: Route,
      title: m['campaign.home.gameplay.campaign.title'](),
      description: m['campaign.home.gameplay.campaign.description'](),
      accent: 'cyan',
    },
    {
      icon: Crosshair,
      title: m['campaign.home.gameplay.combat.title'](),
      description: m['campaign.home.gameplay.combat.description'](),
      accent: 'amber',
    },
    {
      icon: Layers3,
      title: m['campaign.home.gameplay.sandbox.title'](),
      description: m['campaign.home.gameplay.sandbox.description'](),
      accent: 'cyan',
    },
    {
      icon: UsersRound,
      title: m['campaign.home.gameplay.coop.title'](),
      description: m['campaign.home.gameplay.coop.description'](),
      accent: 'amber',
    },
  ];

  return (
    <section
      id="gameplay"
      className="campaign-grid relative overflow-hidden bg-[#0c1218] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
    >
      <div
        className="absolute top-0 right-0 h-px w-2/3 bg-gradient-to-l from-cyan-300/45 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-cyan-300 uppercase">
              {m['campaign.home.gameplay.eyebrow']()}
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
              {m['campaign.home.gameplay.title']()}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              {m['campaign.home.gameplay.description']()}
            </p>
          </div>
          <Link
            href="/gameplay"
            className="inline-flex min-h-11 items-center justify-center self-start border border-cyan-300/55 px-5 text-[0.65rem] font-bold tracking-[0.16em] text-cyan-200 uppercase transition hover:bg-cyan-300 hover:text-[#061116] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:self-auto"
          >
            {m['campaign.home.gameplay.action']()}
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description, accent }, index) => (
            <article
              key={title}
              className="group min-h-64 bg-[#0b1117] p-6 transition hover:bg-[#101922]"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={
                    accent === 'amber'
                      ? 'grid size-11 place-items-center border border-amber-300/30 bg-amber-300/5 text-amber-300'
                      : 'grid size-11 place-items-center border border-cyan-300/30 bg-cyan-300/5 text-cyan-300'
                  }
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tracking-[0.16em] text-white/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold tracking-[0.05em] text-white uppercase">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
