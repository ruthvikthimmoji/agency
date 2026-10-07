import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { agency } from "@/data/agency";

const steps = [
  ["01", "Align", "Understand the product, problem, audience and constraints."],
  ["02", "Structure", "Map the experience and remove unnecessary complexity."],
  ["03", "Design", "Create the visual language and high-fidelity interface."],
  ["04", "Systemize", "Turn repeated decisions into reusable components and patterns."],
  ["05", "Handoff", "Deliver organized files and decisions the team can actually use."],
] as const;

export const metadata = { title: `Process — ${agency.name}` };

export default function ProcessPage() {
  return (
    <main>
      <Navbar />
      <section className="inner-hero section-shell">
        <div className="section-index">01 / PROCESS</div>
        <div className="inner-hero-grid">
          <h1>Structure first. Pixels second.</h1>
          <p>A simple process designed to reduce ambiguity, keep decisions visible and move the product forward.</p>
        </div>
      </section>
      <section className="process-page-list section-shell">
        {steps.map(([number, title, description]) => (
          <article className="process-page-item" key={number}>
            <span className="section-index">{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
      <section className="inner-cta section-shell">
        <p className="section-index">02 / NEXT</p>
        <h2>Have a messy product?</h2>
        <p>Bring the current state. We&apos;ll work from there.</p>
        <a className="contact-button" href="mailto:hello@example.com">Start a conversation <ArrowUpRight size={19} /></a>
      </section>
    </main>
  );
}
