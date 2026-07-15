# Project TODO

- [x] Audit supplied website package, page inventory, phone, email, and regional URLs
- [x] Preserve and upload supplied Fox logo artwork without redrawing, recolouring, distorting, or replacing it
- [x] Upload all supplied franchise and service photography to deployment-safe asset storage
- [x] Define the original Velocity Lawn design system in ideas.md
- [x] Prepare supplemental unbranded imagery for missing commercial, strata, acreage, and garden-clean-up subjects
- [x] Define a central editable data source for navigation, services, regions, FAQs, contact details, franchise regions, and imagery
- [x] Implement global design tokens using Fox Lime #C1D82E, Fox Black, white, charcoal, and cool neutral surfaces
- [x] Implement Barlow Condensed display typography and Manrope body typography
- [x] Build accessible sticky utility bar, desktop navigation, responsive mobile menu, and mobile conversion controls
- [x] Build the homepage hero, audience selector, service finder, service showcase, Why Fox section, commercial pathway, location explorer, franchise pathway, FAQ, and final conversion split
- [x] Build reusable page hero, service detail, audience, FAQ, breadcrumb, CTA, and footer components
- [x] Build complete Residential Services and Commercial Services pages
- [x] Build the All Services page and all twelve supplied individual service routes
- [x] Build About Fox, Locations, Contact, Customer Reviews, FAQ, Advice Centre, Privacy, Terms, and custom 404 pages
- [x] Build Australia state and territory location gateway pages plus the New Zealand gateway page
- [x] Preserve regional website destinations for NSW, QLD, ACT, VIC, WA, SA, TAS, and New Zealand
- [x] Build the Join Fox national page and state/country franchise opportunity routes
- [x] Build a validated multi-step customer quote form with progress, consent, database persistence, and success redirect
- [x] Build a separate validated multi-step franchise enquiry form with database persistence and its own success redirect
- [x] Implement database schema, query helpers, and public API procedures for both enquiry types
- [x] Add anti-spam honeypot and accessible server/client error handling to both forms
- [x] Add customer and franchise thank-you pages with distinct next actions
- [x] Add unique metadata handling, canonical URLs, Open Graph data, organisation schema, service schema, FAQ schema, breadcrumb schema, and article schema where applicable
- [x] Add robots.txt, sitemap.xml, llms.txt, and redirect-map documentation
- [x] Add analytics event names for customer and franchise journeys without external tracker dependencies
- [x] Add image replacement register identifying supplied, generated, and temporarily duplicated imagery
- [x] Add content editing, environment, deployment, and backup guidance
- [x] Write and run Vitest coverage for enquiry validation and API submission behaviour
- [x] Run database migration and verify enquiry tables
- [x] Run TypeScript checks, production build, unit tests, and browser link/form checks
- [x] Verify desktop and mobile visual presentation with screenshots and resolve visible defects
- [x] Verify heading order, focus states, keyboard operation, reduced motion, colour contrast, and descriptive image alternatives
- [x] Review todo.md, mark all completed items, and save the final checkpoint

## Content Revision — Supplied 15 July 2026

- [x] Audit pasted_content_2.txt against the current central content model, routes, forms, metadata, and owner documentation
- [x] Map every new instruction to an existing page, a new page, or an explicit no-change decision
- [x] Revise website copy, page structure, navigation, regional connections, forms, and metadata required by the new content
- [x] Preserve the supplied Fox logo unchanged and retain the approved Velocity Lawn design system
- [x] Update sitemap, crawler files, redirect documentation, image register, and owner guide where the new content affects them
- [x] Run unit tests, TypeScript checks, production build, route checks, database checks, and accessibility review after revision
- [x] Verify revised desktop and mobile presentation and resolve visible regressions
- [ ] Review todo.md, mark the revision items complete, and save a new final checkpoint

## Astro 7 + Cloudflare Workers Conversion

- [x] Complete the Astro 7 dependency installation and resolve the strict TypeScript and Cloudflare Workers type configuration
- [x] Register all 32 deployment-safe AVIF and WebP four-slide hero derivatives in the central content model
- [x] Build a reusable Astro base layout with unique metadata, canonical URLs, Open Graph data, skip navigation, supplied logo, navigation, mobile drawer, footer, and mobile conversion bar
- [x] Build an accessible four-slide interactive homepage hero with responsive pictures, auto-advance, pause-on-interaction, previous/next controls, dot navigation, keyboard support, touch swiping, an ARIA live region, and reduced-motion handling
- [x] Build reusable Astro page hero, breadcrumbs, service cards, regional cards, FAQ, CTA, enquiry form, and structured-data components
- [x] Build the Astro homepage with residential, commercial, services, locations, franchise, FAQ, and dual-conversion sections
- [x] Build all Astro service index, service detail, residential, commercial, location, regional, about, contact, FAQ, advice, article, franchise, legal, success, and 404 routes
- [x] Build distinct customer quote and franchise enquiry journeys with client-side step controls, accessible validation, consent, and honeypot protection
- [x] Build Cloudflare-compatible quote and franchise enquiry API routes with shared Zod validation, persistent storage, anti-spam checks, and distinct success responses
- [x] Add Cloudflare Workers public files for robots, redirects, security headers, and crawler guidance, with sitemap generation through Astro
- [x] Preserve every approved Australia and New Zealand regional destination and verify each external gateway link
- [x] Update the owner guide, deployment notes, redirect map, and image register for the Astro/Cloudflare architecture and owner-replacement assets
- [x] Write and run Vitest coverage for shared validation and form persistence behaviour
- [x] Run Astro checks, TypeScript checks, production build, route inspection, and Cloudflare configuration validation
- [x] Restart the managed preview on Astro and verify desktop and mobile visuals, hero controls, navigation, regional links, form submissions, success routes, keyboard operation, and reduced motion
- [ ] Review the full TODO history, mark every completed conversion item, save a new checkpoint, and deliver the updated project version

## Final release gap closure

- [x] Verify the active D1 enquiry schema and storage bindings after the Astro conversion without inserting production data
- [x] Complete isolated end-to-end customer and franchise submissions, confirm distinct success routes, and remove the QA records afterward
- [x] Verify the hero, navigation, and form journeys by keyboard only
- [x] Verify reduced-motion media-query behaviour for hero rotation and non-essential transitions
- [ ] Save the final checkpoint only after every release gap has passed

## GitHub handoff — leadstar007/Foxmowing

- [x] Verify authenticated GitHub access without exposing credentials in chat or project files
- [x] Inspect the remote repository, default branch, existing commits, and working tree before any push
- [ ] Preserve existing remote history and resolve any file or branch conflicts deliberately
- [x] Add a GitHub-ready README and exclude generated Astro, Wrangler, local database, credential, dependency, and build artifacts
- [x] Compare the completed project against remote `main`, choose and document the history-preserving synchronisation strategy, and identify any path conflicts (62 selected paths validated: 61 additions, retained `LICENSE`, intentional `README.md` replacement)
- [ ] Merge the remote repository history into the completed project without rewriting its prior commits
- [ ] Push the completed Astro/Cloudflare project to the agreed repository branch
- [ ] Verify the resulting remote `main` history, commit identifier, and clean branch state after the push
- [ ] Confirm the remote commit and provide the final repository URL and branch in the owner handoff
