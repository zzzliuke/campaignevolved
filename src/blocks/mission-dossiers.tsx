import { getMissionEntries } from '@/routes/-campaign-content';
import { ArrowRight } from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { MissionCard } from '@/components/campaign';

export function MissionDossiers() {
  const missions = getMissionEntries(getLocale()).slice(0, 3);

  return (
    <section className="bg-[#0c1218] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-amber-300 uppercase">
              {m['campaign.home.featured.eyebrow']()}
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-black tracking-[-0.025em] uppercase">
              {m['campaign.home.featured.title']()}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              {m['campaign.home.featured.description']()}
            </p>
          </div>
          <Link
            href="/missions"
            className="inline-flex min-h-11 items-center gap-3 self-start border border-white/20 px-5 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:self-auto"
          >
            {m['campaign.home.featured.action']()}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4">
          {missions.map((mission) => (
            <MissionCard
              key={mission.slug}
              missionNumber={mission.number}
              title={mission.title}
              phase={mission.group}
              description={mission.summary}
              difficultyNote={mission.warning}
              href={`/missions/${mission.slug}`}
              actionLabel={m['campaign.home.featured.action']()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
