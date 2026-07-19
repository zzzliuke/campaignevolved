# Interaction and Behavior Notes

## Global navigation

- Header remains fixed while scrolling and gains a stronger border/background after the first viewport.
- Desktop navigation exposes the primary manual categories.
- Mobile navigation opens as an accessible sheet, closes after route selection, and preserves locale/theme controls.

## Hero

- Decorative scan line and reticle elements move subtly without blocking content.
- Primary CTA opens the mission index; secondary CTA opens the field guide collection.
- Background is a responsive `<picture>` with an intentional dark copy-safe region.

## Cards

- Hover: 2–4px lift, border shifts from graphite to cyan/amber, image scales no more than 1.03.
- Focus: visible 2px keyboard focus ring with adequate contrast.
- Cards are entire-link targets only when they contain one destination; nested links are avoided.

## Cinematic sections

- Waypoint-style notched separators are reproduced with an original CSS polygon.
- Desktop uses left/right content alignment by section; mobile always uses bottom-aligned copy over a directional gradient.
- Decorative HUD labels remain `aria-hidden` when they do not convey content.

## FAQ

- Native button/accordion semantics with `aria-expanded` and keyboard operation.
- FAQ content is mirrored in JSON-LD on the homepage.

## Reduced motion and accessibility

- `prefers-reduced-motion: reduce` removes scans, ambient drift and card transforms.
- All important copy remains visible without JavaScript animation.
- Images include useful alt text; purely atmospheric images use empty alt attributes.
