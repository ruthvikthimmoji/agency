import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dimension from "@/components/Dimension";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "SportSea — case study",
  description:
    "A multi-role sports booking platform spanning player, arena admin and master admin experiences, with a unified component system.",
};

/*
  Everything in [square brackets] is a placeholder for you to fill in.
  Visuals: export from the SportSea Figma, drop them in /public/work/sportsea/,
  and swap a <Visual /> for next/image when ready.
*/

function Visual({ caption, ratio = "16 / 8", tilt = 0 }: { caption: string; ratio?: string; tilt?: number }) {
  return (
    <div className="paper case-visual" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="paper-inset" style={{ aspectRatio: ratio }}>
        <span>[{caption}]</span>
      </div>
    </div>
  );
}

function Chapter({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="section shell" aria-labelledby={`ch-${n}`}>
      <div className="split">
        <p id={`ch-${n}`} className="label label-blade">
          {n} — {title}
        </p>
        <div className="case-body">{children}</div>
      </div>
    </section>
  );
}

const ROLES = [
  { code: "Role A", name: "Players", body: "Find an arena, see open slots, book and pay. [Their top need, in their words.]" },
  { code: "Role B", name: "Arena admins", body: "List courts, manage slots and pricing, track bookings. [Their top need.]" },
  { code: "Role C", name: "Master admins", body: "Approve arenas, resolve issues and watch the whole marketplace. [Their top need.]" },
];

const STATS = [
  { value: "[+00%]", label: "[Metric — e.g. bookings completed]" },
  { value: "[00]", label: "[Metric — e.g. arenas onboarded]" },
  { value: "100+", label: "Screens designed and shipped" },
];

export default function SportSeaCaseStudy() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <p className="label rise">Piece 01 — Case study</p>
          <h1 className="display rise delay-1 case-title">SportSea</h1>
          <p className="lead case-sub rise delay-2">
            A multi-role sports booking platform spanning player, arena admin and master admin
            experiences — held together by one unified component system.
          </p>
          <div className="rise delay-3 case-measure">
            <Dimension label="Product UI · 0→1 · 100+ screens · Live" />
          </div>
          <dl className="facts facts-row rise delay-4">
            <div>
              <dt className="label label-sm">Role</dt>
              <dd>[Your role — e.g. sole product designer]</dd>
            </div>
            <div>
              <dt className="label label-sm">Platforms</dt>
              <dd>Player app · Arena admin · Master admin</dd>
            </div>
            <div>
              <dt className="label label-sm">Timeline</dt>
              <dd>[Start – end]</dd>
            </div>
            <div>
              <dt className="label label-sm">Status</dt>
              <dd>Shipped · Live</dd>
            </div>
          </dl>
        </section>

        <section className="shell">
          <Visual caption="Hero composition — player booking flow beside the arena admin dashboard" />
        </section>

        <Chapter n="01" title="The problem">
          <p className="h3">[One sentence: what was broken about booking a sports venue before SportSea.]</p>
          <p className="lead">
            [2–3 sentences of context: who was struggling, how they booked before (calls, WhatsApp, walk‑ins?),
            and what that cost them. Name the business goal the client gave you.]
          </p>
        </Chapter>

        <section className="section shell" aria-labelledby="ch-02">
          <p id="ch-02" className="label label-blade section-label">02 — Three sides of one marketplace</p>
          <div className="rules cell-grid">
            {ROLES.map((r) => (
              <div key={r.code} className="cell rule">
                <span className="label label-sm">{r.code}</span>
                <div>
                  <h2 className="h3">{r.name}</h2>
                  <p className="body">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Chapter n="03" title="Research">
          <p className="body">[Methods — e.g. player interviews, arena visits, competitor teardown.]</p>
          <ol className="insights">
            <li><span className="label label-sm">I.1</span><span className="h4">[Insight one — what you learned and how it changed the design.]</span></li>
            <li><span className="label label-sm">I.2</span><span className="h4">[Insight two.]</span></li>
            <li><span className="label label-sm">I.3</span><span className="h4">[Insight three.]</span></li>
          </ol>
        </Chapter>

        <section className="section shell" aria-labelledby="ch-04">
          <p id="ch-04" className="label label-blade section-label">04 — Flows &amp; architecture</p>
          <h2 className="h2 case-h2">
            Search → slot → pay in <em>[N] taps.</em>
          </h2>
          <Visual caption="Booking flow + information architecture for all three roles" ratio="16 / 7" tilt={-0.3} />
        </section>

        <section className="section shell" aria-labelledby="ch-05">
          <p id="ch-05" className="label label-blade section-label">05 — Key screens</p>
          <div className="screens">
            <Visual caption="S.1 · Arena discovery — player" ratio="9 / 16" tilt={0.4} />
            <Visual caption="S.2 · Slot picker + checkout — player" ratio="9 / 16" tilt={-0.3} />
            <Visual caption="S.3 · Bookings calendar — arena admin" ratio="9 / 16" tilt={0.2} />
          </div>
        </section>

        <Chapter n="06" title="Design system">
          <p className="lead">
            [How one component system kept 100+ screens consistent across three roles: tokens, named components,
            variants — and what developers got at handoff.]
          </p>
        </Chapter>

        <section className="section shell" aria-labelledby="ch-07">
          <p id="ch-07" className="label label-blade section-label">07 — Outcomes</p>
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Chapter n="08" title="What I'd cut differently">
          <p className="h3">[One honest reflection — a decision you&apos;d revisit and what you&apos;d test next.]</p>
        </Chapter>

        <section className="section shell">
          <Link href="/work" className="next-piece">
            <span className="label">More pieces</span>
            <span className="display">All work →</span>
          </Link>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
