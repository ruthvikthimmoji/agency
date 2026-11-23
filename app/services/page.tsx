import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  // The layout adds " | <brand>" automatically
  title: "Services — UX/UI Audit, Design Systems, Product UI",
  description:
    "Three focused services: UX/UI audits, design systems and product UI design for founders whose product is getting harder to manage.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <SectionHeading
            level={1}
            number="Sheet C"
            eyebrow="Services & pricing"
            title={"Design work that makes\ncomplexity easier to manage."}
            accentWord="easier to manage."
            blade
            description={site.positioning}
          />
        </section>

        <section className="shell service-details" aria-label="Services">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="service-detail">
              <div className="service-detail-head">
                <span className="label label-blade">{s.code}</span>
                {s.startHere && <span className="start-here">Start here</span>}
              </div>

              <div className="service-detail-grid">
                <div>
                  <h2 className="h2">{s.title}</h2>
                  <p className="lead service-detail-short">{s.short}</p>
                </div>

                <div className="service-detail-side">
                  <p className="body">{s.description}</p>

                  <dl className="service-meta">
                    <div>
                      <dt className="label label-sm">Timeline</dt>
                      <dd>{s.timeline}</dd>
                    </div>
                    <div>
                      <dt className="label label-sm">Investment</dt>
                      <dd>
                        {s.priceInr}
                        {s.priceUsd !== s.priceInr && <span className="muted"> · {s.priceUsd}</span>}
                      </dd>
                    </div>
                  </dl>

                  <ul className="deliverables">
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <Check size={15} strokeWidth={1.6} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`btn ${s.startHere ? "btn-primary" : "btn-secondary"}`}>
                    {s.startHere ? "Book an audit →" : "Send a brief →"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="boundary mat-deep">
          <div className="shell split">
            <p className="label">02 — Focus</p>
            <div>
              <h2 className="h1">
                Deliberately <em className="accent">narrow.</em>
              </h2>
              <p className="lead boundary-copy">
                I don&apos;t offer development, formal UX research, usability testing or product strategy
                consulting. Doing fewer things properly is the point. Design only — organised files your
                developers can build from.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="split">
            <SectionHeading number="03" eyebrow="Questions" title="Before we start." accentWord="start." />
            <Faq />
          </div>
        </section>

        <CtaBand lead={"Not sure what\nyou "} accent="need?" body="Send over the product, problem or current state. I can start from there." />
      </main>

      <Footer />
    </>
  );
}
