export const BRAND = {
  name: "Fox Mowing & Gardening",
  shortName: "Fox",
  phoneDisplay: "1800 369 669",
  phoneHref: "tel:1800369669",
  email: "fox@foxmowing.com.au",
  lime: "#C1D82E",
};

export const ASSETS = {
  logoBanner: "/manus-storage/fox-logo-banner_5028f93a.png",
  logoEyes: "/manus-storage/fox-logo-eyes_78b3225e.png",
  hedging: "/manus-storage/fox-hedging_f496e520.png",
  lawns: "/manus-storage/fox-lawns_f25c3098.png",
  premiumLawn: "/manus-storage/fox-premium-lawn_290f49ee.png",
  franchisees: "/manus-storage/fox-franchisees_46989755.png",
  beautifulLawn: "/manus-storage/fox-beautiful-lawn_eade614e.png",
  commercial: "/manus-storage/fox-commercial-grounds-hero_cb070a03.jpg",
  acreage: "/manus-storage/fox-acreage-mowing_fc69604b.jpg",
  strata: "/manus-storage/fox-strata-maintenance_dd017b1b.jpg",
  cleanup: "/manus-storage/fox-garden-cleanup_af86374a.jpg",
};

export type HeroSlide = {
  id: string;
  headline: string;
  supportingText: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  imageAlt: string;
  image: {
    desktop1600: { avif: string; webp: string };
    desktop1200: { avif: string; webp: string };
    mobile900: { avif: string; webp: string };
    mobile600: { avif: string; webp: string };
  };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "residential-operator",
    headline: "Your outdoors. Sorted.",
    supportingText: "Professional lawn mowing, gardening and property care from your local Fox team.",
    primary: { label: "Get a free quote", href: "/free-quote" },
    secondary: { label: "Find your local Fox", href: "/locations" },
    imageAlt: "Fox operator mowing a well-maintained Australian residential lawn",
    image: {
      desktop1600: { avif: "/manus-storage/residential-operator-desktop-1600_c08099d2.avif", webp: "/manus-storage/residential-operator-desktop-1600_8347defd.webp" },
      desktop1200: { avif: "/manus-storage/residential-operator-desktop-1200_78d98d4c.avif", webp: "/manus-storage/residential-operator-desktop-1200_15446ce4.webp" },
      mobile900: { avif: "/manus-storage/residential-operator-mobile-900_de39ce56.avif", webp: "/manus-storage/residential-operator-mobile-900_2e8a28f2.webp" },
      mobile600: { avif: "/manus-storage/residential-operator-mobile-600_9a40ea54.avif", webp: "/manus-storage/residential-operator-mobile-600_b03f6f0c.webp" },
    },
  },
  {
    id: "residential-lawn",
    headline: "Great lawns start with Fox.",
    supportingText: "Reliable residential lawn and garden care across Australia and New Zealand.",
    primary: { label: "Explore residential services", href: "/residential" },
    secondary: { label: "Get a free quote", href: "/free-quote" },
    imageAlt: "Polished Australian home with a healthy lawn and attractive garden",
    image: {
      desktop1600: { avif: "/manus-storage/residential-lawn-desktop-1600_2678aafa.avif", webp: "/manus-storage/residential-lawn-desktop-1600_ec4fd3aa.webp" },
      desktop1200: { avif: "/manus-storage/residential-lawn-desktop-1200_42a25e64.avif", webp: "/manus-storage/residential-lawn-desktop-1200_481f0c6b.webp" },
      mobile900: { avif: "/manus-storage/residential-lawn-mobile-900_58b6e0fc.avif", webp: "/manus-storage/residential-lawn-mobile-900_c6117b04.webp" },
      mobile600: { avif: "/manus-storage/residential-lawn-mobile-600_ea182c8d.avif", webp: "/manus-storage/residential-lawn-mobile-600_43a6ad7c.webp" },
    },
  },
  {
    id: "commercial-grounds",
    headline: "Commercial grounds. Professionally managed.",
    supportingText: "Dependable scheduled maintenance for strata, businesses and managed properties.",
    primary: { label: "Commercial services", href: "/commercial" },
    secondary: { label: "Request a commercial quote", href: "/free-quote?audience=commercial" },
    imageAlt: "Professional grounds team maintaining a high-quality managed property",
    image: {
      desktop1600: { avif: "/manus-storage/commercial-grounds-desktop-1600_f24a3f93.avif", webp: "/manus-storage/commercial-grounds-desktop-1600_83409039.webp" },
      desktop1200: { avif: "/manus-storage/commercial-grounds-desktop-1200_3abc9a49.avif", webp: "/manus-storage/commercial-grounds-desktop-1200_1ce4cc58.webp" },
      mobile900: { avif: "/manus-storage/commercial-grounds-mobile-900_906795cd.avif", webp: "/manus-storage/commercial-grounds-mobile-900_f449b472.webp" },
      mobile600: { avif: "/manus-storage/commercial-grounds-mobile-600_15c3a5e3.avif", webp: "/manus-storage/commercial-grounds-mobile-600_698c10a0.webp" },
    },
  },
  {
    id: "franchise-team",
    headline: "Build your business with Fox.",
    supportingText: "Join a recognised mowing and gardening brand with training, systems and ongoing support.",
    primary: { label: "Explore Fox franchises", href: "/join-fox-team" },
    secondary: { label: "Enquire about a territory", href: "/join-fox/enquiry" },
    imageAlt: "Fox franchise team standing together beside branded mowing equipment",
    image: {
      desktop1600: { avif: "/manus-storage/franchise-team-desktop-1600_353b1c9b.avif", webp: "/manus-storage/franchise-team-desktop-1600_3067734b.webp" },
      desktop1200: { avif: "/manus-storage/franchise-team-desktop-1200_e16a105d.avif", webp: "/manus-storage/franchise-team-desktop-1200_9832bef0.webp" },
      mobile900: { avif: "/manus-storage/franchise-team-mobile-900_4243232e.avif", webp: "/manus-storage/franchise-team-mobile-900_72008f2e.webp" },
      mobile600: { avif: "/manus-storage/franchise-team-mobile-600_aefcb68d.avif", webp: "/manus-storage/franchise-team-mobile-600_c9188a10.webp" },
    },
  },
];

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  audiences: ("residential" | "commercial")[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    eyebrow: "A sharper finish",
    summary: "Routine mowing and lawn-edge care tailored to the property and season.",
    description:
      "Keep outdoor areas neat, usable and consistently presented with scheduled or one-off lawn mowing. Your local Fox operator can discuss the condition of the lawn, practical access and a service rhythm suited to the property.",
    image: ASSETS.lawns,
    imageAlt: "A carefully maintained residential lawn and garden",
    audiences: ["residential", "commercial"],
    benefits: ["One-off or recurring visits", "Neat lawn edges", "Residential and commercial options"],
  },
  {
    slug: "gardening",
    name: "Gardening",
    eyebrow: "Healthy, orderly gardens",
    summary: "Practical garden maintenance for established beds and outdoor spaces.",
    description:
      "From regular upkeep to a focused visit, Fox gardening services help bring structure back to outdoor areas. Scope is agreed with your local operator so priorities are clear before work begins.",
    image: ASSETS.beautifulLawn,
    imageAlt: "Landscaped front garden with neatly maintained planting",
    audiences: ["residential", "commercial"],
    benefits: ["Clear service scope", "Seasonal garden attention", "Flexible maintenance plans"],
  },
  {
    slug: "hedging-pruning",
    name: "Hedging & Pruning",
    eyebrow: "Shape with purpose",
    summary: "Hedge trimming and selective pruning for a tidy, controlled landscape.",
    description:
      "Well-managed hedges frame a property and keep paths, windows and garden areas accessible. Fox operators can assess the requested shape, access and green-waste needs before quoting.",
    image: ASSETS.hedging,
    imageAlt: "Fox operator in high-visibility uniform trimming a hedge",
    audiences: ["residential", "commercial"],
    benefits: ["Defined hedge lines", "Access-aware pruning", "Green-waste options discussed upfront"],
  },
  {
    slug: "weed-control",
    name: "Weed Control",
    eyebrow: "Take back the garden",
    summary: "Targeted manual and practical weed-management options for outdoor areas.",
    description:
      "Weeds can quickly compete with planting and make paved or garden areas look neglected. Your local Fox operator can inspect the site and recommend an appropriate maintenance approach.",
    image: ASSETS.cleanup,
    imageAlt: "Gardener restoring an overgrown garden bed",
    audiences: ["residential", "commercial"],
    benefits: ["Site-specific approach", "Garden-bed and hard-surface options", "Follow-up maintenance available"],
  },
  {
    slug: "garden-clean-ups",
    name: "Garden Clean-ups",
    eyebrow: "Reset the outdoors",
    summary: "Focused clean-ups for gardens that need a practical fresh start.",
    description:
      "A garden clean-up can combine agreed mowing, trimming, weeding and general tidying tasks. The exact scope depends on access, condition and disposal requirements and is confirmed before work begins.",
    image: ASSETS.cleanup,
    imageAlt: "Gardener carrying out a garden clean-up",
    audiences: ["residential", "commercial"],
    benefits: ["Prioritised task list", "One-off reset", "Maintenance plan can follow"],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    eyebrow: "Clear the build-up",
    summary: "Gutter clearing subject to safe access and an on-site service assessment.",
    description:
      "Fox can help assess routine gutter clearing requirements. Availability and method depend on building height, access, roof conditions and local operator capability, so these are reviewed before confirmation.",
    image: ASSETS.commercial,
    imageAlt: "Well-maintained commercial property exterior and grounds",
    audiences: ["residential", "commercial"],
    benefits: ["Access assessed first", "Clear scope before booking", "Local availability confirmed"],
  },
  {
    slug: "soft-landscaping",
    name: "Soft Landscaping",
    eyebrow: "Build a better garden layer",
    summary: "Planting and garden-bed improvements that work with the existing property.",
    description:
      "Soft landscaping can refresh the living parts of an outdoor area through an agreed combination of planting and garden-bed work. Your local Fox operator can discuss practical options for the site.",
    image: ASSETS.premiumLawn,
    imageAlt: "Contemporary garden with layered planting and a healthy lawn",
    audiences: ["residential", "commercial"],
    benefits: ["Site-led recommendations", "Garden-bed refreshes", "Maintenance considered from the start"],
  },
  {
    slug: "rubbish-removal",
    name: "Rubbish Removal",
    eyebrow: "Leave the site clearer",
    summary: "Removal options for agreed garden waste and outdoor clean-up material.",
    description:
      "Where locally available, rubbish-removal support can be added to an agreed outdoor maintenance job. Material type, volume, access and disposal requirements are confirmed as part of the quote.",
    image: ASSETS.cleanup,
    imageAlt: "Garden clean-up work in progress",
    audiences: ["residential", "commercial"],
    benefits: ["Volume discussed in advance", "Can accompany a clean-up", "Local availability confirmed"],
  },
  {
    slug: "tree-lopping",
    name: "Tree Lopping",
    eyebrow: "Start with a safe assessment",
    summary: "Tree-work enquiries assessed for scope, access and operator capability.",
    description:
      "Tree-related work varies significantly. Fox first reviews the tree, surrounding area, access and local requirements. Complex or high-risk work may need a qualified specialist and is only confirmed after assessment.",
    image: ASSETS.acreage,
    imageAlt: "Acreage property with established trees and maintained grass",
    audiences: ["residential", "commercial"],
    benefits: ["Assessment before commitment", "Access and risk considered", "Specialist requirements identified"],
  },
  {
    slug: "commercial-grounds",
    name: "Commercial Grounds Maintenance",
    eyebrow: "Presentation on repeat",
    summary: "Planned grounds care for businesses, facilities, strata and managed properties.",
    description:
      "Fox works with commercial clients to define a repeatable grounds-maintenance scope. The service plan can address presentation priorities, site access, communication and the visit schedule required by the property.",
    image: ASSETS.commercial,
    imageAlt: "Landscaper maintaining the grounds of a contemporary commercial property",
    audiences: ["commercial"],
    benefits: ["Planned service schedule", "Defined site priorities", "Single enquiry pathway"],
  },
  {
    slug: "acreage-mowing",
    name: "Acreage Mowing",
    eyebrow: "More ground, managed",
    summary: "Larger-area mowing enquiries assessed for terrain, access and equipment needs.",
    description:
      "Acreage properties require a different service plan from a standard suburban lawn. Fox assesses area, terrain, access, obstacles and the desired finish before confirming local capability and price.",
    image: ASSETS.acreage,
    imageAlt: "Mower working across a large Australian acreage property",
    audiences: ["residential", "commercial"],
    benefits: ["Terrain considered", "Access and scale assessed", "Local equipment capability confirmed"],
  },
  {
    slug: "strata-maintenance",
    name: "Strata Maintenance",
    eyebrow: "Shared spaces, consistently cared for",
    summary: "Outdoor maintenance plans for strata and body-corporate environments.",
    description:
      "Strata properties benefit from a clear, repeatable scope and reliable communication. Fox can discuss common-area presentation, access arrangements and the service cadence required by the property.",
    image: ASSETS.strata,
    imageAlt: "Landscaper maintaining shared townhouse gardens",
    audiences: ["commercial"],
    benefits: ["Common-area focus", "Repeatable scope", "Stakeholder communication considered"],
  },
];

