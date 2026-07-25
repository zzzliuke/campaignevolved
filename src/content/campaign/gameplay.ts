export const GAMEPLAY_VERIFIED_DATE = '2026-07-25';
export const GAMEPLAY_VERIFIED_LABEL = 'Verified July 25, 2026';

export const gameplayMeta = {
  title: 'Campaign Evolved Gameplay Guide – Combat, Co-op & Remix',
  description:
    'Campaign Evolved Gameplay Guide covering the combat loop, 13 missions, weapons, vehicles, co-op, difficulty, Skulls, LASO, and Campaign Remix.',
  headline: 'Campaign Evolved Gameplay Guide',
  summary:
    'A source-checked field guide to how Halo: Campaign Evolved plays: tactical first-person combat, a modernized sandbox, 13 campaign missions, four-player online co-op, and a replay system built around Skulls and Campaign Remix.',
} as const;

export const gameplayToc = [
  { id: 'quick-facts', label: 'Quick facts' },
  { id: 'core-loop', label: 'The core gameplay loop' },
  { id: 'modernized-systems', label: 'Modernized systems' },
  { id: 'combat-sandbox', label: 'Weapons, enemies, and vehicles' },
  { id: 'missions', label: 'The 13-mission structure' },
  { id: 'co-op', label: 'Co-op and shared progression' },
  { id: 'difficulty', label: 'Difficulty and custom modifiers' },
  { id: 'skulls-remix', label: 'Skulls, LASO, and Remix' },
  { id: 'editorial-interpretation', label: 'Editorial interpretation' },
  { id: 'sources', label: 'Sources and verification' },
] as const;

export const gameplayQuickFacts = [
  { label: 'Format', value: 'Story-driven first-person shooter campaign' },
  { label: 'Campaign', value: '10 rebuilt missions + 3 new prequel missions' },
  { label: 'Online co-op', value: 'Up to 4 players with cross-play' },
  { label: 'Local co-op', value: '2-player split-screen on consoles' },
  { label: 'Weapons', value: '17 pick-up weapons + 2 grenade types' },
  { label: 'Collectibles', value: '39 hidden Skulls + 13 Terminals' },
  { label: 'Total Skulls', value: '42, including 3 automatic Remix unlocks' },
  { label: 'Difficulty', value: 'Easy, Normal, Heroic, and Legendary' },
] as const;

export const coreGameplayLoop = [
  {
    step: '01',
    title: 'Read the encounter',
    body: 'Identify shielded targets, precision threats, vehicles, usable cover, and the weapons already present in the space before committing.',
  },
  {
    step: '02',
    title: 'Break the defense',
    body: 'Use plasma, explosives, grenades, or concentrated fire to remove shields, disable vehicles, and separate dangerous enemies from their support.',
  },
  {
    step: '03',
    title: 'Finish efficiently',
    body: 'Switch to precision headshots, close-range power weapons, or a vehicle-mounted weapon once an enemy is exposed.',
  },
  {
    step: '04',
    title: 'Recover and reposition',
    body: 'Break line of sight long enough to recharge shields and slower-regenerating health, then change angle before the next enemy wave closes in.',
  },
  {
    step: '05',
    title: 'Repurpose the battlefield',
    body: 'Trade weapons as ammunition changes, store a power-up for the right moment, or hijack an enemy vehicle and turn it into the next solution.',
  },
] as const;

export const modernizedSystems = [
  {
    system: 'Sprint',
    officialFact:
      'Master Chief can sprint, adding a faster way to reach cover or disengage.',
    practicalMeaning:
      'Use it to reset a bad angle, but do not treat it as a substitute for clearing crossfire.',
  },
  {
    system: 'Aim down sights',
    officialFact:
      'Every gun supports a precision aiming view, including weapons that were hip-fire focused in the 2001 campaign.',
    practicalMeaning:
      'ADS improves visual precision; it does not erase the spread or range identity of a weapon.',
  },
  {
    system: 'Regenerating health',
    officialFact:
      'Health packs are removed. Shields recover first, while health returns at a slower rate.',
    practicalMeaning:
      'A short retreat can restore the full combat loop, but sustained pressure remains dangerous.',
  },
  {
    system: 'Stored equipment',
    officialFact:
      'Overshield and Active Camouflage can be carried and triggered when needed instead of activating on pickup.',
    practicalMeaning:
      'Power-ups become planned encounter tools rather than automatic rewards.',
  },
  {
    system: 'Expanded vehicle play',
    officialFact:
      'Players can hijack enemy vehicles, drive a Wraith, and carry a four-player fireteam in one Warthog.',
    practicalMeaning:
      'A hostile vehicle is both a threat and a possible resource; destroying it is no longer the only answer.',
  },
] as const;

