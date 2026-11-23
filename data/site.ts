/* =========================================================
   SINGLE SOURCE OF CONTENT
   Everything the site says lives here. Change it once,
   it changes everywhere. (Replaces the old agency.ts.)
   ========================================================= */

export const site = {
  // ---- Brand (change `name` here to rename the whole site)
  name: "Ruthvik’s Studio",
  // Logo: plain text for now. When your own logo is ready, put the file in
  // /public/brand (e.g. logo.svg), set `image` to "/brand/logo.svg" and its size.
  logo: {
    text: "Ruthvik’s Studio",
    image: null as string | null,
    width: 180,
    height: 32,
  },
  tagline: "Make the mess make sense.",
  descriptor: "Independent product design studio",
  founder: "Ruthvik P Thimmoji",
  location: "Bengaluru, India",
  url: "https://agencyv0.vercel.app", // swap for your real domain
  description:
    "Independent product design studio turning fast-growing, inconsistent interfaces into clear, scalable design systems. Led by Ruthvik P Thimmoji.",
  positioning:
    "I turn rough, inconsistent products into polished, scalable experiences — for founders done patching things together.",

  // ---- Contact
  email: "thimmojiruthvik@gmail.com",
  formEndpoint: "https://formspree.io/f/mbgdzwyp",
  responsePromise: "Replies within 24 hours",
  availability: "Booking for December 2026",

  // ---- Navigation
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a project", href: "/contact" },

  // ---- Home hero
  hero: {
    sheet: "Sheet A1 — Product UI / Design systems / UX audits",
    title: { lead: "Make the mess\nmake ", accent: "sense." },
    body: "Independent product design studio turning fast-growing, inconsistent interfaces into clear, scalable design systems. Direct access to the designer, every step.",
    measure: "Fixed-price audits · Documented handoff · Direct designer access",
  },
} as const;

/* ---------- WORK ---------- */

export type WorkKind = "product" | "system" | "audit" | "concept";

export const workFilters: { id: "all" | WorkKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product UI" },
  { id: "system", label: "Design systems" },
  { id: "concept", label: "Concepts" },
];

export const work = [
  {
    id: "sportsea",
    number: "01",
    title: "SportSea",
    type: "Product UI · 0→1",
    tag: "Case study",
    kinds: ["product", "system"] as WorkKind[],
    description:
      "A multi-role sports booking platform spanning player, arena admin and master admin experiences, with a unified component system.",
    visual: "SportSea — player app + arena admin",
    image: null as string | null, // e.g. "/work/sportsea/cover.png" in /public
    href: "/work/sportsea",
    published: true,
    facts: [
      { label: "Screens", value: "100+" },
      { label: "Roles", value: "3" },
      { label: "Status", value: "Live" },
    ],
  },
  {
    id: "juzzpay",
    number: "02",
    title: "JuzzPay",
    type: "Fintech · Dashboard",
    tag: "Concept & teardown",
    kinds: ["concept"] as WorkKind[],
    description:
      "A financial dashboard redesign focused on reducing visual clutter and speeding up high-volume transaction scans.",
    visual: "JuzzPay — transactions dashboard",
    image: null as string | null,
    href: "/work/juzzpay",
    published: false, // card shows "Case study coming soon" until this page exists
    facts: [],
  },
];

/* ---------- SERVICES ---------- */

export const services = [
  {
    code: "C1.1",
    slug: "audit",
    title: "UX / UI Audit",
    short: "A focused review of friction, inconsistency and interface opportunities.",
    description:
      "A structured look at an existing product to find where the experience becomes harder to understand, use or maintain. You get a prioritised action list and redlined Figma recommendations.",
    timeline: "3–5 days",
    priceInr: "From ₹18,000",
    priceUsd: "From $300",
    per: "fixed price",
    startHere: true,
    deliverables: [
      "Heuristic review",
      "UI consistency review",
      "Priority issues",
      "Annotated findings",
      "Action recommendations",
    ],
  },
  {
    code: "C1.2",
    slug: "design-systems",
    title: "Design Systems",
    short: "Reusable UI foundations that reduce inconsistency and speed up design decisions.",
    description:
      "Turn repeated interface decisions into a documented token and component library your engineers can build on without adding UI debt.",
    timeline: "Typically 3–5 weeks",
    priceInr: "Scoped after a brief",
    priceUsd: "Scoped after a brief",
    per: "fixed scope",
    startHere: false,
    deliverables: ["Design tokens", "Components", "Variants & states", "Patterns", "Usage guidance"],
  },
  {
    code: "C1.3",
    slug: "product-ui",
    title: "Product UI Design",
    short: "Clear, polished interfaces for products moving from idea to scale.",
    description:
      "From flows and information hierarchy to high-fidelity screens — making complex product experiences feel obvious and consistent, with full edge-case coverage.",
    timeline: "Typically 3–6 weeks",
    priceInr: "Milestone-based",
    priceUsd: "Milestone-based",
    per: "scoped after a brief",
    startHere: false,
    deliverables: [
      "User flows",
      "Wireframes",
      "High-fidelity UI",
      "Responsive screens",
      "Organised Figma files with documented states and specs",
    ],
  },
] as const;

/* ---------- PROCESS (positions on the ruler, in cm) ---------- */

export const process = [
  { number: "01", at: "0 cm", title: "Align", description: "Uncover product logic, technical constraints and the real friction points." },
  { number: "02", at: "20 cm", title: "Structure", description: "Clean up navigation, remove edge-case confusion and wireframe clear user flows." },
  { number: "03", at: "40 cm", title: "Design", description: "Shape the visual language, type scale and responsive UI screens." },
  { number: "04", at: "60 cm", title: "Systemise", description: "Package components, variants and design tokens into a ready library." },
  { number: "05", at: "80 cm", title: "Document & hand off", description: "Redlined Figma specs, interactive states and direct guidance for your engineers." },
] as const;

/* ---------- SOCIAL (a link is hidden while its href is empty) ---------- */

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruthvik-p-thimmoji/" },
  { label: "Behance", href: "https://www.behance.net/ruthvikthimmoji" },
  { label: "Instagram", href: "https://www.instagram.com/ruthvikdesigns.co/" },
].filter((link) => link.href !== "");
