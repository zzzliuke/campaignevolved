# Campaign Evolved Manual — Content Product Requirements

**Status:** Approved for implementation after editorial self-audit
**Reviewed:** July 25, 2026
**Launch language:** English only
**Production origin:** `https://campaignevolved.com`

## 1. Product position

Campaign Evolved Manual is an independent, fast, spoiler-aware field manual for
players of Halo: Campaign Evolved. It should not behave like a broad gaming news
portal. Its advantage is traceability: important claims show where they came
from, when they were checked, and whether they are official, early-access
tested, community-reported, or still awaiting verification.

The primary user jobs are:

1. Understand how the remake plays before buying or starting.
2. Pick a useful weapon pair for the next encounter.
3. Find the correct counter for a shielded, armored, aerial, or Flood threat.
4. Prepare a mission without seeing unnecessary story spoilers.
5. Understand co-op, cross-play, checkpoints, and progression.
6. Find Skulls, Terminals, Rally Points, and mission routes after verified
   screenshots are available.
7. Watch a useful official trailer, gameplay demonstration, review, or
   walkthrough without loading a page full of heavy video players.

## 2. Evidence hierarchy

Every editorial fact should be assigned one of these evidence levels.

| Level               | Meaning                                                                       | Suitable sources                                           |
| ------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Official            | Publisher, developer, platform, storefront, or game UI explicitly confirms it | Halo Waypoint, Halo Support, Xbox Wire, Steam, PlayStation |
| Early-access tested | A repeatable observation from the July 23 early-access build                  | Captured gameplay, reputable hands-on reviews              |
| Community-reported  | Useful but not independently reproduced                                       | Creator walkthroughs, community wikis, forum reports       |
| Needs recheck       | Conflicting, old, incomplete, or not yet verified                             | Pre-release estimates, uncorroborated lists                |

Official sources take precedence. A source being official does not make it
infallible: the current Halo Support collectible material conflicts with other
sources over one Operation: METEORITE mission name. Conflicts must remain
visible until the in-game mission menu or a later official correction resolves
them.

## 3. Gameplay summary

Campaign Evolved is a rebuilt version of the Halo: Combat Evolved campaign,
made in Unreal Engine 5. It remains a mission-based first-person shooter rather
than an open-world game. Ten returning missions are joined by three
Operation: METEORITE prequel missions.

The core combat loop is:

1. Read the encounter and identify shield, armor, range, and vehicle threats.
2. Use plasma, explosives, or a charged Plasma Pistol shot to remove shields
   or stop a vehicle.
3. Finish exposed targets with precision fire, close-range damage, grenades, or
   melee.
4. Move back into cover long enough for shields and the slower health recovery
   to reset.
5. Replace depleted weapons, save power weapons for the next pressure spike,
   and alternate between infantry and vehicle combat.

The remake modernizes that loop with sprint, aim-down-sights on all weapons,
recharging health, stored Overshield and Active Camo pickups, modern or classic
vehicle controls, vehicle hijacking, a drivable Wraith, and a four-seat Warthog.
It expands the usable weapon set to 17 firearms or melee weapons, adds new enemy
combinations, supports four-player online cross-platform co-op, and retains
two-player split-screen on consoles.

Replay depth comes from four difficulty levels, custom difficulty modifiers,
39 hidden Skulls plus three automatically unlocked Skulls, 13 Terminals, LASO,
and Campaign Remix. Campaign Remix can change enemy factions, weapon placement,
visibility, and other mission conditions.

### Editorial interpretation

The most useful mental model is not a conventional weapon tier list. Halo
encounters are a sequence of jobs: shield break, precision finish, crowd
control, armor damage, and safe movement. The manual should therefore connect
**enemy × range × role × available weapon**, and explain when a lower-ranked
weapon is the correct tool for the current job.

## 4. Search-result content audit

Search positions vary by date, location, and personalization. The following
pages repeatedly appeared near the top of English queries for gameplay,
missions, weapons, co-op, and walkthrough intent on July 25, 2026.

