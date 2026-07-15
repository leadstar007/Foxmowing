# Image Register and Replacement Notes

This register identifies the authoritative supplied artwork and the supplemental visuals prepared because the supplied package did not contain unique photography for every service subject. The supplied Fox logo files must remain unchanged.

| Registry key | Current website path | Source classification | Website use | Replacement guidance |
| --- | --- | --- | --- | --- |
| `logoBanner` | `/manus-storage/fox-logo-banner_5028f93a.png` | **Supplied authoritative artwork** | Global header and footer | Do not redraw, recolour, crop into a new mark, distort, or replace without an approved official file. |
| `logoEyes` | `/manus-storage/fox-logo-eyes_78b3225e.png` | **Supplied authoritative artwork** | Brand reference and optional campaign use | Preserve proportions and colour exactly. |
| `hedging` | `/manus-storage/fox-hedging_f496e520.png` | **Supplied franchise photography** | Homepage, hedging service and customer quote form | Retain until approved Fox operator photography replaces it. |
| `lawns` | `/manus-storage/fox-lawns_f25c3098.png` | **Supplied franchise photography** | Lawn mowing and property presentation | Retain or replace with an approved real Fox project image. |
| `premiumLawn` | `/manus-storage/fox-premium-lawn_290f49ee.png` | **Supplied franchise photography** | Soft landscaping and lawn presentation | Retain or replace with approved project photography. |
| `franchisees` | `/manus-storage/fox-franchisees_46989755.png` | **Supplied franchise photography** | Join Fox journey and franchise form | Retain until approved franchisee portraits are available. |
| `beautifulLawn` | `/manus-storage/fox-beautiful-lawn_eade614e.png` | **Supplied franchise photography** | Gardening and brand story | Retain or replace with approved real Fox project photography. |
| `commercial` | `/manus-storage/fox-commercial-grounds-hero_cb070a03.jpg` | **Supplemental generated placeholder** | Commercial grounds and gutter-cleaning visual coverage | Replace with an approved real Fox commercial operator/site photograph. |
| `acreage` | `/manus-storage/fox-acreage-mowing_fc69604b.jpg` | **Supplemental generated placeholder** | Acreage mowing and tree-work visual coverage | Replace with an approved Fox acreage operator image; create a separate tree-work image if that service remains. |
| `strata` | `/manus-storage/fox-strata-maintenance_dd017b1b.jpg` | **Supplemental generated placeholder** | Strata maintenance | Replace with an approved Fox operator working at a strata or body-corporate property. |
| `cleanup` | `/manus-storage/fox-garden-cleanup_af86374a.jpg` | **Supplemental generated placeholder** | Weed control, garden clean-ups and rubbish-removal subjects | Replace with separate approved Fox images for each service when available. |

## Temporary Visual Reuse

The `cleanup` image is intentionally reused for **weed control**, **garden clean-ups**, and **rubbish removal** because unique supplied images were unavailable. The `commercial` image is reused for **gutter cleaning**, and the `acreage` image is reused for **tree lopping**. These are recorded in `src/data/site.ts` and can be replaced without restructuring pages.

## Replacement Method

Upload the approved replacement outside the project directory using durable website asset storage, update only the corresponding URL in `ASSETS` or `heroSlides` in `src/data/site.ts`, confirm its alternative text, then run the test, Astro check, build, link and responsive screenshot checks. Never put production photography in `public` or `src/assets`.

## Responsive Homepage Hero Derivatives

The four homepage concepts—`residential-operator`, `residential-lawn`, `commercial-grounds`, and `franchise-team`—are supplemental generated placeholders prepared for the approved four-slide specification. Each concept has AVIF and WebP files at desktop 1600, desktop 1200, mobile 900, and mobile 600 widths: **32 immutable derivatives in total**. Every URL is registered in `heroSlides` in `src/data/site.ts` and delivered through responsive `<picture>` elements. Replace each concept as a complete eight-file family when approved real Fox photography becomes available so art direction and format fallbacks remain intact.

| Hero concept | Desktop 1600 AVIF / WebP | Desktop 1200 AVIF / WebP | Mobile 900 AVIF / WebP | Mobile 600 AVIF / WebP |
| --- | --- | --- | --- | --- |
| `residential-operator` | `residential-operator-desktop-1600_c08099d2.avif` / `residential-operator-desktop-1600_8347defd.webp` | `residential-operator-desktop-1200_78d98d4c.avif` / `residential-operator-desktop-1200_15446ce4.webp` | `residential-operator-mobile-900_de39ce56.avif` / `residential-operator-mobile-900_2e8a28f2.webp` | `residential-operator-mobile-600_9a40ea54.avif` / `residential-operator-mobile-600_b03f6f0c.webp` |
| `residential-lawn` | `residential-lawn-desktop-1600_2678aafa.avif` / `residential-lawn-desktop-1600_ec4fd3aa.webp` | `residential-lawn-desktop-1200_42a25e64.avif` / `residential-lawn-desktop-1200_481f0c6b.webp` | `residential-lawn-mobile-900_58b6e0fc.avif` / `residential-lawn-mobile-900_c6117b04.webp` | `residential-lawn-mobile-600_ea182c8d.avif` / `residential-lawn-mobile-600_43a6ad7c.webp` |
| `commercial-grounds` | `commercial-grounds-desktop-1600_f24a3f93.avif` / `commercial-grounds-desktop-1600_83409039.webp` | `commercial-grounds-desktop-1200_3abc9a49.avif` / `commercial-grounds-desktop-1200_1ce4cc58.webp` | `commercial-grounds-mobile-900_906795cd.avif` / `commercial-grounds-mobile-900_f449b472.webp` | `commercial-grounds-mobile-600_15c3a5e3.avif` / `commercial-grounds-mobile-600_698c10a0.webp` |
| `franchise-team` | `franchise-team-desktop-1600_353b1c9b.avif` / `franchise-team-desktop-1600_3067734b.webp` | `franchise-team-desktop-1200_e16a105d.avif` / `franchise-team-desktop-1200_9832bef0.webp` | `franchise-team-mobile-900_4243232e.avif` / `franchise-team-mobile-900_72008f2e.webp` | `franchise-team-mobile-600_aefcb68d.avif` / `franchise-team-mobile-600_c9188a10.webp` |
