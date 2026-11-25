/* =========================================================
   SPORTSEA CASE STUDY — the page reads everything from here.

   Sources: the SportSea Figma file (pages CS 0–5, ✅ Final designs)
   and the live Google Play listing. Fields left as null or [] are
   hidden on the page. Only add facts you can stand behind.
   ========================================================= */

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
  body?: string;
};

export const sportsea = {
  title: "SportSea",
  intro:
    "One platform for booking courts, managing memberships and settling payouts — designed for players, arena owners and admins across mobile and web.",
  measure: "Product UI · Android app + web · 100+ screens · Live on Google Play",
  liveUrl: "https://play.google.com/store/apps/details?id=com.sportsea.sportsea",

  // ---- Facts row (each hidden while null)
  role: null as string | null, // ← e.g. "Lead product designer" — please confirm
  timeline: null as string | null, // ← e.g. "Mar – Sep 2025" — please confirm
  platforms: "Android app for players · Web for arena owners and admin",
  status: "Live on Google Play",

  hero: {
    src: "/work/sportsea/landing.jpg",
    alt: "SportSea web landing page: the SportSea logo over an illustrated hero of football, basketball, tennis and swimming, with a Mysuru location chip.",
    width: 1200,
    height: 720,
  } as Shot | null,

  // ---- The problem
  problem: "Local sports venues still run on phone calls, WhatsApp and paper registers." as string | null,
  context:
    "Players can’t see real-time availability or prices. Owners lose slots to double bookings and chase payments by hand — and nobody has a reliable record of who owes whom." as
      | string
      | null,

  // ---- Three sides
  roles: [
    { code: "Role A", name: "Players", body: "Couldn’t tell which court was free, compare venues, or pay and cancel without calling." },
    { code: "Role B", name: "Arena owners", body: "Managed slots by hand, with no membership tracking and unclear payouts." },
    { code: "Role C", name: "Platform admin", body: "Had no single view across arenas, approvals, bookings or settlements." },
  ],

  // ---- Goals → how the design responds
  goals: [
    { goal: "Book a court in under a minute", response: "A three-step flow — select, pay, confirm — with a visible progress bar." },
    { goal: "Reduce no-shows and disputes", response: "A payment hold timer, a clear cancellation policy and a downloadable receipt." },
    { goal: "Let owners onboard themselves", response: "A four-step arena registration with a preview before submitting." },
    { goal: "Make payouts trustworthy", response: "Settlement reports with Pending and Completed states, search and date filters." },
  ],

  // ---- Design principles
  principles: [
    { title: "Trust first", body: "Money screens show clear states, honest timers and receipts." },
    { title: "Show state, always", body: "Every booking, plan and payout has a visible status." },
    { title: "One pattern, three roles", body: "Shared cards, tags and steppers keep the roles related." },
    { title: "Right device per role", body: "Mobile for players; desktop-first for owners and admin." },
  ],

  // ---- The solution at a glance
  solution: [
    { title: "Discover", body: "Location-aware venue cards, sport tiles and an availability view." },
    { title: "Book & join", body: "Hourly bookings and recurring membership plans with team members." },
    { title: "Manage", body: "Owner dashboards for courts, plans, bookings and members." },
    { title: "Settle", body: "Transparent settlement reports for owners and admin." },
  ],

  // ---- Key screens (wide compositions from the Figma file)
  gallery: [
    {
      src: "/work/sportsea/booking-flow.jpg",
      alt: "Four mobile screens: arena details, choosing a date, time and court, a receipt-style booking summary with a 4:59 payment countdown, and the pay screen.",
      width: 2400,
      height: 1240,
      title: "Booking, in three steps",
      body: "A three-part progress bar (Selection · Payment · Confirm) shows where you are. Unavailable courts are greyed out, and the payment step holds your slot with a visible countdown and a receipt-style summary.",
    },
    {
      src: "/work/sportsea/memberships.jpg",
      alt: "Web screens: membership plans as price cards (quarterly recommended, monthly, weekly) for badminton, and a list of the player's active and expired memberships with a renewal reminder.",
      width: 2400,
      height: 1040,
      title: "Memberships and teams",
      body: "Plans as price cards per sport and period, then team members and payment. Players see active and expired memberships, with a renewal reminder before one closes.",
    },
    {
      src: "/work/sportsea/owner-onboarding.jpg",
      alt: "Web screens: a four-step arena registration (arena, bank, sports and upload details) and the owner dashboard with upcoming bookings, slot availability and booking totals.",
      width: 2400,
      height: 1090,
      title: "Owner onboarding",
      body: "A four-step stepper — arena, bank, sports, uploads — gets an arena listed without a call. After approval, owners land on a dashboard for bookings and availability, and can block slots for offline bookings.",
    },
    {
      src: "/work/sportsea/settlements.jpg",
      alt: "Four mobile settlement screens: payout cards with ID, date, amount and a Pending or Completed tag, with search, status filters and a date picker.",
      width: 2400,
      height: 1200,
      title: "Settlements",
      body: "Every payout is a card with its ID, date, amount and a coloured status tag, plus search, status chips and a date filter. Admin sees the same pattern across every arena.",
    },
  ] as Shot[],

  // ---- Design system: what the audit found → system v1
  systemNote:
    "After delivery I audited the project file and consolidated it into a small system: one typeface, one brand blue, a short radius scale and colour variables with light and dark modes.",
  systemAudit: [
    { area: "Typefaces", before: "8+ families", after: "Inter only" },
    { area: "Brand blue", before: "2 near-identical blues", after: "1 blue, #1A4FD6" },
    { area: "Corner radii", before: "15+ values", after: "6 · 10 · 14 · pill" },
    { area: "Text sizes", before: "18+ sizes", after: "7-step scale" },
    { area: "Colours", before: "Raw hex on layers", after: "Variables, light + dark" },
  ],

  // ---- Research (hidden while empty — the file's personas are hypotheses, not interviews)
  researchMethods: null as string | null,
  insights: [] as string[],

  // ---- Outcomes (facts only)
  metrics: [
    { value: "100+", label: "Screens designed and shipped" },
    { value: "3", label: "Roles served by one product" },
    { value: "2", label: "Platforms: Android app and web" },
  ],

  // ---- Reflection (drafted in the Figma file — please confirm it's yours)
  takeaway:
    "Marketplace design is mostly trust design: clear states, honest timers and visible money. Designing the settlement flow early made every other screen clearer." as
      | string
      | null,
  next: [
    "Consolidate the system across every frame — one typeface, one blue, a short radius scale",
    "Usability-test the payment hold timer and failure recovery",
    "Add empty, loading and offline states",
    "Run a full accessibility pass: contrast, tap targets and focus states",
  ],

  testimonial: null as { quote: string; name: string; role: string } | null,
};
