import { ASSETS } from "./site";

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; body: string; points?: string[] }[];
  kind?: "standard" | "faq" | "legal" | "success";
};

export const contentPages: ContentPage[] = [
  {
    slug: "residential", eyebrow: "Residential services", title: "Outdoor care that works around your home.",
    description: "Residential lawn mowing, gardening and property care from local Fox teams across Australia and New Zealand.",
    intro: "Choose one-off support or discuss a practical recurring schedule for lawns, gardens and everyday property presentation.", image: ASSETS.beautifulLawn, imageAlt: "Neatly maintained residential lawn and garden",
    sections: [
      { heading: "A clear plan for your property", body: "Every property is different. Your local Fox operator reviews the requested work, site access and condition before confirming scope, timing and price.", points: ["Lawn mowing and edging", "Garden and hedge maintenance", "Clean-ups and seasonal work", "Recurring or one-off service options"] },
      { heading: "Local service, national network", body: "The national website connects you with the appropriate regional Fox network. Availability, service scope and pricing are always confirmed locally after your enquiry is reviewed." },
    ],
  },
  {
    slug: "commercial", eyebrow: "Commercial grounds", title: "Professional presentation on a dependable schedule.",
    description: "Commercial grounds maintenance enquiries for strata, facilities, businesses and managed properties.",
    intro: "Build a documented maintenance scope around site priorities, access requirements, communication and the presentation standard your property needs.", image: ASSETS.commercial, imageAlt: "Professionally maintained commercial grounds",
    sections: [
      { heading: "Planned around the site", body: "Fox can review commercial sites ranging from business premises and strata communities to managed facilities and larger properties.", points: ["Scheduled lawn and garden care", "Strata common-area maintenance", "Site-specific access planning", "Clear enquiry and follow-up pathway"] },
      { heading: "Start with a useful brief", body: "Share the property address, service priorities, preferred frequency and any site-access constraints. A local team can then assess capability and prepare the next step." },
    ],
  },
  {
    slug: "about", eyebrow: "About Fox", title: "Local people. Recognised systems. Outdoor care with purpose.",
    description: "Learn about the Fox Mowing & Gardening network and its local service approach across Australia and New Zealand.",
    intro: "Fox combines the responsiveness of local operators with a recognisable national brand, practical systems and regional support.", image: ASSETS.franchisees, imageAlt: "Fox Mowing and Gardening franchise team",
    sections: [
      { heading: "Built around local ownership", body: "Customers deal with local people who understand their service area. The wider Fox network supports consistent brand standards, enquiry pathways and business systems." },
      { heading: "A practical service promise", body: "Clear communication starts with an accurate enquiry. Scope, availability and pricing are confirmed after the property and requested work are reviewed.", points: ["Local operator follow-up", "Residential and commercial pathways", "Service scope agreed before work", "Regional websites for local information"] },
    ],
  },
  {
    slug: "contact", eyebrow: "Contact Fox", title: "Choose the right path and reach the right team.",
    description: "Contact Fox Mowing & Gardening for customer service, commercial work, general questions or franchise opportunities.",
    intro: "Customer work and franchise opportunities are handled separately so your enquiry reaches the appropriate team without delay.", image: ASSETS.hedging, imageAlt: "Fox operator maintaining a residential hedge",
    sections: [
      { heading: "Customer and commercial enquiries", body: "Use the free quote form for residential or commercial work. It captures service, property and contact details in one secure submission.", points: ["Residential quote requests", "Commercial and strata enquiries", "General outdoor-maintenance questions"] },
      { heading: "Franchise enquiries", body: "Use the dedicated Join Fox enquiry form for territory interest, business goals and preferred region. Franchise details are never mixed with customer quote leads." },
    ],
  },
  {
    slug: "faq", eyebrow: "Frequently asked questions", title: "Straight answers before you get started.",
    description: "Answers to common questions about Fox customer quotes, services, local availability and franchise enquiries.",
    intro: "Find the national process here, then use your regional Fox website or the relevant enquiry form for local confirmation.", image: ASSETS.premiumLawn, imageAlt: "Healthy green lawn beside a landscaped garden", sections: [], kind: "faq",
  },
  {
    slug: "join-fox-team", eyebrow: "Fox franchise opportunities", title: "Build your business with a recognised outdoor-care brand.",
    description: "Explore Fox Mowing & Gardening franchise opportunities, systems, training and regional territory enquiries.",
    intro: "Bring your energy and local ambition. Fox provides a recognised brand, established systems and ongoing support designed to help franchisees focus on building their business.", image: ASSETS.franchisees, imageAlt: "Fox franchise team beside branded outdoor equipment",
    sections: [
      { heading: "A supported path into business", body: "Franchise ownership remains a serious commercial decision. The Fox enquiry process helps you explore fit, region and next steps before any commitment.", points: ["Recognised national branding", "Business and operational systems", "Training and ongoing network support", "Regional territory conversations"] },
      { heading: "Keep franchise enquiries separate", body: "Use the dedicated franchise form to share your preferred region and goals. Customer quote forms are reserved for lawn, garden and property-service requests." },
    ],
  },
  {
    slug: "privacy", eyebrow: "Legal", title: "Privacy policy", description: "How Fox Mowing & Gardening handles information submitted through this national website.", intro: "This policy explains the information collected, why it is used and the choices available to website visitors.", image: ASSETS.beautifulLawn, imageAlt: "Quiet landscaped residential garden", kind: "legal",
    sections: [
      { heading: "Information we collect", body: "The website collects information you choose to provide in quote, contact and franchise enquiry forms, together with limited technical logs required for security and reliable delivery." },
      { heading: "How information is used", body: "Enquiry information is used to assess and route your request, arrange follow-up, maintain submission records and protect the service from abuse. It is not published on the website." },
      { heading: "Storage, access and contact", body: "Information may be processed by Cloudflare and approved service providers used for hosting, notifications or customer management. Contact fox@foxmowing.com.au if you want to ask about personal information submitted through this website." },
    ],
  },
  {
    slug: "terms", eyebrow: "Legal", title: "Website terms", description: "Terms applying to use of the Fox Mowing & Gardening national website.", intro: "These terms describe the role of the national website and the limits of information provided before a local service is confirmed.", image: ASSETS.commercial, imageAlt: "Maintained lawn and garden at a professional property", kind: "legal",
    sections: [
      { heading: "Website information", body: "Website content is general information and does not create a service booking, fixed quote or guarantee of local availability. Services vary by operator, property, access and region." },
      { heading: "Quotes and service agreements", body: "A local operator or regional team confirms scope, timing, pricing and any service-specific conditions after reviewing your enquiry. Do not rely on a website submission as confirmation that work has been booked." },
      { heading: "External regional websites", body: "Regional links lead to separately operated Fox websites. Their own terms, privacy notices and contact details may apply once you leave this national gateway." },
    ],
  },
  {
    slug: "accessibility", eyebrow: "Accessibility", title: "An accessible Fox website for more visitors.", description: "Fox Mowing & Gardening national website accessibility statement and contact pathway.", intro: "The site is designed for keyboard use, readable contrast, responsive layouts and reduced-motion preferences in line with WCAG 2.2 AA principles.", image: ASSETS.hedging, imageAlt: "Fox operator working in an accessible open garden", kind: "legal",
    sections: [
      { heading: "What we have built", body: "Navigation, forms and carousel controls use semantic HTML, visible focus states and descriptive labels. Essential content remains live text rather than being embedded in images." },
      { heading: "Tell us about a barrier", body: "If you cannot access information or complete a form, contact fox@foxmowing.com.au or call 1800 369 669. Include the page and the problem encountered so the issue can be reviewed." },
    ],
  },
  {
    slug: "quote-success", eyebrow: "Enquiry received", title: "Thank you. Your Fox quote request is logged.", description: "Confirmation that a customer or commercial Fox enquiry has been submitted.", intro: "The appropriate Fox team can now review your service, property and contact details. Submission does not confirm a booking or final price.", image: ASSETS.beautifulLawn, imageAlt: "Well-presented lawn and garden", kind: "success",
    sections: [{ heading: "What happens next", body: "A local operator or regional team may contact you to clarify scope, access, timing or other property details before availability and pricing are confirmed." }],
  },
  {
    slug: "franchise-enquiry-success", eyebrow: "Franchise enquiry received", title: "Thank you for your interest in Fox.", description: "Confirmation that a Fox franchise opportunity enquiry has been submitted.", intro: "Your region, goals and contact details have been recorded for the franchise team to review.", image: ASSETS.franchisees, imageAlt: "Fox franchise team", kind: "success",
    sections: [{ heading: "A considered next step", body: "The team may contact you to discuss territory availability, expectations and the information needed to explore mutual fit. An enquiry does not create any franchise commitment." }],
  },
];

