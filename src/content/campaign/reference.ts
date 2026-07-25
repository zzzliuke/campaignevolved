export type EvidenceLevel =
  | 'Official'
  | 'Early-access tested'
  | 'Community-reported'
  | 'Needs recheck';

export interface WeaponReference {
  name: string;
  family: 'UNSC' | 'Covenant' | 'Forerunner';
  role: string;
  range: 'Close' | 'Close–mid' | 'Mid' | 'Mid–long' | 'Long';
  bestFor: string;
  fieldNote: string;
  introduced: 'Returning' | 'Expanded arsenal';
}

export const WEAPONS: WeaponReference[] = [
  {
    name: 'Magnum Pistol',
    family: 'UNSC',
    role: 'Precision sidearm',
    range: 'Mid–long',
    bestFor: 'Unshielded headshots and distant cleanup',
    fieldNote:
      'Pair it with a shield-breaking or crowd-control weapon so its precision is never wasted on the wrong job.',
    introduced: 'Returning',
  },
  {
    name: 'Assault Rifle',
    family: 'UNSC',
    role: 'Sustained automatic fire',
    range: 'Close–mid',
    bestFor: 'Mobile infantry pressure and finishing weak groups',
    fieldNote:
      'Short bursts preserve accuracy. Commit to full-auto fire only when the target is close enough to keep most rounds on armor or body.',
    introduced: 'Returning',
  },
  {
    name: 'Shotgun',
    family: 'UNSC',
    role: 'Close-range power',
    range: 'Close',
    bestFor: 'Charging enemies and confined Flood encounters',
    fieldNote:
      'Treat every doorway as a range check. If you cannot guarantee a decisive hit, create space before firing.',
    introduced: 'Returning',
  },
  {
    name: 'Sniper Rifle',
    family: 'UNSC',
    role: 'Long-range precision',
    range: 'Long',
    bestFor: 'Priority targets, exposed operators, and safe opening picks',
    fieldNote:
      'Use the first shot to remove the enemy that controls the arena, not simply the closest target.',
    introduced: 'Returning',
  },
  {
    name: 'SPNKr Rocket Launcher',
    family: 'UNSC',
    role: 'Anti-vehicle heavy weapon',
    range: 'Mid–long',
    bestFor: 'Vehicles, fortified positions, and dense groups',
    fieldNote:
      'Its vehicle lock helps at range, but the two-shot capacity still rewards a safe reload position and disciplined splash spacing.',
    introduced: 'Returning',
  },
  {
    name: 'SMG',
    family: 'UNSC',
    role: 'Close-range automatic',
    range: 'Close',
    bestFor: 'Fast body damage and aggressive room clearing',
    fieldNote:
      'High fire rate and a large magazine provide forgiving close pressure, but performance falls away quickly across open ground.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Battle Rifle',
    family: 'UNSC',
    role: 'Precision burst rifle',
    range: 'Mid–long',
    bestFor: 'Controlled headshots and consistent medium-range lanes',
    fieldNote:
      'Build the loadout around its reliable finish potential; carry plasma or explosives in the second slot for shields and armor.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Plasma Pistol',
    family: 'Covenant',
    role: 'Shield disruption',
    range: 'Close–mid',
    bestFor: 'Removing energy shields and temporarily stunning vehicles',
    fieldNote:
      'A charged shot creates the opening; swap immediately to precision damage instead of waiting for another charge.',
    introduced: 'Returning',
  },
  {
    name: 'Plasma Rifle',
    family: 'Covenant',
    role: 'Automatic energy pressure',
    range: 'Close–mid',
    bestFor: 'Overloading shields and controlling short lanes',
    fieldNote:
      'Fire in controlled bursts to limit heat and spread. It is a setup tool as much as a finishing weapon.',
    introduced: 'Returning',
  },
  {
    name: 'Needler',
    family: 'Covenant',
    role: 'Tracking burst damage',
    range: 'Close–mid',
    bestFor: 'Mobile infantry that cannot easily break line of sight',
    fieldNote:
      'Keep a target exposed long enough to build a supercombine. Heavy armor and solid cover interrupt the weapon’s main advantage.',
    introduced: 'Returning',
  },
  {
    name: 'Energy Sword',
    family: 'Covenant',
    role: 'Melee power weapon',
    range: 'Close',
    bestFor: 'Rapid removal of dangerous shielded targets',
    fieldNote:
      'The lunge closes the last gap, not the entire room. Approach through cover and keep an exit route for the recovery animation.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Beam Rifle',
    family: 'Covenant',
    role: 'Long-range energy precision',
    range: 'Long',
    bestFor: 'Priority-target picks without magazine reloads',
    fieldNote:
      'Pace shots before overheat. The weapon is strongest when a steady sightline matters more than maximum fire rate.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Fuel Rod Cannon',
    family: 'Covenant',
    role: 'Heavy explosive',
    range: 'Mid–long',
    bestFor: 'Groups, armor, and targets behind low cover',
    fieldNote:
      'The projectile arcs and travels slowly. Lead lateral movement and aim above distant targets rather than correcting after the first miss.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Needle Rifle',
    family: 'Covenant',
    role: 'Precision supercombine rifle',
    range: 'Mid–long',
    bestFor: 'Sustained precision pressure on exposed infantry',
    fieldNote:
      'Keep consecutive hits on one target. Spreading shots across a group gives up the supercombine that defines the weapon.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Spiker',
    family: 'Covenant',
    role: 'Automatic rifle and melee pressure',
    range: 'Close–mid',
    bestFor: 'Aggressive infantry pushes and close follow-up melee',
    fieldNote:
      'Use its blade as part of the weapon plan. At longer range, move to a precision option instead of forcing automatic fire.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Sentinel Beam',
    family: 'Forerunner',
    role: 'Continuous energy beam',
    range: 'Close–mid',
    bestFor: 'Flood suppression and targets you can track continuously',
    fieldNote:
      'Damage depends on keeping the beam connected. Start firing only when cover, movement, and target speed let you maintain contact.',
    introduced: 'Expanded arsenal',
  },
  {
    name: 'Brute Plasma Rifle',
    family: 'Covenant',
    role: 'Overclocked automatic energy',
    range: 'Close–mid',
    bestFor: 'Fast shield pressure in the new prequel missions',
    fieldNote:
      'Its higher output comes with heat pressure. Use short, deliberate windows instead of holding the trigger through an overheat.',
    introduced: 'Expanded arsenal',
  },
];

