export const agency = {
  name: "ROUGH.",
  tagline: "Make the mess make sense.",
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
      deliverables: ["User flows", "Wireframes", "High-fidelity UI", "Responsive screens", "Developer-ready handoff"],
    },
    {
      number: "02",
      title: "Design Systems",
      short: "Reusable UI foundations that reduce inconsistency and speed up design decisions.",
      description:
        "Turn repeated interface decisions into a practical component system your product can keep building on.",
      deliverables: ["Design tokens", "Components", "Variants & states", "Patterns", "Usage guidance"],
    },
    {
      number: "03",
      title: "UX / UI Audit",
      short: "A focused review of friction, inconsistency and interface opportunities.",
      description:
        "A structured look at an existing product to identify where the experience becomes harder to understand, use or maintain.",
      deliverables: ["Heuristic review", "UI consistency review", "Priority issues", "Annotated findings", "Action recommendations"],
    },
  ],
} as const;
