export const site = {
  name: "Rough Studios.",
  shortName: "Rough Studios.",
  founder: "Ruthvik P Thimmoji",
  email: "thiimojiruthvik@gmail.com",
  responsePromise: "Replies within 24 hours",
  availability: "Booking for November 2026",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Scorecard", href: "#scorecard" },
    { label: "Process", href: "#process" },
    { label: "About", href: "/about" },
  ],
  hero: {
    status: "Booking Nov 2026",
    eyebrow: "Product UI / Design Systems / UX Audits",
    title: ["Make the", "mess make", "sense."],
    body: "Independent product design studio turning fast-growing, inconsistent interfaces into clear, scalable design systems. Led by Ruthvik P Thimmoji with direct designer access.",
    trustLine: "Fixed-price audits · Documented handoff · Direct access to the designer",
  },
};

export const work = [
  {
    id: "sportsea",
    number: "01",
    title: "SportSea",
    type: "Product UI · 0→1",
    tag: "Case Study",
    description: "A multi-role sports booking platform spanning player, arena admin, and master admin experiences with a unified component system.",
    href: "/work/sportsea",
    tone: "dark",
  },
  {
    id: "juzzpay",
    number: "02",
    title: "JuzzPay",
    type: "Fintech · Dashboard",
    tag: "Concept & Teardown",
    description: "A financial dashboard redesign focused on reducing visual clutter and accelerating high-volume transaction scans.",
    href: "/work/juzzpay",
    tone: "light",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "UX / UI Audit",
    short: "3 to 5 days · Rapid Clarity",
    price: "From ₹18,000 / $300",
    description: "A comprehensive teardown of screens, interaction flows, and token friction. You get a prioritized action matrix and redlined Figma recommendations.",
    featured: true,
  },
  {
    number: "02",
    title: "Design Systems",
    short: "2 to 4 weeks · Scalable Tokens & Components",
    price: "Fixed scope · Inquire",
    description: "Transforms repeated patterns into a documented Figma token and component library so your engineers build fast without introducing UI debt.",
    featured: false,
  },
  {
    number: "03",
    title: "Product UI Design",
    short: "End-to-End Product Flows",
    price: "Milestone-based",
    description: "From structural wireframes to production-grade interfaces with full edge-case coverage and complete developer handoff specs.",
    featured: false,
  },
] as const;

export const process = [
  { number: "01", title: "Align", description: "Uncover product logic, technical constraints, and key friction points." },
  { number: "02", title: "Structure", description: "Clean up navigation, eliminate edge case confusion, and wireframe clear user flows." },
  { number: "03", title: "Design", description: "Engineer the visual language, typography scale, and responsive UI screens." },
  { number: "04", title: "Systemize", description: "Package atomic components, variants, and design tokens into a ready library." },
  { number: "05", title: "Document & Handoff", description: "Redlined Figma specs, interactive states, and direct engineering guidance." }
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruthvik-p-thimmoji/" },
  { label: "Behance", href: "https://www.behance.net/ruthvikthimmoji" },
  { label: "Instagram", href: "https://www.instagram.com/ruthvikdesigns.co/" },
];