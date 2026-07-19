# Campaign Evolved Manual

Production codebase for [campaignevolved.com](https://campaignevolved.com), an independent bilingual campaign manual with mission walkthroughs, arsenal references, enemy tactics, vehicle notes, co-op guidance, release updates, and spoiler-aware editorial content.

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

The English base locale uses unprefixed routes. Simplified Chinese uses `/zh`, for example `/missions` and `/zh/missions`.

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
- `messages/en.json` and `messages/zh.json` — flat Paraglide message sources
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

1. Copy `wrangler.example.jsonc` to the ignored `wrangler.jsonc`.
2. Set the production Worker name, D1 database binding, compatibility date, and custom-domain routes.
3. Configure secrets with Wrangler; never commit them.
4. Build and deploy:

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
- Every public editorial route defines localized title, description, canonical, Open Graph, Twitter Card, and hreflang metadata.
- `/sitemap.xml` and `/robots.txt` are server routes and must never emit preview or localhost origins in production.

## Legal position

This is an independent companion site. Product names and trademarks belong to their respective owners. The site does not present itself as an official publisher resource. See `/disclaimer` for the full notice.

## License

Proprietary software. See [LICENSE](./LICENSE).