| Source                                           | Strengths                                                                                      | Problems or gaps                                                                                                                                                                               | Product response                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Halo Waypoint and Halo Support                   | First-party facts about 13 missions, nine added weapons, co-op, Skulls, Remix, and progression | Marketing page is broad; support articles are fragmented; one mission-name conflict exists                                                                                                     | Link facts to the exact official page and unite them in structured tables |
| Steam                                            | Reliable availability, edition, feature, and PC requirement information                        | Storefront copy is not tactical guidance                                                                                                                                                       | Use for purchase facts, not encounter advice                              |
| GAMES.GG hub and guides                          | Strong hub structure, quick answers, tables, internal links, and image density                 | Calls all 42 Skulls scattered collectibles; one page confuses no competitive multiplayer with no online co-op; cross-progression details are incomplete; content is ad-heavy and often shallow | Publish corrected, source-labeled answers with a clean reading experience |
| GameSpot “How Long”                              | Directly answers a high-intent question                                                        | Pre-release estimates and missing mission information became stale                                                                                                                             | Keep estimates explicitly labeled and remeasure after full release        |
| AllThings.How weapons and vehicles               | Scannable tables organized by role and faction                                                 | Addition counts and “complete” vehicle lists conflict with official material; some tactical claims lack sources                                                                                | Start with the official inventory and separate measured advice            |
| Halopedia                                        | Broad, well-cited research index                                                               | Community-edited and currently marked incomplete                                                                                                                                               | Use as a discovery source, never the sole authority                       |
| PC Gamer, GamesRadar, Windows Central, TechRadar | Useful early-access perspective on feel, pacing, performance, and value                        | Opinions and build-specific observations are not universal facts                                                                                                                               | Attribute opinions and preserve platform/build context                    |

### Confirmed competitor mistakes to avoid

- There are 39 hidden Skulls. Three additional Skulls unlock automatically
  after collection milestones; they are not three more map pickups.
- “No competitive multiplayer” does not mean “no online multiplayer.” The
  campaign supports up to four online co-op players.
- Cross-platform progression does not preserve every piece of session state.
  Mid-mission checkpoints and precise player position are not portable.
- Official materials say nine additional weapons. Secondary lists that divide
  the 17-weapon set differently should not overrule that statement.
- Campaign length is variable. Pre-release hour ranges must remain estimates,
  not guaranteed completion times.

## 5. Current-site audit

### What already works

- The homepage has one clear H1: `Campaign Evolved Manual`.
- Core campaign routes, canonical URLs, Open Graph, Twitter Cards, FAQ schema,
  and a production-domain sitemap/robots implementation already exist.
- The homepage visual system, header, footer, cards, mission index, responsive
  shell, theme support, and Cloudflare runtime are reusable.
- Authentication, database, analytics, and CMS infrastructure can remain
  available for private administration.

### What needs to change

- `/guides`, `/arsenal`, `/enemies`, `/vehicles`, and `/news` are too thin to
  compete with focused guide pages.
- The existing four campaign images are sufficient for a visual foundation but
  not for an image-led manual.
- There is no gameplay overview, source ledger, video library, collectible
  tracker, or route-level media.
- Twenty video embeds at initial render would hurt Core Web Vitals; no video
  player should load before user interaction.
- ShipAny pricing/blog content and public auth URLs are off-topic. They should
  not be linked, included in the sitemap, or promoted to crawlers.
- `llms.txt` and `llms-full.txt` must describe the actual manual rather than the
  old SaaS template.
- Mission detail URLs should stay out of the sitemap until their early-access
  routes, coordinates, screenshots, and collectibles are fully verified.

## 6. Information architecture

### Primary navigation

- Home
- Gameplay
- Missions
- Arsenal
- Guides
- Videos

Enemies, vehicles, news, about, and legal pages remain discoverable through the
homepage, contextual links, and footer.

### Launch pages