export const sandboxRoles = [
  {
    layer: 'Shield pressure',
    examples: 'Plasma Pistol, Plasma Rifle, Brute Plasma Rifle',
    use: 'Strip energy shields and create an opening for a finishing weapon.',
  },
  {
    layer: 'Precision finish',
    examples: 'Magnum, Battle Rifle, Sniper Rifle, Beam Rifle',
    use: 'Remove exposed infantry and high-value ranged threats efficiently.',
  },
  {
    layer: 'Close control',
    examples: 'Shotgun, Energy Sword, SMG',
    use: 'Stop rushing enemies and dominate short, enclosed sightlines.',
  },
  {
    layer: 'Burst and area damage',
    examples: 'Needler, Needle Rifle, SPNKr, Fuel Rod Cannon',
    use: 'Punish grouped targets, trigger supercombines, or break heavy positions.',
  },
  {
    layer: 'Flood response',
    examples: 'Shotgun, Sentinel Beam, automatic fire',
    use: 'Control fast forms and maintain damage across close-to-medium range.',
  },
  {
    layer: 'Vehicle warfare',
    examples: 'Warthog, Scorpion, Ghost, Wraith, Banshee',
    use: 'Change the scale of an encounter through mobility, armor, or mounted firepower.',
  },
] as const;

export const enemyGroups = [
  {
    title: 'Covenant forces',
    body: 'Elites, Grunts, Jackals, Hunters, and their specialist variants create mixed squads in which shields, ranged pressure, and heavy armor demand different answers.',
  },
  {
    title: 'The Flood',
    body: 'Infection, combat, carrier, and newer heavy forms turn later fights into movement and crowd-control tests instead of conventional firing lines.',
  },
  {
    title: 'Forerunner Sentinels',
    body: 'Flying machines add vertical pressure and become especially unpredictable when Remix changes faction placement.',
  },
  {
    title: 'Operation: Meteorite threats',
    body: 'The three prequel missions introduce Sacristan forces and Brutes, expanding the enemy mix beyond the original campaign.',
  },
] as const;

export const originalMissions = [
  'The Pillar of Autumn',
  'Halo',
  'The Truth and Reconciliation',
  'The Silent Cartographer',
  'Assault on the Control Room',
  '343 Guilty Spark',
  'The Library',
  'Two Betrayals',
  'Keyes',
  'The Maw',
] as const;

export const meteoriteMissions = [
  'Boarding Action',
  'The Most Dangerous Game',
  'Heavy Burden',
] as const;

export const coopFacts = [
  {
    title: 'Four-player online campaign',
    body: 'PC, Xbox Series X|S, and PlayStation 5 players can form one online fireteam with cross-play.',
  },
  {
    title: 'Two-player console split-screen',
    body: 'Xbox Series X|S and PlayStation 5 support local two-player campaign co-op.',
  },
  {
    title: 'Shared durable progress',
    body: 'Mission and Rally Point unlocks, Skulls, Terminals, and achievements synchronize through a linked Microsoft account.',
  },
  {
    title: 'Temporary progress stays local',
    body: 'Mid-mission checkpoints and exact player position do not carry between platforms.',
  },
  {
    title: 'Spaces and supplies adapt',
    body: 'Levels were adjusted for four players, and weapon spawns increase with fireteam size.',
  },
] as const;