export interface EquipmentReference {
  name: string;
  role: string;
  use: string;
}

export const EQUIPMENT: EquipmentReference[] = [
  {
    name: 'Frag Grenade',
    role: 'Area denial',
    use: 'Bounce it around cover or into a lane; the first impact starts the detonation timing.',
  },
  {
    name: 'Plasma Grenade',
    role: 'Sticky explosive',
    use: 'Use a direct stick for a decisive hit or place it where a shielded target must move.',
  },
  {
    name: 'Overshield',
    role: 'Stored defense',
    use: 'Pick it up, then trigger it for the encounter that would otherwise exhaust normal recovery space.',
  },
  {
    name: 'Active Camo',
    role: 'Stored stealth',
    use: 'Activate it for repositioning, target isolation, or a safer opening; movement and attacks can make the user easier to detect.',
  },
];

export interface EnemyReference {
  name: string;
  faction: string;
  battlefieldRole: string;
  firstRead: string;
  counterPlan: string;
  evidence: EvidenceLevel;
}

export const ENEMIES: EnemyReference[] = [
  {
    name: 'Grunts',
    faction: 'Covenant',
    battlefieldRole: 'Numerous light infantry',
    firstRead:
      'Locate their supporting Elite, turret, or heavy weapon before chasing individual stragglers.',
    counterPlan:
      'Precision headshots and controlled automatic fire clear them quickly. Grenades punish groups that remain behind the same cover.',
    evidence: 'Official',
  },
  {
    name: 'Jackals',
    faction: 'Covenant',
    battlefieldRole: 'Shield wall and ranged pressure',
    firstRead:
      'Separate shield-bearing infantry from Beam Rifle or elevated variants before entering an exposed lane.',
    counterPlan:
      'Hit the shield gap or force a stagger, then finish with precision. Remove distant snipers before advancing on the shield line.',
    evidence: 'Official',
  },
  {
    name: 'Elites',
    faction: 'Covenant',
    battlefieldRole: 'Shielded leaders and flankers',
    firstRead:
      'Track shield state, weapon type, and retreat path; a wounded Elite can reset the fight if allowed to recover.',
    counterPlan:
      'Break shields with plasma, explosives, or concentrated team fire, then swap to precision damage before recovery begins.',
    evidence: 'Official',
  },
  {
    name: 'Hunters',
    faction: 'Covenant',
    battlefieldRole: 'Paired heavy armor',
    firstRead:
      'Do not fight both from the same narrow angle. Create enough space to read the charge and expose vulnerable plating.',
    counterPlan:
      'Split their attention in co-op, dodge rather than backpedal, and reserve heavy damage for exposed weak areas.',
    evidence: 'Official',
  },
  {
    name: 'Brutes',
    faction: 'Sacristan / Covenant',
    battlefieldRole: 'Aggressive heavy infantry',
    firstRead:
      'Operation: METEORITE introduces close pressure that can collapse a static firing line.',
    counterPlan:
      'Preserve distance, remove supporting infantry, and combine shield pressure with a high-damage finish before the push reaches cover.',
    evidence: 'Official',
  },
  {
    name: 'Flood infection forms',
    faction: 'Flood',
    battlefieldRole: 'Swarm and reanimation pressure',
    firstRead:
      'Count bodies, approach routes, and remaining combat forms rather than focusing on a single small target.',
    counterPlan:
      'Use wide, efficient damage and avoid wasting rare precision ammunition. Keep enough space to prevent a swarm from hiding larger threats.',
    evidence: 'Official',
  },
  {
    name: 'Flood combat and pure forms',
    faction: 'Flood',
    battlefieldRole: 'Fast mixed-range assault',
    firstRead:
      'Expect dropped weapons, sudden direction changes, and new shapes within a familiar encounter.',
    counterPlan:
      'Favor immediate stopping power, control doorways, and re-check fallen enemies before leaving the room.',
    evidence: 'Official',
  },
  {
    name: 'Flood-infected Hunters',
    faction: 'Flood',
    battlefieldRole: 'Remixed armored threat',
    firstRead:
      'Treat the silhouette as a heavy target while expecting Flood behavior to change familiar timing.',
    counterPlan:
      'Keep a heavy option in reserve, maintain lateral space, and verify the current build’s weak-point behavior before relying on a fixed route.',
    evidence: 'Early-access tested',
  },
  {
    name: 'Sentinels',
    faction: 'Forerunner',
    battlefieldRole: 'Aerial support and beam pressure',
    firstRead:
      'Look above the normal infantry sightline and identify which unit has uninterrupted beam contact.',
    counterPlan:
      'Break line of sight, use accurate mid-range fire, and clear a group before switching attention back to ground threats.',
    evidence: 'Official',
  },
];

