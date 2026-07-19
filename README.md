# Campaign Evolved Manual

Production codebase for [campaignevolved.com](https://campaignevolved.com), an independent English-language campaign manual with mission walkthroughs, arsenal references, enemy tactics, vehicle notes, co-op guidance, release updates, and spoiler-aware editorial content.

The public site is built on the ShipAny Next SaaS engine. Authentication, subscriptions, payments, credits, API keys, RBAC, CMS, administration, internationalization, email, storage, and multi-database support remain available behind the content experience.

## Local development

Requirements: Node.js 22+ and pnpm 11.

```bash
pnpm install --frozen-lockfile
copy .env.example .env.development
pnpm db:push
pnpm dev
```

Set a strong local `AUTH_SECRET` in `.env.development`. Local SQLite data is written to `data/` and is ignored by Git.

The production site currently exposes English only on unprefixed routes. Legacy `/zh` URLs permanently redirect to their English equivalents. Chinese translation sources remain in the repository for a future internationalized release but are not compiled into the current site.

## Quality checks

```bash
pnpm format:check
pnpm typecheck
pnpm build
pnpm cf:build
```

Run the repository `security-scan` skill before every commit. Run `launch-audit all` before a production deployment.

## Content architecture

- `src/routes/` — public manual pages, SaaS pages, and API endpoints
- `src/blocks/` — localized page sections
- `src/components/campaign/` — prop-driven public-site components
- `messages/en.json` — active flat Paraglide message source
- `messages/zh.json` — retained future internationalization source (inactive)
- `public/images/campaign/` — optimized original campaign artwork
- `docs/research/` — reference analysis, topology, behavior, and component specs
- `docs/ASSET_PROVENANCE.md` — generated-asset provenance and optimization record

Primary public routes include `/missions`, `/arsenal`, `/enemies`, `/vehicles`, `/guides`, `/news`, `/about`, and `/disclaimer`. Core SaaS surfaces remain under `/sign-in`, `/sign-up`, `/settings`, `/admin`, and `/api`.

## Database and migrations

Development uses direct schema sync:

```bash
pnpm db:push
```

Production changes must use reviewed migrations:

```bash
pnpm db:generate
pnpm db:migrate
```

Cloudflare production uses D1 by default. PostgreSQL through Hyperdrive remains supported by the underlying engine.

## Cloudflare deployment

Production resource metadata and custom-domain routes are committed in `wrangler.jsonc`; secrets are stored only as encrypted Cloudflare Worker secrets. Cloudflare Workers Builds watches `main`, runs `pnpm cf:build`, and deploys with `npx wrangler deploy` after every push.

For a manual deployment:

```bash
pnpm cf:build
pnpm cf:deploy
```

Production public configuration:

```env
VITE_APP_URL=https://campaignevolved.com
VITE_APP_NAME=Campaign Evolved Manual
DATABASE_PROVIDER=d1
```

Required production secrets include `AUTH_SECRET` and `CONFIG_ENCRYPTION_KEY`.

## SEO contract

- The homepage title begins with `Campaign Evolved Manual`.
- Canonical production origin is `https://campaignevolved.com`.
- Every public editorial route defines an English title, description, canonical, Open Graph, and Twitter Card metadata.
- Legacy Chinese URLs redirect permanently to their canonical English equivalents and are excluded from Sitemap metadata.
- `/sitemap.xml` and `/robots.txt` are server routes and must never emit preview or localhost origins in production.

## Legal position

This is an independent companion site. Product names and trademarks belong to their respective owners. The site does not present itself as an official publisher resource. See `/disclaimer` for the full notice.

## License

Proprietary software. See [LICENSE](./LICENSE).