export const difficultyRows = [
  {
    difficulty: 'Easy',
    focus: 'Story and first contact',
    guidance:
      'Best for learning navigation, enemy silhouettes, and the weapon sandbox with low pressure.',
  },
  {
    difficulty: 'Normal',
    focus: 'Balanced first run',
    guidance:
      'A forgiving way to learn weapon pairing while keeping encounters active.',
  },
  {
    difficulty: 'Heroic',
    focus: 'Tactical default',
    guidance:
      'Positioning, target order, and ammunition choices become consistently meaningful.',
  },
  {
    difficulty: 'Legendary',
    focus: 'Execution and mastery',
    guidance:
      'Mistakes become expensive; routes, power weapons, cover, and co-op recovery require planning.',
  },
] as const;

export const modifierTraits = [
  'Damage resistance',
  'Shield recharge rate',
  'Weapon and vehicle damage',
  'Melee damage',
  'Ammo behavior',
] as const;

export const skullFacts = [
  {
    value: '39',
    label: 'collectible Skulls',
    detail: 'Three are hidden in each of the 13 missions.',
  },
  {
    value: '+3',
    label: 'automatic unlocks',
    detail:
      'Adaptation, Reload, and Armistice unlock after any three hidden Skulls are collected.',
  },
  {
    value: '42',
    label: 'total usable Skulls',
    detail: 'The complete roster combines 26 returning and 16 new modifiers.',
  },
  {
    value: '17',
    label: 'LASO-required Skulls',
    detail:
      'The defined LASO set must be found before the mode becomes available.',
  },
] as const;

export const remixRules = [
  {
    title: 'Adaptation',
    body: 'Randomizes the enemy factions assigned to encounters.',
  },
  {
    title: 'Reload',
    body: 'Randomizes weapons placed throughout a mission.',
  },
  {
    title: 'Armistice',
    body: 'Prevents enemy factions from fighting one another, focusing their attention on the fireteam.',
  },
  {
    title: 'Visibility roll',
    body: 'Can apply Spore Visibility or persistent Night Vision to alter how the battlefield is read.',
  },
] as const;

export const editorialInterpretations = [
  {
    title: 'Weapon pairing matters more than a fixed “best gun” list',
    body: 'The sandbox rewards sequences: remove a shield, finish the target, then adapt to the ammunition and tools in the next space. A useful guide should explain pairings and encounter roles, not publish one universal tier list.',
  },
  {
    title: 'Modern mobility changes risk, not just travel time',
    body: 'Sprint and clearer wayfinding reduce some of the original campaign’s friction. They also make disengagement easier, so players seeking the older tension may prefer a restrained sprint style or the sprint-disabling Speed Limit Skull.',
  },
  {
    title: 'Co-op is a resource-allocation game',
    body: 'A four-player squad gains more weapon spawns, but every player still needs a role. Precision, shield break, crowd control, and vehicle operation should be distributed deliberately instead of duplicated.',
  },
  {
    title: 'Remix needs its own guide layer',
    body: 'A deterministic walkthrough can explain the standard encounter, but Adaptation and Reload deliberately break fixed enemy and weapon assumptions. Remix advice should teach decision rules rather than exact spawn scripts.',
  },
  {
    title: 'Collectibles are progression systems',
    body: 'Skulls are not only completion markers. They unlock third-person play, challenge presets, arcade effects, Campaign Remix, and eventually LASO, making exploration part of the game’s mechanical progression.',
  },
] as const;

export const verificationNotes = [
  'Official facts are drawn from Halo Waypoint, Halo Support, Xbox Wire, and PlayStation’s official feature coverage.',
  'Editorial interpretation is clearly labeled and represents this manual’s analysis of those confirmed systems.',
  'The global launch is scheduled for July 28, 2026; this guide reflects official material and Premium Early Access information available on July 25.',
  'One Halo Support collectible table labels the third Operation: Meteorite mission “Bitter Harvest,” while current early-access gameplay and reference material identify it as “Heavy Burden.” This page uses Heavy Burden and will recheck the name after global launch.',
  'Exact enemy scaling by fireteam size is not published. Only level adaptation and increased weapon spawns are treated as confirmed.',
] as const;
