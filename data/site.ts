export const site = {
  name: "ROUGH.",
  shortName: "ROUGH.",
  email: "hello@example.com",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
  hero: {
    eyebrow: "Independent product design studio · India + global",
    title: ["Make the", "mess make", "sense."],
    body: "I turn rough, inconsistent products into polished, scalable experiences — for founders done patching things together.",
  },
};

export const work = [
  {
    id: "sportsea",
    number: "01",
    title: "SportSea",
    type: "Product UI · 0→1",
    description: "A multi-role sports booking product spanning player, arena admin and platform admin experiences.",
    href: "#",
    tone: "light",
  },
  {
    id: "juzzpay",
    number: "02",
    title: "JuzzPay",
    type: "Fintech · Dashboard",
    description: "A finance dashboard concept focused on making dense financial information easier to scan and act on.",
    href: "#",
    tone: "dark",
  },
] as const;

export const services = [
  { number: "01", title: "Product UI Design", short: "Clear, polished interfaces", description: "From flows to high-fidelity product interfaces that feel clear, considered and ready to scale." },
  { number: "02", title: "Design Systems", short: "Reusable by design", description: "Turn repeated patterns into a component system that creates consistency without slowing the team down." },
  { number: "03", title: "UX / UI Audit", short: "Find the friction", description: "A focused review of screens, flows and patterns to surface inconsistency, friction and opportunities." },
] as const;

export const process = [
  { number: "01", title: "Align", description: "Understand the product, problem and constraints." },
  { number: "02", title: "Structure", description: "Map the experience and remove unnecessary complexity." },
  { number: "03", title: "Design", description: "Create the visual language and high-fidelity UI." },
  { number: "04", title: "Systemize", description: "Turn repeated decisions into reusable components." },
  { number: "05", title: "Handoff", description: "Deliver clean files your team can actually use." },
] as const;
