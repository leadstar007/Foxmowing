# Fox Mowing National Website Owner Guide

## Central Editing Model

Routine website content is centralised in `src/data/site.ts`. The `BRAND` object controls the national name, phone, email, canonical domain and Fox Lime reference. The `ASSETS` and `heroSlides` objects control immutable image URLs. The `services`, `regions`, `faqs`, `adviceArticles`, and `mainNav` collections drive repeated cards, routes, form choices and links. Page-specific national copy is in `src/data/pages.ts`.

| Content task | Primary file |
| --- | --- |
| Change national phone, email or canonical URL | `src/data/site.ts` |
| Replace a photo | `src/data/site.ts`, then update `docs/image-register.md` |
| Edit four-slide hero copy or responsive sources | `heroSlides` in `src/data/site.ts` |
| Edit services, regions, FAQs, articles or navigation | `src/data/site.ts` |
| Edit national information-page copy | `src/data/pages.ts` |
| Change form fields or step behaviour | `src/components/EnquiryForm.astro` and `src/lib/enquiries.ts` |
| Change form persistence or webhook delivery | `src/lib/submit-enquiry.ts` and `migrations/` |
| Change layout or visual tokens | `src/styles/global.css` |

## Enquiry Operations

Customer quote requests and franchise enquiries use distinct schemas, endpoints and success pages. They share one Cloudflare D1 table with a required `kind` discriminator so operations can filter the two streams without duplicating infrastructure. Forms use browser and server validation, a hidden honeypot, explicit consent and optional Cloudflare Turnstile verification. No visitor account is required.

Database changes are SQL-migration-first: add a numbered file in `migrations/`, review it, apply it with Wrangler, and verify the remote D1 table. Avoid destructive commands. Project rollback does not restore D1 rows; export or back up data before structural or bulk changes. The checked-in `wrangler.jsonc` contains a database ID placeholder that must be replaced with the production D1 ID.

## Analytics Event Contract

Analytics is intentionally provider-neutral. Add an approved consent-aware provider only after governance sign-off. Never send names, email addresses, phone numbers, addresses or free-text enquiry content to analytics.

## Release and Deployment

This is an **Astro 7 hybrid site for Cloudflare Workers with static assets**. Public pages are prerendered; the two enquiry endpoints run at the edge and persist to D1. Use Node 22 LTS and pnpm 10. Before every release run `pnpm test`, `pnpm check`, `pnpm build`, and `pnpm test:links`. Review desktop and mobile views for `/`, `/services`, `/locations`, `/join-fox-team`, `/free-quote`, and `/join-fox/enquiry`. Confirm both API routes against the intended D1 database and inspect Cloudflare runtime logs after deployment.

For GitHub deployment, connect the repository to **Cloudflare Workers Builds**, use build command `pnpm build`, deploy command `pnpm exec wrangler deploy`, and Node `22`. Create a D1 database, replace the placeholder ID in `wrangler.jsonc`, and apply `migrations/0001_enquiries.sql` with Wrangler before the first live form submission. Configure `TURNSTILE_SECRET_KEY` only when a matching Turnstile widget/site key is added; optional `CRM_WEBHOOK_URL` and `NOTIFICATION_WEBHOOK_URL` send post-storage JSON notifications. Update `astro.config.mjs`, `src/data/site.ts`, `public/robots.txt`, and `public/llms.txt` if the final canonical domain differs from `https://foxmowing.com.au`.

The repository includes `_headers` and `_redirects` for Cloudflare Workers static assets. Review the Content Security Policy whenever a new external script, font, form or media provider is introduced. Do not weaken it globally to resolve an integration problem.

## Backup and Recovery

Git history and project checkpoints cover source code and configuration but do not restore D1 rows. Before high-risk releases, retain the latest stable commit/checkpoint, export enquiry data through approved Cloudflare operations, and keep authoritative source images separately.

## Content Safeguards

Do not publish fabricated reviews, ratings, testimonials, local coverage claims, completed-job counts, franchise income claims, or unverified local-business entities. The Reviews page is intentionally an integration-ready explanation until approved review data is available. Do not modify the supplied Fox logo artwork.
