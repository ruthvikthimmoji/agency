import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dimension from "@/components/Dimension";
import CtaBand from "@/components/CtaBand";
import { sportsea as cs, type Img } from "@/data/sportsea";

export const metadata: Metadata = {
  title: "SportSea — case study",
  description: cs.intro,
};

/*
  All content comes from data/sportsea.ts.
  Sections with nothing filled in are not rendered, so the page is always launch-safe.
*/

function Shot({ img, ratio, tilt = 0, priority = false }: { img: Img; ratio: string; tilt?: number; priority?: boolean }) {
  return (
    <figure className="paper case-visual" style={{ transform: `rotate(${tilt}deg)`, margin: 0 }}>
      <div className="case-shot" style={{ aspectRatio: ratio }}>
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 1280px" priority={priority} />
      </div>
      {img.caption && <figcaption className="label label-sm case-caption">{img.caption}</figcaption>}
    </figure>
  );
}

function Chapter({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="section shell" aria-labelledby={`ch-${n}`}>
      <div className="split">
        <h2 id={`ch-${n}`} className="label label-blade">
          {n} — {title}
        </h2>
        <div className="case-body">{children}</div>
      </div>
    </section>
  );
}

export default function SportSeaCaseStudy() {
  // Number chapters by what is actually shown
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

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
        </section>

        {cs.hero && (
          <section className="shell">
            <Shot img={cs.hero} ratio="16 / 8" priority />
          </section>
        )}

        {(cs.problem || cs.context) && (
          <Chapter n={next()} title="The problem">
            {cs.problem && <p className="h3">{cs.problem}</p>}
            {cs.context && <p className="lead">{cs.context}</p>}
          </Chapter>
        )}

        <section className="section shell" aria-labelledby="ch-roles">
          <h2 id="ch-roles" className="label label-blade section-label">
            {next()} — Three sides of one marketplace
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

        <Chapter n={next()} title="What I designed">
          <ul className="deliverables case-scope">
            {cs.scope.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Chapter>

        {(cs.researchMethods || cs.insights.length > 0) && (
          <Chapter n={next()} title="Research">
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

        {cs.flow && (
          <section className="section shell" aria-labelledby="ch-flow">
            <h2 id="ch-flow" className="label label-blade section-label">
              {next()} — Flows &amp; architecture
            </h2>
            <Shot img={cs.flow} ratio="16 / 7" tilt={-0.3} />
          </section>
        )}

        {cs.screens.length > 0 && (
          <section className="section shell" aria-labelledby="ch-screens">
            <h2 id="ch-screens" className="label label-blade section-label">
              {next()} — Key screens
            </h2>
            <div className="screens">
              {cs.screens.map((img, i) => (
                <Shot key={img.src} img={img} ratio="9 / 16" tilt={[0.4, -0.3, 0.2, -0.2][i % 4]} />
              ))}
            </div>
          </section>
        )}

        {cs.metrics.length > 0 && (
          <section className="section shell" aria-labelledby="ch-outcomes">
            <h2 id="ch-outcomes" className="label label-blade section-label">
              {next()} — Outcomes
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

        {cs.reflection && (
          <Chapter n={next()} title="What I'd cut differently">
            <p className="h3">{cs.reflection}</p>
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
