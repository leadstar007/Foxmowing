# Astro and Cloudflare Technical Research

Research date: 15 July 2026.

| Decision area | Official guidance | Project decision |
| --- | --- | --- |
| Astro version | Astro’s official upgrade guide identifies **Astro 7.0.9** as the current release. | Use Astro 7 with an exact compatible package range recorded in `package.json`. |
| Cloudflare adapter | The official `@astrojs/cloudflare` guide identifies adapter **v14.1.3** and states that it supports on-demand rendered routes and Cloudflare bindings. | Use the Cloudflare adapter because enquiry endpoints require server execution. |
| Rendering model | Astro states that static sites require no adapter, while on-demand rendering can be enabled per route or globally. | Use hybrid architecture: prerender all public content pages; keep only form API routes on demand. |
| Deployment platform | Astro’s current adapter guide states that the Cloudflare adapter no longer supports Pages. The matching Astro issue confirms that Astro 6+ and the Cloudflare Vite plugin do not support Pages, and that `pages_build_output_dir` triggers the reserved `ASSETS` binding build failure. | Deploy the Astro 7 full-stack build to **Cloudflare Workers with static assets**, the currently supported successor to Pages for Astro SSR and bindings. Do not retain an unsupported Pages configuration that cannot pass a production build. |
| Legacy Pages settings | Cloudflare’s Pages framework guide still lists `npm run build` and `dist`, but the upstream Astro project now directs full-stack adapter users to Workers. | Preserve the historical Pages reference in this research note only. Production configuration and owner instructions use Workers because the enquiry APIs require server execution and D1. |
| Assets, redirects and headers | Astro’s Cloudflare adapter guide states that `public/_headers` and `public/_redirects` are copied to output; hashed build assets can receive long-lived caching. | Include production security headers, cache rules, and redirects in `public`. |
| Bindings | Cloudflare documents access to D1, KV and other bindings through the runtime environment. | Use a D1 binding named `FOX_ENQUIRIES` for durable submission storage and optional webhook/email environment variables for downstream delivery. |
| Secrets | Astro’s Cloudflare guide states that secrets belong in Wrangler or encrypted platform settings, while local secrets use `.dev.vars`. | Commit `.env.example` with variable names only; never commit credentials or `.dev.vars`. |
| Node version | Astro supports active and maintenance LTS Node releases. | Record Node 22 LTS for GitHub and Cloudflare builds. |
| Custom 404 | Astro’s Cloudflare deployment guide documents `not_found_handling: "404-page"` for Workers static assets. | Provide a generated `404.html` plus compatible routing configuration and document Pages/Workers behaviour. |

## Official Sources

1. [Astro Cloudflare adapter documentation](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
2. [Cloudflare Pages Astro deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
3. [Astro deployment guide for Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
4. [Astro upgrade and Node support guide](https://docs.astro.build/en/upgrade-astro/)
5. [Astro issue #16107: Pages-reserved `ASSETS` binding and unsupported Astro 6+ Pages deployment](https://github.com/withastro/astro/issues/16107)
6. [Cloudflare guide for migrating Pages projects to Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/)

> **Verified build finding:** On 15 July 2026, Astro 7.0.9 with `@astrojs/cloudflare` 14.1.3 and Wrangler 4.110.0 rejected the checked-in `pages_build_output_dir` configuration because `ASSETS` is reserved in Pages projects. This reproduces the upstream unsupported-platform failure. Removing the Pages-only setting and deploying the adapter output as a Worker is the supported resolution.
