export type CampaignSourceKind = 'official' | 'independent';

export interface CampaignGameplaySource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  kind: CampaignSourceKind;
  accessedOn: string;
  scope: string;
}

export const campaignGameplaySources: CampaignGameplaySource[] = [
  {
    id: 'halo-game',
    title: 'Halo: Campaign Evolved',
    publisher: 'Halo Waypoint',
    url: 'https://www.halowaypoint.com/en-us/games/halo-campaign-evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Campaign structure, expanded sandbox, co-op, and platform overview.',
  },
  {
    id: 'player-guide',
    title: 'Halo: Campaign Evolved Player Guide',
    publisher: 'Halo Support',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50949310959508-Halo-Campaign-Evolved-Player-Guide',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Operation: Meteorite, collectibles, Campaign Remix, LASO, and player systems.',
  },
  {
    id: 'modernization',
    title: '13 ways Halo: Campaign Evolved modernizes the iconic FPS',
    publisher: 'PlayStation Blog',
    url: 'https://blog.playstation.com/2026/07/23/13-ways-halo-campaign-evolved-modernizes-the-iconic-fps/',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Sprint, aiming, health recovery, stored power-ups, encounters, and vehicle controls.',
  },
  {
    id: 'weapons-vehicles',
    title: 'Weapons & Vehicles in Halo: Campaign Evolved',
    publisher: 'Halo Support',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50948184078228-Weapons-Vehicles-in-Halo-Campaign-Evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope: 'Official weapon roles, equipment, and vehicle roles.',
  },
  {
    id: 'coop',
    title: 'Co-op in Halo: Campaign Evolved',
    publisher: 'Halo Support',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50818310869268-Co-op-in-Halo-Campaign-Evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Online and split-screen player counts, cross-play, progression, and account linking.',
  },
  {
    id: 'difficulty',
    title: 'Difficulty Settings & Modifiers in Halo: Campaign Evolved',
    publisher: 'Halo Support',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50949462089108-Difficulty-Settings-Modifiers-in-Halo-Campaign-Evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Difficulty tiers, friendly fire, modifier presets, and achievement restrictions.',
  },
  {
    id: 'collectibles',
    title: 'Collectibles in Halo: Campaign Evolved',
    publisher: 'Halo Support',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50945006304404-Collectibles-in-Halo-Campaign-Evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope: 'Terminal and collectible Skull totals, effects, and unlocks.',
  },
  {
    id: 'remix',
    title: 'Skulls & Campaign Remix',
    publisher: 'Halo Waypoint',
    url: 'https://www.halowaypoint.com/news/skulls-campaign-remix-halo-campaign-evolved',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'The 42-Skull roster, collectible split, Remix rules, and visibility effects.',
  },
  {
    id: 'launch-features',
    title: 'The Brand New Features in This Remake of a Classic',
    publisher: 'Xbox Wire',
    url: 'https://news.xbox.com/en-us/2026/07/23/halo-campaign-evolved-early-access-launch-xbox/',
    kind: 'official',
    accessedOn: '2026-07-25',
    scope:
      'Four-player encounter adaptation, scaled weapon spawns, Skulls, and new missions.',
  },
  {
    id: 'pc-gamer-review',
    title: 'Halo: Campaign Evolved review',
    publisher: 'PC Gamer',
    url: 'https://www.pcgamer.com/games/halo/halo-campaign-evolved-review/',
    kind: 'independent',
    accessedOn: '2026-07-25',
    scope:
      'Independent early-access impressions of combat feel and modernization trade-offs.',
  },
  {
    id: 'gamesradar-review',
    title: 'Halo: Campaign Evolved review',
    publisher: 'GamesRadar+',
    url: 'https://www.gamesradar.com/games/halo/halo-campaign-evolved-review/',
    kind: 'independent',
    accessedOn: '2026-07-25',
    scope:
      'Independent early-access impressions of missions, weapons, and level changes.',
  },
  {
    id: 'windows-central-review',
    title: 'Halo: Campaign Evolved review',
    publisher: 'Windows Central',
    url: 'https://www.windowscentral.com/gaming/halo/halo-campaign-evolved-review',
    kind: 'independent',
    accessedOn: '2026-07-25',
    scope:
      'Independent early-access impressions of replayability, co-op, and performance.',
  },
];

export const officialGameplaySources = campaignGameplaySources.filter(
  (source) => source.kind === 'official'
);

export const independentGameplaySources = campaignGameplaySources.filter(
  (source) => source.kind === 'independent'
);

export function getCampaignGameplaySource(id: string) {
  const source = campaignGameplaySources.find((entry) => entry.id === id);

  if (!source) {
    throw new Error(`Unknown Campaign Evolved gameplay source: ${id}`);
  }

  return source;
}
