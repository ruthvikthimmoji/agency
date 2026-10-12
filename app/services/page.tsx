import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { agency } from "@/data/agency";

export const metadata = {
  // The layout adds " | ROUGH." automatically
  title: "Services — Product UI, Design Systems, UX/UI Audit",
  description:
    "Three focused services: product UI design, design systems and UX/UI audits for founders whose product is getting harder to manage.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="inner-hero section-shell">
          <div className="section-index">01 / SERVICES</div>
          <div className="inner-hero-grid">
            <h1>Design work that makes complexity easier to manage.</h1>
            <p>{agency.positioning}</p>
          </div>
        </section>

        <section className="service-detail-list section-shell">
          {agency.services.map((service) => (
            <article className="service-detail" key={service.number}>
              <div className="service-detail-top">
                <span className="section-index">{service.number}</span>
                <span className="service-detail-kicker">{service.title}</span>
              </div>

              <div className="service-detail-grid">
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-detail-short">{service.short}</p>
                </div>
                <div>
                  <p className="service-detail-description">
                    {service.description}
                  </p>
                  <div className="deliverables">
                    {service.deliverables.map((item) => (
                      <div key={item}>
                        <Check size={15} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="service-boundary">
          <div className="section-shell service-boundary-inner">
            <div className="section-index">02 / FOCUS</div>
            <div>
              <h2>Deliberately narrow.</h2>
              <p>
                I don&apos;t offer development, formal UX research, usability
                testing or product strategy consulting. Doing fewer things
                properly is the point.
              </p>
            </div>
          </div>
        </section>

        <section className="inner-cta section-shell">
          <p className="section-index">03 / START</p>
          <h2>Not sure what you need?</h2>
          <p>
            Send over the product, problem or current state. I can start from
            there.
          </p>
          <a className="contact-button" href="/contact">
            Start a project <ArrowUpRight size={19} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}