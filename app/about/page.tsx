import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${site.founder}`,
  description: `${site.name} is an independent product design studio run by ${site.founder} in ${site.location}, working with founders worldwide.`,
};

// Add a photo to /public (e.g. /about/portrait.jpg) and put the path here.
const PORTRAIT: string | null = null;

const RULES = [
  { code: "Rule 01", title: "Structure first.", body: "Flows and hierarchy are agreed before anything gets polished, so the polish never has to be redone." },
  { code: "Rule 02", title: "Built for handoff.", body: "Organised files with documented components, states and specs your developers can build from." },
  { code: "Rule 03", title: "Deliberately narrow.", body: "Product UI, design systems and audits. Doing fewer things properly is the point." },
  { code: "Rule 04", title: "Direct access.", body: "You talk to the designer making the decisions — no account managers, no juniors in between." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell about-hero">
          <div>
            <SectionHeading
              level={1}
              number="Sheet D"
              eyebrow="The studio"
              title="A small studio with a big bias toward clarity."
              accentWord="clarity."
              blade
            />
            <p className="lead rise delay-2">{site.positioning}</p>
          </div>

          <figure className="polaroid paper">
            <div className="polaroid-photo paper-inset">
              {PORTRAIT ? (
                <Image src={PORTRAIT} alt={`Portrait of ${site.founder}`} fill sizes="440px" />
              ) : (
                <span>[Portrait — natural light, at your desk]</span>
              )}
            </div>
            <figcaption className="label label-sm">
              <span>{site.founder}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
        </section>

        <section className="section shell">
          <div className="split">
            <p className="label">01 — The approach</p>
            <div className="prose">
              <p className="h2">
                Untangling <em>complexity.</em>
              </p>
              <p>
                Good product design is not about adding more decoration. It is about making decisions easier
                to understand, repeat and maintain.
              </p>
              <p>
                I stay deliberately focused on product UI, design systems and UX/UI audits for founders and
                small product teams dealing with growing complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <SectionHeading number="02" eyebrow="How I work" title="Four rules on the wall." accentWord="on the wall." />
          <div className="rules cell-grid">
            {RULES.map((r) => (
              <div key={r.code} className="cell rule">
                <span className="label label-sm label-blade">{r.code}</span>
                <div>
                  <h3 className="h4">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="split">
            <p className="label">03 — On the desk</p>
            <dl className="facts">
              <div>
                <dt className="label label-sm">Based in</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt className="label label-sm">Works with</dt>
                <dd>Founders in India and globally</dd>
              </div>
              <div>
                <dt className="label label-sm">Focus</dt>
                <dd>Product UI · Design systems · Audits</dd>
              </div>
              <div>
                <dt className="label label-sm">Tools</dt>
                <dd>Figma · FigJam</dd>
              </div>
            </dl>
          </div>
        </section>

        <CtaBand lead={"Pull up\n"} accent="a chair." body="Bring the current state of your product. I'll work from there." />
      </main>

      <Footer />
    </>
  );
}
