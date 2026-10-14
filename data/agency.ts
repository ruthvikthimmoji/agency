export const agency = {
  name: "ROUGH.",
  tagline: "Make the mess make sense.",
  // Used for every email link on the site. Change it here and it changes everywhere.
  email: "thiimmojiruthvik@gmail.com",
  formEndpoint: "https://formspree.io/f/mbgdzwyp",
  positioning:
    "I turn rough, inconsistent products into polished, scalable experiences — for founders done patching things together.",
  differentiator: "Untangling complexity.",
  services: [
    {
      number: "01",
      title: "Product UI Design",
      short: "Clear, polished interfaces for products moving from idea to scale.",
      description:
        "From flows and information hierarchy to high-fidelity screens, the focus is making complex product experiences feel obvious and consistent.",
      timeline: "Typically 3–6 weeks",
      investment: "Scoped after a short brief",
      startHere: false,
      deliverables: [
        "User flows",
        "Wireframes",
        "High-fidelity UI",
        "Responsive screens",
        "Organized Figma files with documented states and specs",
      ],
    },
    {
      number: "02",
      title: "Design Systems",
      short: "Reusable UI foundations that reduce inconsistency and speed up design decisions.",
      description:
        "Turn repeated interface decisions into a practical component system your product can keep building on.",
      timeline: "Typically 3–5 weeks",
      investment: "Scoped after a short brief",
      startHere: false,
      deliverables: ["Design tokens", "Components", "Variants & states", "Patterns", "Usage guidance"],
    },
    {
      number: "03",
      title: "UX / UI Audit",
      short: "A focused review of friction, inconsistency and interface opportunities.",
      description:
        "A structured look at an existing product to identify where the experience becomes harder to understand, use or maintain.",
      timeline: "3–5 days",
      investment: "ask a query",
      startHere: true,
      deliverables: ["Heuristic review", "UI consistency review", "Priority issues", "Annotated findings", "Action recommendations"],
    },
  ],
} as const;

// A link is hidden automatically while its href is an empty string.
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ruthvik-p-thimmoji/" },
  { label: "Behance", href: "" }, // paste your Behance profile URL
  { label: "Instagram", href: "" }, // paste your Instagram profile URL, or leave empty to hide it
].filter((link) => link.href !== "");