export const regions = [
  { slug: "new-south-wales", short: "NSW", name: "New South Wales", url: "https://foxmowing-nsw.com.au/" },
  { slug: "queensland", short: "QLD", name: "Queensland", url: "https://foxmowingqld.com.au/" },
  { slug: "australian-capital-territory", short: "ACT", name: "Australian Capital Territory", url: "https://foxmowingact.com.au/" },
  { slug: "victoria", short: "VIC", name: "Victoria", url: "https://foxmowingvic.com.au/" },
  { slug: "western-australia", short: "WA", name: "Western Australia", url: "https://foxmowingwa.com.au/" },
  { slug: "south-australia", short: "SA", name: "South Australia", url: "https://foxmowingsa.com.au/" },
  { slug: "tasmania", short: "TAS", name: "Tasmania", url: "https://foxmowingtas.com.au/" },
  { slug: "new-zealand", short: "NZ", name: "New Zealand", url: "https://foxmowing.co.nz/" },
];

export const faqs = [
  { q: "How do I request a quote?", a: "Use the national quote form and provide your service, location and contact details. The enquiry is then routed for follow-up." },
  { q: "Can I request recurring maintenance?", a: "Yes. Select recurring service in the quote form and discuss the preferred cadence with the local operator who follows up." },
  { q: "Do you service commercial properties?", a: "Yes. Fox accepts enquiries for commercial grounds, strata and other managed properties, subject to local capability and site assessment." },
  { q: "Can I choose more than one service?", a: "Yes. The quote form allows multiple service selections so the requested scope can be reviewed together." },
  { q: "Who confirms availability and price?", a: "A local Fox operator or regional team reviews the details and confirms availability, scope and pricing after the enquiry is received." },
  { q: "How do I enquire about a franchise?", a: "Use the separate Join Fox enquiry form. It asks about your preferred region and goals and does not mix franchise leads with customer quote requests." },
];

export const adviceArticles = [
  { slug: "planning-a-garden-clean-up", title: "Planning a practical garden clean-up", excerpt: "How to prioritise the work, identify access constraints and prepare a clear brief before requesting a quote.", category: "Garden care" },
  { slug: "choosing-a-mowing-schedule", title: "Choosing a mowing schedule for your property", excerpt: "The property, season, lawn condition and desired presentation all influence an appropriate maintenance rhythm.", category: "Lawn care" },
  { slug: "commercial-grounds-brief", title: "What to include in a commercial grounds brief", excerpt: "A clear scope, site access notes, presentation priorities and communication expectations help suppliers quote accurately.", category: "Commercial" },
];

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Join Fox", href: "/join-fox-team" },
];
