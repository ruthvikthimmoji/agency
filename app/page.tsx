import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import ServiceRows from "@/components/ServiceRows";
import { process, site, work } from "@/data/site";

const problems = [
  "Inconsistent UI",
  "Growing complexity",
  "No reusable system",
  "Messy handoff",
];

export default function Home() {
  return (
    <main id="top" className="page-enter">
      <Navbar />
      <section className="hero section-shell">
        <div className="eyebrow reveal">{site.hero.eyebrow}</div>
        <div className="hero-grid">
          <div className="hero-title-wrap reveal reveal-delay-1">
            <h1>
              {site.hero.title.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
          </div>
          <div className="hero-copy reveal reveal-delay-2">
            <p>{site.hero.body}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="/contact">
                Start a project <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#work">
                See selected work <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>UI · Systems · Audits</span>
          <span>01 — 03</span>
        </div>
      </section>

      <section className="statement section-shell">
        <div className="statement-mark">+</div>
        <div>
          <div className="eyebrow">The problem</div>
          <h2>
            Good products get messy when every new screen becomes a new
            decision.
          </h2>
          <div className="problem-grid">
            {problems.map((p) => (
              <div key={p}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section complexity">
        <div className="section-shell">
          <SectionHeading
            dark
            eyebrow="The differentiator"
            title="Untangling complexity."
            description="Not adding more screens. Not decorating the problem. Making the product easier to understand, use and extend."
          />
          <div className="complexity-grid">
            <div className="complexity-big">01</div>
            <div className="complexity-copy">
              <p>
                Every interface is a collection of decisions. The goal is to
                make those decisions feel obvious — and make the next decision
                easier.
              </p>
              <a className="text-link light-link" href="/process">
                How I work <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <SectionHeading
          eyebrow="Selected work"
          title="A few products, untangled."
          description="Case studies will be added once the full agency site is complete."
        />
        <div className="work-grid">
          {work.map((item) => (
            <WorkCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="section-shell services-section">
        <SectionHeading
          eyebrow="Services"
          title="Design that makes the product easier to build."
        />
        <ServiceRows />
      </section>

      <section className="process">
        <div className="process-inner">
          <SectionHeading dark eyebrow="Process" title="Simple on purpose." />

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
      <section className="about-section">
        <div className="section-shell">
          <div className="about-section-grid">
            <div className="about-section-label">
              <div className="eyebrow">About the studio</div>
            </div>

            <div className="about-section-main">
              <div className="about-section-heading">
                <h2>A small studio with a big bias toward clarity.</h2>
              </div>

              <div className="about-section-copy">
                <p>
                  Built around product UI, design systems and focused UX/UI
                  audits — with a practical approach to untangling complex
                  products.
                </p>

                <a className="text-link" href="/about">
                  More about the studio <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="section-shell cta-inner">
          <div className="eyebrow">Have a messy product?</div>
          <h2>
            Let’s make it
            <br />
            <em>make sense.</em>
          </h2>
          <a className="button button-light" href="/contact">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <footer className="footer section-shell">
        <span>© 2026 {site.name}</span>
        <div>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
