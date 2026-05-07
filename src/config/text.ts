export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  features: string[];
  seoIntro: string;
  faq: { q: string; a: string }[];
};

export const text = {
  brand: {
    name: "ProFix Home Services",
    tagline: "Plumbing • Electrical • HVAC",
    phoneDisplay: "(800) 555-1234",
    address: "123 Main Street, Dallas, TX 75201",
    hours: "Open 24/7 — 365 Days a Year",
    license: "Licensed #TX-44892 • Insured & Bonded",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Get Quote", href: "/quote" },
  ],
  hero: {
    badge: "⚡ 24/7 Emergency Response — 60 Min Arrival",
    title: "Fast, Reliable Home Repair Services Near You",
    subtitle:
      "Trusted local Plumbing, Electrical & HVAC experts serving your neighborhood since 2008. Upfront pricing. Same-day service. 100% satisfaction guaranteed.",
    bullets: [
      "Licensed & insured master technicians",
      "Free estimates — no hidden fees",
      "5,000+ five-star local reviews",
      "Workmanship warranty on every job",
    ],
  },
  servicesOverview: {
    eyebrow: "Our Services",
    title: "Expert Repairs You Can Count On",
    subtitle:
      "From burst pipes at midnight to a broken AC in July — our certified pros handle it all.",
  },
  services: [
    {
      slug: "plumbing",
      title: "Emergency Plumbing Services",
      shortTitle: "Plumbing",
      icon: "💧",
      description:
        "Burst pipes, clogged drains, water heater failures and leak repairs — fixed fast by master plumbers.",
      features: [
        "24/7 emergency leak repair",
        "Drain cleaning & hydro-jetting",
        "Water heater repair & install",
        "Sewer line inspection & repair",
        "Toilet, faucet & fixture install",
        "Re-piping & slab leak detection",
      ],
      seoIntro:
        "When a pipe bursts at 2 AM, every minute means more water damage. Our licensed plumbers arrive in under 60 minutes across the metro area with a fully-stocked truck — most repairs done same visit. We service residential and light commercial properties with upfront flat-rate pricing, so you know the cost before we start.",
      faq: [
        { q: "How fast can you arrive for a plumbing emergency?", a: "Average response time is 47 minutes within our 30-mile service area, 24/7/365." },
        { q: "Do you charge for estimates?", a: "No. All in-home estimates and diagnostics are 100% free with no obligation." },
      ],
    },
    {
      slug: "electrical",
      title: "Certified Electrical Repairs",
      shortTitle: "Electrical",
      icon: "⚡",
      description:
        "Panel upgrades, outlet repair, EV chargers and whole-home rewiring by master electricians.",
      features: [
        "Panel & breaker upgrades",
        "EV charger installation",
        "Outlet, switch & GFCI repair",
        "Whole-home rewiring",
        "Ceiling fan & lighting install",
        "Generator hookup & install",
      ],
      seoIntro:
        "Flickering lights, tripping breakers, or that scary burning smell? Don't take chances with electrical — our master electricians are licensed, bonded, and code-compliant in every city we serve. We pull permits, handle inspections, and back every job with a written warranty.",
      faq: [
        { q: "Do you pull permits for electrical work?", a: "Yes — every job that requires a permit is pulled by us and inspected by the city." },
        { q: "Can you install a Tesla / EV charger?", a: "Absolutely. We install all major Level 2 chargers including Tesla, ChargePoint and Wallbox." },
      ],
    },
    {
      slug: "hvac",
      title: "AC Repair & HVAC Installation",
      shortTitle: "HVAC",
      icon: "❄️",
      description:
        "AC not cooling? Furnace down? We repair, maintain and install all major HVAC brands — same day.",
      features: [
        "Same-day AC repair",
        "Furnace & heat pump service",
        "New system installation",
        "Annual tune-ups & maintenance",
        "Smart thermostat install",
        "Indoor air quality solutions",
      ],
      seoIntro:
        "A broken AC in summer is more than uncomfortable — it can be dangerous. Our NATE-certified HVAC technicians service every major brand (Trane, Carrier, Lennox, Goodman, Rheem) with same-day repair appointments and financing options for full system replacements.",
      faq: [
        { q: "How much does AC repair cost?", a: "Most repairs fall between $150–$650. We provide flat-rate pricing before any work begins." },
        { q: "Do you offer financing on new systems?", a: "Yes — 0% APR for 18 months on approved credit, with payments as low as $89/mo." },
      ],
    },
  ],
  whyUs: {
    eyebrow: "Why Choose Us",
    title: "The Most Trusted Home Service Pros In Town",
    points: [
      { icon: "🛡️", title: "Licensed & Insured", body: "Every tech is background-checked, drug-tested, and fully credentialed." },
      { icon: "💰", title: "Upfront Flat Pricing", body: "Know the cost before we start. No surprise fees, ever." },
      { icon: "⏱️", title: "60-Minute Response", body: "On-time guarantee or your service call is free." },
      { icon: "⭐", title: "5,000+ 5-Star Reviews", body: "Highest-rated local home service company on Google." },
    ],
  },
  testimonials: [
    {
      name: "Sarah M.",
      city: "Plano, TX",
      rating: 5,
      service: "Emergency Plumbing",
      quote:
        "My water heater burst at 11 PM. They had a tech at my door in 40 minutes and a new heater installed by morning. Lifesavers.",
    },
    {
      name: "Michael R.",
      city: "Dallas, TX",
      rating: 5,
      service: "AC Repair",
      quote:
        "Honest, fast, and fair pricing. Three other companies tried to sell me a whole new system — these guys fixed it for $280.",
    },
    {
      name: "Jennifer K.",
      city: "Frisco, TX",
      rating: 5,
      service: "Electrical Panel Upgrade",
      quote:
        "Professional from start to finish. Pulled permits, cleaned up, and the inspector said it was the best work he'd seen all week.",
    },
    {
      name: "David L.",
      city: "Arlington, TX",
      rating: 5,
      service: "HVAC Install",
      quote:
        "Got 4 quotes — they weren't the cheapest but the financing made it easy and the install crew was top-notch.",
    },
    {
      name: "Amanda P.",
      city: "Irving, TX",
      rating: 5,
      service: "Drain Cleaning",
      quote:
        "Clogged main line on Christmas Eve. They came out same day and didn't charge a holiday surcharge. Will use forever.",
    },
    {
      name: "Robert H.",
      city: "Garland, TX",
      rating: 5,
      service: "EV Charger Install",
      quote:
        "Installed my Tesla charger cleanly, on time, and exactly to code. Highly recommend for any electrical work.",
    },
  ],
  faq: [
    { q: "Do you provide same-day service?", a: "Yes — we offer same-day service for plumbing, electrical, and HVAC across our entire service area, 7 days a week." },
    { q: "Are your technicians licensed and insured?", a: "Every single one. We are fully licensed, bonded, and carry $2M general liability insurance." },
    { q: "What areas do you serve?", a: "We service the greater Dallas–Fort Worth metroplex including Plano, Frisco, Arlington, Irving, Garland, and surrounding cities." },
    { q: "Do you offer warranties on your work?", a: "Yes. All repairs include a 1-year workmanship warranty, and new installations come with manufacturer warranties up to 10 years." },
    { q: "How much does a service call cost?", a: "Diagnostic service calls are $89 and waived entirely if you proceed with the repair." },
  ],
  quote: {
    title: "Request a Free Quote Today",
    subtitle: "Tell us about the issue and we'll respond within 15 minutes during business hours.",
    fields: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      service: "Service Needed",
      address: "Service Address",
      message: "Describe the Issue",
    },
    serviceOptions: ["Plumbing", "Electrical", "HVAC / AC Repair", "Emergency — Not Sure", "Other"],
    perks: [
      "Free, no-obligation estimate",
      "Response within 15 minutes",
      "Licensed & insured technicians",
      "Upfront flat-rate pricing",
    ],
  },
  reviews: {
    title: "What Our Customers Are Saying",
    subtitle: "Over 5,000 verified five-star reviews from neighbors just like you.",
    stats: [
      { value: "4.9★", label: "Google Rating" },
      { value: "5,000+", label: "Verified Reviews" },
      { value: "98%", label: "Would Recommend" },
      { value: "15 yrs", label: "Serving Locally" },
    ],
  },
  beforeAfter: {
    title: "Real Results From Real Jobs",
    subtitle: "A few of our recent transformations.",
  },
  footer: {
    about: "Family-owned home services company serving the metro area since 2008. Plumbing, Electrical & HVAC done right the first time.",
    serviceAreas: ["Dallas", "Plano", "Frisco", "Arlington", "Irving", "Garland", "McKinney", "Richardson"],
    copyright: `© ${new Date().getFullYear()} ProFix Home Services. All rights reserved.`,
  },
  seo: {
    home: {
      title: "24/7 Plumbing, Electrical & HVAC Repair Near You | ProFix",
      description:
        "Fast, licensed home repair experts. Same-day plumbing, electrical & HVAC service with upfront pricing. Free estimates. 5,000+ 5-star reviews. Call now.",
    },
    services: {
      title: "Home Repair Services — Plumbing, Electrical, HVAC | ProFix",
      description:
        "Full-service home repair. Emergency plumbing, certified electrical work, AC repair & install. Licensed, insured, same-day. Get your free quote today.",
    },
    quote: {
      title: "Get a Free Quote — Plumbing, Electrical & HVAC | ProFix",
      description:
        "Request your free, no-obligation home repair quote. 15-minute response. Licensed pros. Same-day service available across the metro.",
    },
    reviews: {
      title: "Customer Reviews — 5,000+ Five-Star Ratings | ProFix",
      description:
        "Read verified customer reviews for ProFix Home Services. 4.9★ Google rating across plumbing, electrical, and HVAC service.",
    },
  },
};
