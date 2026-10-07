import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

export default function ServiceRows() {
  return (
    <div className="service-list">
      {services.map((service) => (
        <a className="service-row" href="/services" key={service.number}>
          <span className="service-number">{service.number}</span>
          <div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <span className="service-short">{service.short}</span>
          <ArrowUpRight className="service-arrow" size={22} />
        </a>
      ))}
    </div>
  );
}
