# Fox Mowing National Site Architecture

The website uses a reusable React page system backed by central TypeScript content data. The public information architecture separates **customer services**, **commercial property care**, **regional routing**, and **franchise recruitment** while retaining shared global navigation, breadcrumbs, calls to action, and footer information.

| Journey | Primary Routes | Primary Conversion |
| --- | --- | --- |
| Residential | `/residential`, `/services`, `/services/:slug` | `/free-quote` |
| Commercial | `/commercial`, `/services/commercial-grounds` | `/free-quote?audience=commercial` |
| Locations | `/locations`, `/locations/:region` | External regional destination or `/contact` |
| Franchise | `/join-fox-team`, `/join-fox-team/:region` | `/join-fox-team#enquire` |
| Brand and support | `/about`, `/contact`, `/faq`, `/advice`, `/reviews` | Contextual quote, contact, or franchise action |
| Governance | `/privacy`, `/terms`, `/thanks`, `/franchise-thanks`, custom 404 | Safe exit to core journeys |

## Technical Structure

The front end uses reusable components, central content records, Wouter routes, semantic HTML, and tRPC mutations. Customer and franchise forms use separate schemas, procedures, destinations, and database tables. The public site does not require authentication.

## Regional Destinations Preserved from the Supplied Package

| Region | Destination |
| --- | --- |
| New South Wales | https://foxmowing-nsw.com.au/ |
| Queensland | https://foxmowingqld.com.au/ |
| Australian Capital Territory | https://foxmowingact.com.au/ |
| Victoria | https://foxmowingvic.com.au/ |
| Western Australia | https://foxmowingwa.com.au/ |
| South Australia | https://foxmowingsa.com.au/ |
| Tasmania | https://foxmowingtas.com.au/ |
| New Zealand | https://foxmowing.co.nz/ |

## Verified Contact Details from the Supplied Package

The national telephone number is **1800 369 669** and the national email address is **fox@foxmowing.com.au**.

## Content Policy

The release will not publish fabricated customer reviews, ratings, addresses, coverage claims, completed-job counts, franchise income claims, or local-business entities. The Reviews page explains that verified review content can be connected when approved data is available.

