# Fox Mowing National Website

This repository is for the Fox Mowing franchise website and enquiry software.

The project is a production-oriented **Astro 7** website for Fox Mowing & Gardening across Australia and New Zealand. It includes national service and regional content, an accessible responsive interface, customer quote and franchise enquiry journeys, Cloudflare D1 persistence, search metadata, crawler files, and Cloudflare Workers deployment configuration.

## Technology

| Area | Implementation |
|---|---|
| Web framework | Astro 7 with strict TypeScript |
| Hosting runtime | Cloudflare Workers with static assets |
| Database | Cloudflare D1 |
| Validation | Zod |
| Tests | Vitest, Astro diagnostics, built-route audit |
| Package manager | pnpm 10.4.1 |
| Node.js | 22.x; project tooling pins 22.20.0 |

## Local setup

```bash
corepack enable
corepack prepare pnpm@10.4.1 --activate
pnpm install
pnpm dev
```

The local website is served by Astro. Copy `.env.example` to an untracked local environment file only when optional integrations need values. Never commit secrets.

## Quality gates

Run the maintained checks before merging or deploying:

```bash
pnpm test
pnpm check
pnpm build
pnpm test:links
pnpm exec wrangler deploy --dry-run
```

## D1 enquiries

The checked-in migration is in `migrations/0001_enquiries.sql`. Apply migrations to a local D1 database for isolated development verification:

```bash
pnpm exec wrangler d1 migrations apply ENQUIRIES_DB --local
```

Apply migrations to the bound remote D1 database only after confirming the production account and binding:

```bash
pnpm exec wrangler d1 migrations apply ENQUIRIES_DB --remote
```

Customer and franchise enquiries are intentionally stored as distinct kinds and redirect to separate success routes. Optional Turnstile and webhook integrations are described in `.env.example` and the owner guide.

## Deployment

The active `wrangler.jsonc` targets the Astro-supported **Cloudflare Workers static-assets architecture**. Before the first production deployment, replace the D1 database placeholder with the database identifier from the intended Cloudflare account and configure required secrets outside Git.

```bash
pnpm build
pnpm exec wrangler deploy
```

## Content and operations

The editable content model is under `src/data/`. The supplied Fox logo and deployment-managed imagery are referenced through the project asset registry. Do not redraw, recolour, distort, or substitute the supplied logo.

| Document | Purpose |
|---|---|
| [`docs/owner-guide.md`](docs/owner-guide.md) | Content editing, forms, environment, deployment, and backup guidance |
| [`docs/image-register.md`](docs/image-register.md) | Asset provenance and owner-replacement register |
| [`docs/redirect-map.md`](docs/redirect-map.md) | Legacy route and canonical redirect map |
| [`docs/astro-cloudflare-research.md`](docs/astro-cloudflare-research.md) | Deployment architecture decision and official-source notes |

## Security and privacy

Do not commit `.env`, `.dev.vars`, API keys, Cloudflare credentials, customer data, local D1 state, or generated build directories. Both enquiry endpoints use shared server-side validation and anti-spam controls; production operators remain responsible for retention, access, notification, and privacy procedures.