| Route                                  | Purpose                                                            | Index status                                       |
| -------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| `/`                                    | Product-level manual index and current launch status               | Index                                              |
| `/gameplay`                            | Full core-loop, modernization, co-op, difficulty, and replay guide | Index                                              |
| `/missions`                            | Spoiler-light 13-mission index                                     | Index                                              |
| `/arsenal`                             | Named 17-weapon role and counter matrix                            | Index                                              |
| `/enemies`                             | Named faction and threat-counter database                          | Index                                              |
| `/vehicles`                            | Named vehicle roles and crew guidance                              | Index                                              |
| `/guides`                              | High-intent guide roadmap and current quick answers                | Index                                              |
| `/videos`                              | Curated 20-video library with click-to-load players                | Index                                              |
| `/news`                                | Release and manual update log                                      | Index                                              |
| `/about`, legal pages                  | Editorial policy and legal context                                 | Index                                              |
| `/missions/:slug`                      | Existing provisional mission articles                              | Accessible, excluded from sitemap until verified   |
| `/pricing`, `/blog`, public auth pages | Legacy/private infrastructure                                      | No sitemap, no public navigation, crawler disallow |

## 7. Image and media requirements

### Image rules

- Images must teach, orient, or prove something; decorative repetition is not
  enough.
- Every image needs descriptive alt text unless it is purely decorative.
- Store known width and height to prevent layout shifts.
- Use WebP/AVIF for captured or generated editorial images and lazy-load
  below-the-fold media.
- Each mission step image will eventually use a stable number such as `M04-07`.
  The same number should appear in the caption, written instruction, map marker,
  and relevant video timestamp.
- Record origin, permission basis, optimization, and use in
  `docs/ASSET_PROVENANCE.md`.

### Video rules

- The July 25 snapshot contains 20 verifiable high-view candidates. It is a
  dated editorial snapshot, not a permanent YouTube-wide leaderboard.
- Store title, channel, date, view snapshot, category, spoiler level, YouTube
  ID, original URL, and local thumbnail path.
- Render a lightweight image and play button first. Only create a
  `youtube-nocookie.com` iframe after a user clicks.
- Offer a normal `youtube.com/watch` link as a fallback.
- Mark full walkthroughs and long LASO streams as spoiler-heavy.
- Do not display a “live” view count. If the snapshot is displayed, always show
  the date it was captured.

## 8. Content data model

Editorial records should support:

```ts
type EvidenceLevel =
  | 'official'
  | 'early-access-tested'
  | 'community-reported'
  | 'needs-recheck';

interface EditorialRecord {
  checkedAt: string;
  evidence: EvidenceLevel;
  sourceName: string;
  sourceUrl: string;
  spoilerLevel: 'none' | 'light' | 'heavy';
  updatedAt: string;
}
```

Long-form content belongs in typed campaign content files or MDX, not in
translation JSON. Short interface labels may continue to use Paraglide. This
keeps the English launch clean while allowing a later translation workflow for
editorial content.

## 9. First implementation scope

This release must:

1. Add a comprehensive `/gameplay` page with the verified core loop, modernized
   mechanics, co-op behavior, difficulty/replay systems, source links, visible
   review date, and editorial interpretation.
2. Add a `/videos` page containing the 20-video snapshot in a performant,
   privacy-enhanced click-to-load implementation.
3. Add locally stored YouTube thumbnails with source/provenance records.
4. Add homepage entry points for the gameplay guide and video library.
5. Expand arsenal, enemies, and vehicles from generic categories to named,
   scannable reference tables.
6. Remove the language selector from the English-only public site.
7. Rewrite `llms.txt` and `llms-full.txt` around the manual.
8. Keep provisional mission details out of `sitemap.xml`, while adding
   `/gameplay` and `/videos`.
9. Disallow legacy SaaS/auth surfaces in `robots.txt`.
10. Add appropriate `VideoGame`, `ItemList`, `Article`, and `VideoObject`
    structured data without claiming first-party ownership of the videos.
11. Preserve the existing private SaaS/admin capabilities and the current
    uncommitted analytics and public-login-removal changes.

## 10. Code build plan

### Phase A — Evidence and data

