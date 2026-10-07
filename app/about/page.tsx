import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { agency } from "@/data/agency";

export const metadata = { title: `About — ${agency.name}` };

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="inner-hero section-shell">
        <div className="section-index">01 / ABOUT</div>
        <div className="inner-hero-grid">
          <h1>A small studio with a big bias toward clarity.</h1>
          <p>{agency.positioning}</p>
        </div>
      </section>
      <section className="about-page section-shell">
        <div className="section-index">02 / THE APPROACH</div>
        <div className="about-page-copy">
          <p className="about-lead">{agency.differentiator}</p>
          <p>Good product design is not about adding more decoration. It is about making decisions easier to understand, repeat and maintain.</p>
          <p>The studio stays deliberately focused on product UI, design systems and UX/UI audits for founders and small product teams dealing with growing complexity.</p>
          <a className="text-link" href="/contact">Work together <ArrowUpRight size={17} /></a>
        </div>
      </section>
    </main>
  );
}
