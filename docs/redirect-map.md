# Legacy Redirect Map

The following permanent redirects preserve the supplied package's legacy route intent. The deployable Cloudflare Workers static-assets source is `public/_redirects`; keep this narrative register aligned with that file.

| Legacy path | New path | Status |
| --- | --- | --- |
| `/all-services` | `/services` | 301 |
| `/residential-services` | `/residential` | 301 |
| `/commercial-services` | `/commercial` | 301 |
| `/lawn-mowing` | `/services/lawn-mowing` | 301 |
| `/gardening` | `/services/gardening` | 301 |
| `/hedging-and-pruning` | `/services/hedging-pruning` | 301 |
| `/weed-control` | `/services/weed-control` | 301 |
| `/garden-clean-ups` | `/services/garden-clean-ups` | 301 |
| `/gutter-cleaning` | `/services/gutter-cleaning` | 301 |
| `/soft-landscaping` | `/services/soft-landscaping` | 301 |
| `/rubbish-removal` | `/services/rubbish-removal` | 301 |
| `/tree-lopping` | `/services/tree-lopping` | 301 |
| `/commercial-grounds-maintenance` | `/services/commercial-grounds` | 301 |
| `/acreage-mowing` | `/services/acreage-mowing` | 301 |
| `/strata-maintenance` | `/services/strata-maintenance` | 301 |
| `/about-us` | `/about` | 301 |
| `/contact-us` | `/contact` | 301 |
| `/free-quote/` | `/free-quote` | 301 |
| `/join-the-fox-team` | `/join-fox-team` | 301 |
| `/franchise-opportunities` | `/join-fox-team` | 301 |
| `/advice-centre` | `/advice` | 301 |
| `/customer-reviews` | `/reviews` | 301 |
| `/quote` | `/free-quote` | 301 |
| `/get-a-quote` | `/free-quote` | 301 |
| `/franchise` | `/join-fox-team` | 301 |
| `/join` | `/join-fox-team` | 301 |
| `/areas` | `/locations` | 301 |
| `/thank-you` | `/quote-success` | 301 |

Regional gateway pages live at `/locations/:region`. They intentionally preserve links to the regional destinations supplied in the original package rather than proxying or rewriting those separate websites.