1. Create typed source, gameplay, reference, and video records.
2. Keep long-form English editorial content out of translation JSON.
3. Download and document the 20 authorized thumbnails.

### Phase B — Core content surfaces

1. Build `/gameplay` with source-level separation and long-form navigation.
2. Build `/videos` with category grouping and click-to-load embeds.
3. Replace generic arsenal, enemy, and vehicle cards with named matrices.
4. Turn `/guides` into a live-content index plus a visible verification queue.
5. Update `/news` for the July 23–28 launch window.

### Phase C — Discovery and navigation

1. Add Gameplay and Videos to the primary navigation and footer.
2. Add gameplay and top-video sections to the homepage without changing its
   H1.
3. Remove the public language selector and keep the launch canonical in
   English.

### Phase D — Search and machine-readable content

1. Add page metadata and relevant Article, VideoGame, ItemList, VideoObject,
   BreadcrumbList, and FAQ structured data.
2. Remove provisional mission details from the sitemap.
3. Block and `noindex` legacy SaaS, blog, and public authentication surfaces.
4. Rewrite `llms.txt`, `llms-full.txt`, `robots.txt`, and `sitemap.xml`.

### Phase E — Verification and release

1. Run formatting, strict TypeScript, production build, and security scan.
2. Test desktop and mobile routes, links, images, video activation, metadata,
   sitemap, robots, and error handling.
3. Commit only reviewed files, push to GitHub, verify the Cloudflare deployment,
   and check the production origin.

## 11. Post-launch content backlog

After the July 28 global release and hands-on capture:

1. Re-verify all mission names against the game menu.
2. Capture every Rally Point, Skull, Terminal, no-return point, and essential
   weapon spawn in the current production build.
3. Replace provisional mission text with complete walkthroughs.
4. Publish a local-storage collectible tracker with no account requirement.
5. Add spoiler toggle, solo/2-player/4-player advice switch, and an
   enemy-to-counter lookup.
6. Publish release-time, install, known-issues, cross-play, beginner, LASO, and
   accessibility guides as separate articles.
7. Add mission URLs to the sitemap only after each page passes the quality
   checklist.
8. Maintain a public corrections and version log.

## 12. SEO and quality acceptance criteria

- The homepage title and H1 begin with `Campaign Evolved Manual`.
- Every new indexable page has a unique title, description, canonical URL,
  Open Graph data, and an appropriate H1.
- `sitemap.xml` contains only launch-quality English routes and no
  `/missions/:slug` URLs.
- `robots.txt` links the production sitemap and blocks legacy/private surfaces.
- The site exposes no Chinese routes, hreflang entries, or locale selector.
- All 20 video cards are usable by keyboard, have a descriptive player title,
  and do not load YouTube JavaScript until interaction.
- No below-the-fold image lacks lazy loading, dimensions, and useful alt text.
- Official facts have source links and a visible July 25 verification date.
- Opinions are labeled as editorial interpretation.
- Production build, typecheck, format check, launch audit, and security scan
  pass before commit.
- GitHub push triggers Cloudflare deployment; production HTTPS, canonical,
  sitemap, robots, assets, and new pages return valid responses.

## 13. Editorial self-audit

The first draft was checked against the user brief, the current codebase, the
July 25 search sample, and the evidence hierarchy. The following corrections
were incorporated:

- Changed “YouTube top 20” to a dated, reproducible high-view candidate
  snapshot because YouTube search is regional and mutable.
- Rejected 20 eager iframes in favor of click-to-load players.
- Kept mission articles accessible but removed them from sitemap eligibility
  until screenshots and coordinates are verified.
- Separated official facts from early-access opinions.
- Added the official-page contradiction as a tracked issue rather than choosing
  a mission name without sufficient evidence.
- Preserved private admin/auth infrastructure while removing public discovery,
  avoiding damage to the existing CMS and deployment foundation.
- Prioritized a gameplay hub, media library, and named reference matrices before
  creating many thin SEO articles.

This PRD is ready to drive the first implementation.
