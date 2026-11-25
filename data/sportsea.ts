/* =========================================================
   SPORTSEA CASE STUDY — fill this in, the page updates itself.

   Every field left as null or [] is simply hidden on the page,
   so the case study is always launch-safe. Add facts only —
   never estimated numbers.

   Images: export from the SportSea Figma as PNG (2x), put them in
   /public/work/sportsea/ and write the path, e.g. "/work/sportsea/hero.png".
   ========================================================= */

export type Img = { src: string; alt: string; caption?: string };

export const sportsea = {
  title: "SportSea",
  intro:
    "A multi-role sports booking platform spanning player, arena admin and master admin experiences — held together by one unified component system.",
  measure: "Product UI · 0→1 · 100+ screens · Live",

  // ---- Facts row (hidden one by one while null)
  role: null as string | null, // e.g. "Sole product designer"
  timeline: null as string | null, // e.g. "Jan – Apr 2026"
  platforms: "Player app · Arena admin · Master admin",
  status: "Shipped · Live",

  // ---- 01 The problem (hidden while both are null)
  problem: null as string | null, // one sentence: what was broken about booking before SportSea
  context: null as string | null, // 2–3 sentences: how people booked before, and the client's goal

  // ---- 02 Three roles (known from the product)
  roles: [
    { code: "Role A", name: "Players", body: "Find an arena, check open slots, then book and pay." },
    { code: "Role B", name: "Arena admins", body: "List courts, manage slots and pricing, and keep track of bookings." },
    { code: "Role C", name: "Master admins", body: "Oversee arenas and bookings across the whole platform." },
  ],

  // ---- 03 What I designed (known)
  scope: [
    "End-to-end flows for all three roles",
    "100+ screens across the player app and both admin experiences",
    "One unified component system shared by every role",
    "Design files handed off for build — the product is live",
  ],

  // ---- 04 Research (hidden while empty)
  researchMethods: null as string | null, // e.g. "Spoke to 6 players and 3 arena owners; reviewed competitor apps."
  insights: [] as string[], // 2–3 short sentences

  // ---- 05 Screens (hidden while empty)
  hero: null as Img | null,
  screens: [] as Img[], // portrait phone screens work best (9:16)
  flow: null as Img | null, // booking flow / IA map

  // ---- 06 Outcomes (hidden while empty — real numbers only)
  metrics: [] as { value: string; label: string }[], // e.g. { value: "1,200+", label: "Bookings in the first month" }

  // ---- 07 Reflection (hidden while null)
  reflection: null as string | null,

  // ---- Client quote (hidden while null)
  testimonial: null as { quote: string; name: string; role: string } | null,
};