export interface VehicleReference {
  name: string;
  side: 'UNSC' | 'Covenant';
  role: string;
  crew: string;
  strongestUse: string;
  failureMode: string;
  evidence: EvidenceLevel;
}

export const VEHICLES: VehicleReference[] = [
  {
    name: 'Warthog',
    side: 'UNSC',
    role: 'Fast transport and mobile fire support',
    crew: 'Up to four total',
    strongestUse:
      'Circle an encounter, keep the turret active, and use the extra passenger position to carry a full online fireteam.',
    failureMode:
      'Driving directly into a fixed firing line removes the vehicle’s mobility advantage and strands every passenger in one danger zone.',
    evidence: 'Official',
  },
  {
    name: 'Scorpion',
    side: 'UNSC',
    role: 'Heavy armor and anti-vehicle fire',
    crew: 'Driver plus up to four riders',
    strongestUse:
      'Open fortified positions from range while riders cover nearby infantry and angles the main cannon cannot turn to immediately.',
    failureMode:
      'Tight geometry, exposed rear approaches, and separated escorts let small threats surround a vehicle built for longer lanes.',
    evidence: 'Official',
  },
  {
    name: 'Ghost',
    side: 'Covenant',
    role: 'Recon and light attack',
    crew: 'One operator',
    strongestUse:
      'Strafe, boost through exposed transitions, and apply sustained plasma pressure without becoming a stationary turret.',
    failureMode:
      'Low durability punishes straight-line attacks, failed boost exits, and hovering inside concentrated infantry fire.',
    evidence: 'Official',
  },
  {
    name: 'Wraith',
    side: 'Covenant',
    role: 'Heavy artillery',
    crew: 'One operator',
    strongestUse:
      'Arc plasma mortar shots over cover and force defenders to leave protected positions; Campaign Evolved makes it player-drivable.',
    failureMode:
      'Slow movement and limited close awareness create openings for hijacking, explosives, and attacks from below the firing arc.',
    evidence: 'Official',
  },
  {
    name: 'Banshee',
    side: 'Covenant',
    role: 'Aerial attack and reconnaissance',
    crew: 'One pilot',
    strongestUse:
      'Change elevation, strafe targets, and use boost to disengage before ground fire builds sustained contact.',
    failureMode:
      'Low durability and predictable attack runs turn hovering or repeated approaches from one angle into easy counterfire.',
    evidence: 'Official',
  },
  {
    name: 'Shade Turret',
    side: 'Covenant',
    role: 'Stationary plasma fire',
    crew: 'One gunner',
    strongestUse:
      'Hold a defined infantry lane when nearby cover prevents immediate precision or explosive retaliation.',
    failureMode:
      'A fixed position is easy to range, flank, or target with heavy weapons once the operator’s firing arc is understood.',
    evidence: 'Official',
  },
];

export const REFERENCE_SOURCES = [
  {
    name: 'Halo Support — Weapons & Vehicles',
    url: 'https://support.halowaypoint.com/hc/en-us/articles/50948184078228-Weapons-Vehicles-in-Halo-Campaign-Evolved',
  },
  {
    name: 'Halo: Campaign Evolved official game page',
    url: 'https://www.halowaypoint.com/en-us/games/halo-campaign-evolved',
  },
  {
    name: 'PlayStation Blog — 13 modernizations',
    url: 'https://blog.playstation.com/2026/07/23/13-ways-halo-campaign-evolved-modernizes-the-iconic-fps/',
  },
] as const;
