import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { agency } from "@/data/agency";

export const metadata = {
  title: `Services — ${agency.name}`,
  description: "Product UI design, design systems and UX/UI audits.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

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
              The studio is focused on product UI, systems and audits.
              Development, formal UX research, usability testing and product
              strategy consulting are intentionally outside the service list.
            </p>
          </div>
        </div>
      </section>

      <section className="inner-cta section-shell">
        <p className="section-index">03 / START</p>
        <h2>Not sure what you need?</h2>
        <p>
          Send over the product, problem or current state. We can start from
          there.
        </p>
        <a className="contact-button" href="mailto:hello@example.com">
          Start a conversation <ArrowUpRight size={19} />
        </a>
      </section>
    </main>
  );
}
