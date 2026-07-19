# Component Specifications

## `CampaignLogo`

- SVG-only original monogram: split `C/E` shape contained by an orbital arc.
- Monochrome foreground with cyan or amber accent; remains readable at 24px.
- Props: `compact`, `className`, optional text visibility.

## `CampaignHeader`

- Durable component receiving nav copy and actions via props.
- Fixed, 72px desktop / 60px mobile, translucent graphite surface.
- Mobile menu is accessible and body-safe; locale/theme/auth actions remain available.

## `CinematicHero`

- Props: eyebrow, title, description, primary/secondary actions, stats, responsive image sources.
- 760px desktop / 700px mobile minimum hero height.
- H1 max width 760px, typography uses condensed-feeling uppercase system stack with tracking.

## `ManualIndexCard`

- Props: icon, index, title, description, meta, href, accent.
- 4-up desktop / 2-up tablet / 1-up mobile.
- HUD corner cuts implemented with pseudo-elements, not inline SVG noise.

## `MissionCard`

- Props: mission number, title, phase, description, difficulty note, href.
- Information density inspired by Steam metadata blocks; no storefront styling.

## `CinematicFeature`

- Props: image, eyebrow, title, body, bullets, href, alignment, tone.
- Full-bleed 700px desktop; mobile transforms into 620px image-backed stack.
- Original notched top edge; directional gradient preserves readability.

## `IntelCard`

- Props: icon, title, body, stat, href.
- Used for sandbox, co-op, skulls and encounters.

## `ManualPageShell`

- Shared public-page header/footer and breadcrumb treatment.
- Receives all content via props; does not read i18n itself.

## `GuideArticle`

- Two-column desktop: sticky 260px table of contents + 740px article.
- Single-column mobile with inline jump navigation.
- Supports callouts, checklists, metadata and breadcrumbs.

## `CampaignFooter`

- Props: grouped routes, short disclaimer, copyright.
- Contains locale selector and source/legal links; no template vendor branding.
