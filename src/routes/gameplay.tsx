import { createFileRoute } from '@tanstack/react-router';
import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';

import { Link } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { getLocale, localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { Header } from '@/blocks/header';
import {
  GuideArticle,
  GuideCallout,
  ManualPageShell,
} from '@/components/campaign';
import {
  coopFacts,
  coreGameplayLoop,
  difficultyRows,
  editorialInterpretations,
  enemyGroups,
  GAMEPLAY_VERIFIED_DATE,
  GAMEPLAY_VERIFIED_LABEL,
  gameplayMeta,
  gameplayQuickFacts,
  gameplayToc,
  meteoriteMissions,
  modernizedSystems,
  modifierTraits,
  originalMissions,
  remixRules,
  sandboxRoles,
  skullFacts,
  verificationNotes,
} from '@/content/campaign/gameplay';
import {
  campaignGameplaySources,
  getCampaignGameplaySource,
  independentGameplaySources,
  officialGameplaySources,
} from '@/content/campaign/sources';

import { campaignHead, type CampaignLocale } from './-campaign-editorial';

export const Route = createFileRoute('/gameplay')({
  loader: () => {
    const locale = getLocale() as CampaignLocale;

    return {
      locale,
      title: gameplayMeta.title,
      description: gameplayMeta.description,
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? campaignHead({
          locale: loaderData.locale,
          path: '/gameplay',
          title: loaderData.title,
          description: loaderData.description,
          article: true,
        })
      : {},
  component: GameplayPage,
});

function SourceLinks({ ids }: { ids: string[] }) {
  const sources = ids.map(getCampaignGameplaySource);

  return (
    <p className="mt-5 text-xs leading-6 text-white/40">
      <span className="font-semibold tracking-[0.08em] text-white/55 uppercase">
        Sources:
      </span>{' '}
      {sources.map((source, index) => (
        <span key={source.id}>
          {index > 0 ? ' · ' : null}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center py-2 align-middle"
          >
            {source.publisher}
            <span className="sr-only">
              {' '}
              — {source.title} (opens in new tab)
            </span>
          </a>
        </span>
      ))}
    </p>
  );
}

function SourceGroup({
  title,
  sources,
}: {
  title: string;
  sources: typeof campaignGameplaySources;
}) {
  return (
    <section
      aria-labelledby={`source-${title.toLowerCase().replace(' ', '-')}`}
    >
      <h3 id={`source-${title.toLowerCase().replace(' ', '-')}`}>{title}</h3>
      <ul className="mt-5 !list-none space-y-3 !pl-0">
        {sources.map((source) => (
          <li
            key={source.id}
            className="border border-white/10 bg-white/[0.025] p-4"
          >
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 font-semibold"
            >
              <span>
                {source.title}
                <span className="mt-1 block text-xs font-normal tracking-[0.08em] text-white/38 uppercase">
                  {source.publisher}
                </span>
              </span>
              <ExternalLink
                className="mt-1 size-3.5 shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <p className="mt-2 text-sm leading-6 text-white/52">
              {source.scope}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GameplayPage() {
  const { locale, title, description } = Route.useLoaderData();
  const baseUrl = envConfigs.app_url.replace(/\/$/, '');
  const pageUrl = localizeUrl(`${baseUrl}/gameplay`, { locale }).href;
  const homeUrl = localizeUrl(`${baseUrl}/`, { locale }).href;
  const gameEntityId = `${pageUrl}#video-game`;
  const image = `${baseUrl}/images/campaign/campaign-evolved-manual-og.webp`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: gameplayMeta.headline,
        description,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: 'en',
        datePublished: GAMEPLAY_VERIFIED_DATE,
        dateModified: GAMEPLAY_VERIFIED_DATE,
        author: {
          '@type': 'Organization',
          name: 'Campaign Evolved Manual',
          url: homeUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Campaign Evolved Manual',
          url: homeUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.svg`,
          },
        },
        image,
        mainEntity: { '@id': gameEntityId },
        citation: campaignGameplaySources.map((source) => source.url),
      },
      {
        '@type': 'VideoGame',
        '@id': gameEntityId,
        name: 'Halo: Campaign Evolved',
        description:
          'A modernized remake of the Halo: Combat Evolved campaign with 13 missions, solo play, local split-screen, and online co-op.',
        url: 'https://www.halowaypoint.com/en-us/games/halo-campaign-evolved',
        image,
        genre: ['First-person shooter', 'Action', 'Science fiction'],
        gamePlatform: [
          'PC',
          'Xbox Series X|S',
          'PlayStation 5',
          'Xbox Cloud Gaming',
        ],
        playMode: ['SinglePlayer', 'CoOp'],
        numberOfPlayers: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 4,
        },
        datePublished: '2026-07-28',
        publisher: {
          '@type': 'Organization',
          name: 'Xbox Game Studios',
        },
        author: {
          '@type': 'Organization',
          name: 'Halo Studios',
        },
        sameAs: [
          'https://www.halowaypoint.com/en-us/games/halo-campaign-evolved',
          'https://store.steampowered.com/app/2806050/',
          'https://www.playstation.com/en-us/games/halo-campaign-evolved/',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: gameplayMeta.headline,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <ManualPageShell
      header={<Header />}
      footer={<Footer />}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gameplay guide' }]}
    >
      <GuideArticle
        eyebrow="Field manual · Gameplay"
        title={gameplayMeta.headline}
        summary={gameplayMeta.summary}
        readingTime="12 min read"
        tocLabel="On this page"
        tocItems={[...gameplayToc]}
        metadata={[
          { label: 'Status', value: GAMEPLAY_VERIFIED_LABEL },
          { label: 'Language', value: 'English' },
          { label: 'Scope', value: 'Official facts + editorial analysis' },
        ]}
        aside={
          <div className="space-y-3 text-sm leading-6 text-white/52">
            <div className="flex items-center gap-2 text-emerald-300">
              <FileCheck2 className="size-4" aria-hidden="true" />
              <p className="font-semibold">{GAMEPLAY_VERIFIED_LABEL}</p>
            </div>
            <p>
              Facts were checked against official material available during
              Premium Early Access. Editorial conclusions are labeled
              separately.
            </p>
          </div>
        }
      >
        <GuideCallout title="Verification status">
          <p>
            This guide separates confirmed game systems from our editorial
            interpretation. The global release is scheduled for July 28, 2026,
            so mission-level spawn details remain subject to a post-launch
            verification pass.
          </p>
        </GuideCallout>

        <section id="quick-facts" aria-labelledby="quick-facts-heading">
          <h2 id="quick-facts-heading">
            Campaign Evolved gameplay at a glance
          </h2>
          <p>
            Halo: Campaign Evolved is a campaign-first science-fiction shooter.
            It rebuilds the original ten-mission journey, adds the three-mission
            Operation: Meteorite prequel, and expands the familiar loop with
            modern aiming, sprint, new weapons, vehicle hijacking, co-op
            scaling, and replay modifiers.
          </p>
          <dl className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {gameplayQuickFacts.map((fact) => (
              <div key={fact.label} className="bg-[#0b1118] p-4">
                <dt className="text-[0.62rem] font-bold tracking-[0.14em] text-cyan-300 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-white/72">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <SourceLinks
            ids={['halo-game', 'player-guide', 'weapons-vehicles']}
          />
        </section>

        <section id="core-loop" aria-labelledby="core-loop-heading">
          <h2 id="core-loop-heading">The core gameplay loop</h2>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-amber-300 uppercase">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Editorial synthesis
          </div>
          <p className="mt-4">
            The game does not revolve around permanent upgrades or one dominant
            loadout. Its combat is a chain of short tactical decisions shaped by
            shields, enemy roles, ammunition, dropped weapons, vehicles, and
            terrain.
          </p>
          <ol className="mt-6 !list-none space-y-3 !pl-0">
            {coreGameplayLoop.map((item) => (
              <li
                key={item.step}
                className="grid gap-3 border-l-2 border-cyan-300/70 bg-white/[0.025] px-5 py-4 sm:grid-cols-[42px_1fr]"
              >
                <span
                  className="font-mono text-sm text-cyan-300"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="!text-base">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/56">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="modernized-systems"
          aria-labelledby="modernized-systems-heading"
        >
          <h2 id="modernized-systems-heading">Modernized systems</h2>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-emerald-300 uppercase">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            Confirmed official systems
          </p>
          <div className="mt-6 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Confirmed modernized gameplay systems and their practical
                meaning
              </caption>
              <thead className="bg-white/[0.055] text-xs tracking-[0.1em] text-white/62 uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    System
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Official fact
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Practical reading
                  </th>
                </tr>
              </thead>
              <tbody>
                {modernizedSystems.map((row) => (
                  <tr
                    key={row.system}
                    className="border-t border-white/10 align-top"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-semibold text-white"
                    >
                      {row.system}
                    </th>
                    <td className="px-4 py-4 text-white/62">
                      {row.officialFact}
                    </td>
                    <td className="px-4 py-4 text-white/50">
                      {row.practicalMeaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SourceLinks ids={['modernization', 'player-guide']} />
        </section>

        <section id="combat-sandbox" aria-labelledby="combat-sandbox-heading">
          <h2 id="combat-sandbox-heading">Weapons, enemies, and vehicles</h2>
          <p>
            The official inventory lists 17 pick-up weapons plus Frag and Plasma
            Grenades. Nine weapons are additions to the original campaign
            sandbox, including the Battle Rifle, Energy Sword, Needle Rifle, and
            Sentinel Beam. The useful question is not simply which weapon has
            the most damage, but which layer of an encounter it solves.
          </p>
          <div className="mt-6 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Campaign Evolved combat roles with example weapons and vehicles
              </caption>
              <thead className="bg-white/[0.055] text-xs tracking-[0.1em] text-white/62 uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Combat layer
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Examples
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Intended use
                  </th>
                </tr>
              </thead>
              <tbody>
                {sandboxRoles.map((row) => (
                  <tr
                    key={row.layer}
                    className="border-t border-white/10 align-top"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-semibold text-white"
                    >
                      {row.layer}
                    </th>
                    <td className="px-4 py-4 text-cyan-100/70">
                      {row.examples}
                    </td>
                    <td className="px-4 py-4 text-white/52">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8">Enemy groups</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {enemyGroups.map((group) => (
              <article
                key={group.title}
                className="border border-white/10 bg-white/[0.025] p-5"
              >
                <h3 className="!text-base">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {group.body}
                </p>
              </article>
            ))}
          </div>
          <SourceLinks ids={['weapons-vehicles', 'modernization', 'remix']} />
        </section>

        <section id="missions" aria-labelledby="missions-heading">
          <h2 id="missions-heading">The 13-mission structure</h2>
          <p>
            The rebuilt original campaign keeps its ten-mission sequence.
            Operation: Meteorite adds three missions set roughly one year
            earlier, following Master Chief and Sergeant Johnson aboard a
            Covenant research vessel.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <section
              className="border border-white/10 bg-white/[0.025] p-5"
              aria-labelledby="original-campaign-heading"
            >
              <h3 id="original-campaign-heading">Original campaign rebuilt</h3>
              <ol className="mt-4 space-y-1.5 text-sm text-white/60">
                {originalMissions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ol>
            </section>
            <section
              className="border border-cyan-300/25 bg-cyan-300/[0.035] p-5"
              aria-labelledby="meteorite-heading"
            >
              <h3 id="meteorite-heading">Operation: Meteorite</h3>
              <ol className="mt-4 space-y-1.5 text-sm text-white/60">
                {meteoriteMissions.map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ol>
              <p className="mt-5 text-xs leading-5 text-white/42">
                Mission-name note: one official Support table currently uses
                “Bitter Harvest” for the third Terminal entry. Early-access
                gameplay and current reference material identify the mission as
                “Heavy Burden”; we will recheck this after global launch.
              </p>
            </section>
          </div>
          <nav
            aria-label="Related mission resources"
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              href="/missions"
              className="border border-cyan-300/35 px-4 py-2 text-sm font-semibold no-underline transition hover:bg-cyan-300/10"
            >
              Browse all missions
            </Link>
            <Link
              href="/guides"
              className="border border-white/15 px-4 py-2 text-sm font-semibold text-white/72 no-underline transition hover:bg-white/5"
            >
              Open the guides desk
            </Link>
          </nav>
          <SourceLinks ids={['halo-game', 'player-guide', 'collectibles']} />
        </section>

        <section id="co-op" aria-labelledby="co-op-heading">
          <h2 id="co-op-heading">Co-op and shared progression</h2>
          <p>
            Campaign Evolved supports one shared campaign across platform
            boundaries, but not every save detail travels with the player. The
            distinction matters when planning a session on another device.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {coopFacts.map((fact) => (
              <article
                key={fact.title}
                className="border border-white/10 bg-white/[0.025] p-5"
              >
                <h3 className="!text-base">{fact.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {fact.body}
                </p>
              </article>
            ))}
          </div>
          <GuideCallout title="Confirmed boundary" tone="amber">
            <p>
              Official sources confirm spaces adapted for four players and
              additional weapon spawns as the fireteam grows. They do not
              publish a precise formula for enemy health, count, or aggression,
              so this guide does not claim one.
            </p>
          </GuideCallout>
          <SourceLinks ids={['coop', 'launch-features']} />
        </section>

        <section id="difficulty" aria-labelledby="difficulty-heading">
          <h2 id="difficulty-heading">Difficulty and custom modifiers</h2>
          <p>
            Four traditional campaign difficulties define the base challenge.
            Separate modifier presets can then change player traits and ammo
            behavior, although using those presets can prevent certain
            achievements or trophies from unlocking.
          </p>
          <div className="mt-6 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[660px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Campaign Evolved difficulty levels and recommended use
              </caption>
              <thead className="bg-white/[0.055] text-xs tracking-[0.1em] text-white/62 uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Difficulty
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Focus
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Manual guidance
                  </th>
                </tr>
              </thead>
              <tbody>
                {difficultyRows.map((row) => (
                  <tr
                    key={row.difficulty}
                    className="border-t border-white/10 align-top"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-semibold text-white"
                    >
                      {row.difficulty}
                    </th>
                    <td className="px-4 py-4 text-cyan-100/70">{row.focus}</td>
                    <td className="px-4 py-4 text-white/52">{row.guidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 border border-white/10 bg-white/[0.025] p-5">
            <h3>Custom preset traits</h3>
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {modifierTraits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </div>
          <SourceLinks ids={['difficulty']} />
        </section>

        <section id="skulls-remix" aria-labelledby="skulls-remix-heading">
          <h2 id="skulls-remix-heading">Skulls, LASO, and Campaign Remix</h2>
          <p>
            Skulls are both collectibles and rule switches. They can remove HUD
            information, change resource pressure, enable third-person play,
            modify physics, or unlock entirely new ways to replay missions.
          </p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {skullFacts.map((fact) => (
              <div
                key={fact.label}
                className="border border-white/10 bg-white/[0.025] p-5"
              >
                <dt className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-cyan-300">
                    {fact.value}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {fact.label}
                  </span>
                </dt>
                <dd className="mt-2 text-sm leading-6 text-white/50">
                  {fact.detail}
                </dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-8">The fixed Remix rules</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {remixRules.map((rule) => (
              <article
                key={rule.title}
                className="border-l-2 border-cyan-300 bg-cyan-300/[0.035] px-5 py-4"
              >
                <h3 className="!text-base">{rule.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/55">
                  {rule.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5">
            LASO uses a defined set of 17 Skulls on Legendary, not every one of
            the 42 available modifiers. Those 17 must be discovered before the
            mode becomes available.
          </p>
          <SourceLinks ids={['remix', 'collectibles', 'player-guide']} />
        </section>

        <section
          id="editorial-interpretation"
          aria-labelledby="editorial-interpretation-heading"
        >
          <h2 id="editorial-interpretation-heading">
            What these systems mean in practice
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-amber-300 uppercase">
            <ShieldCheck className="size-4" aria-hidden="true" />
            Campaign Evolved Manual editorial interpretation
          </p>
          <div className="mt-6 space-y-3">
            {editorialInterpretations.map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-amber-300/80 bg-amber-300/[0.035] px-5 py-4"
              >
                <h3 className="!text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <SourceLinks
            ids={[
              'pc-gamer-review',
              'gamesradar-review',
              'windows-central-review',
            ]}
          />
        </section>

        <section id="sources" aria-labelledby="sources-heading">
          <h2 id="sources-heading">Sources and verification notes</h2>
          <GuideCallout title={GAMEPLAY_VERIFIED_LABEL}>
            <ul className="!list-none space-y-2 !pl-0">
              {verificationNotes.map((note) => (
                <li key={note} className="flex gap-2">
                  <CheckCircle2
                    className="mt-1 size-3.5 shrink-0 text-emerald-300"
                    aria-hidden="true"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </GuideCallout>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <SourceGroup
              title="Official sources"
              sources={officialGameplaySources}
            />
            <SourceGroup
              title="Independent context"
              sources={independentGameplaySources}
            />
          </div>
        </section>
      </GuideArticle>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </ManualPageShell>
  );
}
