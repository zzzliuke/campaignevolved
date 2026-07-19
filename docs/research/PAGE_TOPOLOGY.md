# Campaign Evolved Manual — Page Topology

## Design intent

The site combines the cinematic, full-bleed chapter rhythm observed on Halo Waypoint with the dense, scannable information architecture observed on Steam. The result is an independent field-manual experience rather than a storefront or a clone.

## Public route map

- `/` — manual overview, launch status, guide categories, featured missions, field-notes, FAQ
- `/missions` — complete 13-mission index and progression guidance
- `/missions/:slug` — mission brief, objectives, checkpoints, collectibles and tactical notes
- `/arsenal` — weapons and equipment reference
- `/enemies` — enemy role and counter-play reference
- `/vehicles` — vehicle and traversal reference
- `/guides` — curated walkthrough and systems guides
- `/news` — release and site update notes
- `/about` — editorial scope and source policy
- `/disclaimer` — independent-site and trademark disclaimer
- `/privacy-policy` and `/terms-of-service` — existing legal surfaces, rebranded

Core SaaS routes (`/sign-in`, `/sign-up`, `/settings`, `/admin`, `/pricing`, APIs) remain intact and are not duplicated in the marketing navigation.

## Homepage section order

1. Fixed translucent command header
2. Cinematic hero with manual identity, release state and primary guide actions
3. Compact status rail: 13 missions, 4-player online co-op, cross-play, July 2026 launch
4. Manual index: Missions / Arsenal / Enemies / Vehicles
5. Featured mission dossiers
6. Cinematic editorial section: mission preparation
7. Systems cards: sandbox, skulls, co-op, new encounters
8. Cinematic editorial section: field manual
9. Latest field notes
10. FAQ
11. Structured footer and legal disclaimer

## Responsive behavior

- `>= 1024px`: full-bleed image sections with lateral copy panels; 12-column content grid; header navigation visible.
- `768–1023px`: 2-column cards; cinematic copy becomes a lower overlay; tighter notch geometry.
- `< 768px`: single-column cards; hero copy sits over a stronger bottom gradient; mobile sheet navigation; 44px minimum touch targets.
- Motion is limited to opacity/translate reveals and ambient scan lines, all disabled by `prefers-reduced-motion`.

## Reference observations

- Waypoint: fixed 50px header, near-black base, yellow/cyan accent pairing, large tracking on headings, alternating full-bleed sections, notched top edges and mobile-specific bottom gradients.
- Steam: dark navy information surface, compact metadata chips, dense card grouping, clear section labels and highly scannable specification blocks.
- Original implementation: no copied markup, no hotlinked reference assets, no recognizable characters or franchise marks.
