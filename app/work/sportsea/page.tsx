import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dimension from "@/components/Dimension";
import CtaBand from "@/components/CtaBand";
import { sportsea as cs, type Shot } from "@/data/sportsea";

export const metadata: Metadata = {
  title: "SportSea — case study",
  description: cs.intro,
  openGraph: cs.hero ? { images: [{ url: cs.hero.src, width: cs.hero.width, height: cs.hero.height }] } : undefined,
};

/* All content comes from data/sportsea.ts. Empty sections are not rendered. */

function Figure({ shot, tilt = 0, priority = false }: { shot: Shot; tilt?: number; priority?: boolean }) {
  return (
    <figure className="paper case-visual" style={{ transform: `rotate(${tilt}deg)`, margin: 0 }}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes="(max-width: 1360px) 100vw, 1280px"
        priority={priority}
        className="case-img"
      />
    </figure>
  );
}

function Chapter({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <section className="section shell" aria-labelledby={id}>
      <div className="split">
        <h2 id={id} className="label label-blade">
          {label}
        </h2>
        <div className="case-body">{children}</div>
      </div>
    </section>
  );
}

export default function SportSeaCaseStudy() {
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  const facts = [
    { label: "Role", value: cs.role },
    { label: "Platforms", value: cs.platforms },
    { label: "Timeline", value: cs.timeline },
    { label: "Status", value: cs.status },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value));

  return (
    <>
      <Navbar />

      <main id="main">
        {/* Hero */}
        <section className="page-hero shell">
          <p className="label rise">Piece 01 — Case study</p>
          <h1 className="display rise delay-1 case-title">{cs.title}</h1>
          <p className="lead case-sub rise delay-2">{cs.intro}</p>
          <div className="rise delay-3 case-measure">
            <Dimension label={cs.measure} />
          </div>
          <dl className="facts facts-row rise delay-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="label label-sm">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          {cs.liveUrl && (
            <a href={cs.liveUrl} className="btn btn-secondary btn-sm case-live" target="_blank" rel="noopener noreferrer">
              See it on Google Play <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </section>

        {cs.hero && (
          <section className="shell">
            <Figure shot={cs.hero} priority />
          </section>
        )}

        {/* The problem */}
        {(cs.problem || cs.context) && (
          <Chapter id="ch-problem" label={`${num()} — The problem`}>
            {cs.problem && <p className="h3">{cs.problem}</p>}
            {cs.context && <p className="lead">{cs.context}</p>}
          </Chapter>
        )}

        {/* Three sides */}
        <section className="section shell" aria-labelledby="ch-roles">
          <h2 id="ch-roles" className="label label-blade section-label">
            {num()} — Three sides of one marketplace
          </h2>
          <div className="rules cell-grid">
            {cs.roles.map((r) => (
              <div key={r.code} className="cell rule">
                <span className="label label-sm">{r.code}</span>
                <div>
                  <h3 className="h3">{r.name}</h3>
                  <p className="body">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals → design */}
        {cs.goals.length > 0 && (
          <section className="section shell" aria-labelledby="ch-goals">
            <h2 id="ch-goals" className="label label-blade section-label">
              {num()} — Goals, and how the design answers them
            </h2>
            <ol className="goal-list">
              {cs.goals.map((g, i) => (
                <li key={g.goal} className="goal-row">
                  <span className="label label-sm">G.{i + 1}</span>
                  <p className="h4">{g.goal}</p>
                  <p className="body">{g.response}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Principles */}
        {cs.principles.length > 0 && (
          <Chapter id="ch-principles" label={`${num()} — Design principles`}>
            <dl className="facts">
              {cs.principles.map((p) => (
                <div key={p.title}>
                  <dt className="h4 principle-title">{p.title}</dt>
                  <dd className="body principle-body">{p.body}</dd>
                </div>
              ))}
            </dl>
          </Chapter>
        )}

        {/* Solution */}
        {cs.solution.length > 0 && (
          <section className="section shell" aria-labelledby="ch-solution">
            <h2 id="ch-solution" className="label label-blade section-label">
              {num()} — The solution at a glance
            </h2>
            <div className="rules cell-grid">
              {cs.solution.map((s, i) => (
                <div key={s.title} className="cell rule">
                  <span className="label label-sm label-blade">S.{i + 1}</span>
                  <div>
                    <h3 className="h3">{s.title}</h3>
                    <p className="body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key screens */}
        {cs.gallery.length > 0 && (
          <section className="section shell" aria-labelledby="ch-screens">
            <h2 id="ch-screens" className="label label-blade section-label">
              {num()} — Key screens
            </h2>
            <div className="case-gallery">
              {cs.gallery.map((shot, i) => (
                <div key={shot.src} className="case-gallery-item">
                  {(shot.title || shot.body) && (
                    <div className="case-gallery-text">
                      <span className="label label-sm">Screen set {i + 1}</span>
                      {shot.title && <h3 className="h3">{shot.title}</h3>}
                      {shot.body && <p className="body">{shot.body}</p>}
                    </div>
                  )}
                  <Figure shot={shot} tilt={[0.3, -0.25, 0.2, -0.3][i % 4]} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Design system */}
        {cs.systemAudit.length > 0 && (
          <Chapter id="ch-system" label={`${num()} — Design system`}>
            {cs.systemNote && <p className="lead">{cs.systemNote}</p>}
            <div className="audit-table" role="table" aria-label="Design system audit: before and after">
              <div className="audit-row audit-head" role="row">
                <span role="columnheader" className="label label-sm">Area</span>
                <span role="columnheader" className="label label-sm">Found in the file</span>
                <span role="columnheader" className="label label-sm">System v1</span>
              </div>
              {cs.systemAudit.map((a) => (
                <div key={a.area} className="audit-row" role="row">
                  <span role="cell" className="audit-area">{a.area}</span>
                  <span role="cell" className="audit-before">{a.before}</span>
                  <span role="cell" className="audit-after">{a.after}</span>
                </div>
              ))}
            </div>
          </Chapter>
        )}

        {/* Research (only once real research is added) */}
        {(cs.researchMethods || cs.insights.length > 0) && (
          <Chapter id="ch-research" label={`${num()} — Research`}>
            {cs.researchMethods && <p className="body">{cs.researchMethods}</p>}
            {cs.insights.length > 0 && (
              <ol className="insights">
                {cs.insights.map((t, i) => (
                  <li key={t}>
                    <span className="label label-sm">I.{i + 1}</span>
                    <span className="h4">{t}</span>
                  </li>
                ))}
              </ol>
            )}
          </Chapter>
        )}

        {/* Outcomes */}
        {cs.metrics.length > 0 && (
          <section className="section shell" aria-labelledby="ch-outcomes">
            <h2 id="ch-outcomes" className="label label-blade section-label">
              {num()} — What shipped
            </h2>
            <dl className="stats">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {cs.testimonial && (
          <section className="section shell">
            <figure className="paper case-quote">
              <blockquote className="h3">“{cs.testimonial.quote}”</blockquote>
              <figcaption className="label label-sm">
                — {cs.testimonial.name}, {cs.testimonial.role}
              </figcaption>
            </figure>
          </section>
        )}

        {/* Reflection */}
        {(cs.takeaway || cs.next.length > 0) && (
          <Chapter id="ch-reflection" label={`${num()} — What I learned, and what’s next`}>
            {cs.takeaway && <p className="h3">{cs.takeaway}</p>}
            {cs.next.length > 0 && (
              <ul className="deliverables case-scope">
                {cs.next.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </Chapter>
        )}

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
