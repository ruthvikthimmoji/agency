"use client";

import { ArrowUpRight, ArrowDownRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const services = [
  {
    number: "01",
    title: "Product UI Design",
    description:
      "Polished interfaces for SaaS, mobile products and digital experiences — from early flows to high-fidelity screens.",
  },
  {
    number: "02",
    title: "Design Systems",
    description:
      "Reusable components, patterns and visual rules that bring consistency to products and make future design work easier.",
  },
  {
    number: "03",
    title: "UX/UI Audit",
    description:
      "A focused review of your existing product to identify interface friction, inconsistencies and opportunities to improve.",
  },
];

const process = [
  {
    number: "01",
    title: "Align",
    description:
      "Understand the product, the users, the current experience and what needs to change.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Turn messy requirements and screens into clear flows, hierarchy and reusable patterns.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Translate the structure into polished interfaces with strong visual hierarchy.",
  },
  {
    number: "04",
    title: "Systemize",
    description:
      "Create reusable components and design patterns so the product can scale consistently.",
  },
  {
    number: "05",
    title: "Handoff",
    description:
      "Prepare organized, developer-friendly designs with clear states and interaction details.",
  },
];

const problems = [
  "Inconsistent UI across screens",
  "A product growing without a design system",
  "Slow and messy design-to-development handoff",
  "Too many screens, patterns and decisions to manage",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">
          <div className="section-shell hero-inner">
            <div className="eyebrow hero-eyebrow">
              Independent product design studio · India + Global
            </div>

            <div className="hero-grid">
              <div className="hero-title-wrap">
                <h1>
                  Make the
                  <br />
                  <span>mess make</span>
                  <br />
                  sense<span className="hero-dot">.</span>
                </h1>

                <div className="hero-mark">↘</div>
              </div>

              <div className="hero-copy">
                <p>
                  Product UI, design systems and UX/UI audits for founders
                  and teams who have outgrown patchwork design.
                </p>

                <div className="hero-actions">
                  <a className="pill-button" href="/contact">
                    Start a conversation
                    <ArrowUpRight size={16} />
                  </a>

                  <a className="text-link" href="#work">
                    See the work
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-bottom">
              <span>UI · Systems · UX/UI</span>
              <span>Built to scale, not just look good.</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROBLEM / STATEMENT
        ===================================================== */}

        <section className="section-shell statement">
          <div>
            <div className="eyebrow">The problem</div>
          </div>

          <div>
            <p className="statement-large">
              Good products get messy when the interface grows faster than
              the system behind it.
            </p>

            <div className="problem-list">
              {problems.map((problem) => (
                <div key={problem}>
                  <span>{problem}</span>
                  <ArrowDownRight size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WORK
        ===================================================== */}

        <section id="work" className="section-shell work">
          <div className="section-heading">
            <div className="eyebrow">Selected work</div>

            <div>
              <h2 className="display-md">
                Designing through
                <br />
                complexity.
              </h2>
            </div>

            <div>
              <p>
                A selection of product work focused on clear interfaces,
                scalable patterns and practical design decisions.
              </p>
            </div>
          </div>

          <div className="work-grid">
            {/* SportSea placeholder */}
            <a href="#" className="work-card">
              <div className="work-card-top">
                <span>01 · Product UI</span>
                <span>Case study coming soon</span>
              </div>

              <div className="work-card-art">
                <div className="mock-window">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="mock-panel">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="work-card-bottom">
                <div>
                  <h3>SportSea</h3>
                  <p>
                    A multi-interface sports booking product designed across
                    user, arena admin and platform admin experiences.
                  </p>
                </div>

                <span className="round-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>

            {/* JuzzPay placeholder */}
            <a href="#" className="work-card work-card-dark">
              <div className="work-card-top">
                <span>02 · Dashboard UI</span>
                <span>Case study coming soon</span>
              </div>

              <div className="work-card-art">
                <div className="mock-window">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="mock-panel">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="work-card-bottom">
                <div>
                  <h3>JuzzPay</h3>
                  <p>
                    A finance dashboard concept focused on information
                    hierarchy, data visibility and scalable UI patterns.
                  </p>
                </div>

                <span className="round-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <span className="micro-note">
              More case studies will be added here later.
            </span>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="section-shell services">
          <div>
            <div className="eyebrow">What I do</div>
          </div>

          <div>
            <div className="service-list">
              {services.map((service) => (
                <div className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <span className="service-short">
                    Design
                  </span>

                  <ArrowUpRight
                    className="service-arrow"
                    size={20}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="process">
          <div className="process-inner">
            <div className="eyebrow">Process</div>

            <div className="process-intro">
              <h2>
                Simple
                <br />
                on purpose.
              </h2>

              <p>
                No bloated process. Just enough structure to understand the
                problem, make the right decisions and create something that
                can actually scale.
              </p>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <div className="process-item" key={item.number}>
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section className="about-section">
          <div className="section-shell about-section-grid">
            <div className="about-section-label">
              <div className="eyebrow">About the studio</div>
            </div>

            <div className="about-section-main">
              <div className="about-section-heading">
                <h2>
                  A small studio with a big bias toward clarity.
                </h2>
              </div>

              <div className="about-section-copy">
                <p>
                  Built around product UI, design systems and focused UX/UI
                  audits — with a practical approach to untangling complex
                  products.
                </p>

                <a className="text-link" href="/about">
                  More about the studio
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="contact">
          <div className="section-shell">
            <div className="contact-label">Have a messy product?</div>

            <p className="contact-pretitle">
              Let&apos;s make it make sense.
            </p>

            <h2>
              Let&apos;s build
              <br />
              <span>something clear.</span>
            </h2>

            <a className="contact-button" href="/contact">
              Start a conversation
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="section-shell footer">
        <span> Made with Love © 2026 Agency</span>

        <div>
          <a href="https://www.linkedin.com" target="_blank">
            LinkedIn
          </a>

          <a href="https://www.behance.net" target="_blank">
            Behance
          </a>

          <a href="https://www.instagram.com" target="_blank">
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}