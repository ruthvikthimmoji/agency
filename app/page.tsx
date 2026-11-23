import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfter from "@/components/BeforeAfter";
import WorkCard from "@/components/WorkCard";
import ServiceRows from "@/components/ServiceRows";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { work } from "@/data/site";

export default function Home() {
  const [feature, ...rest] = work;

  return (
    <>
      <Navbar />

      <main id="main">
        <HomeHero />
        <Marquee />

        {/* 01 — The bottleneck: rough cut vs clean cut */}
        <section className="section shell" id="bottleneck">
          <SectionHeading
            number="01"
            eyebrow="The bottleneck"
            title="Good products degrade when interfaces outgrow their systems."
            accentWord="outgrow"
            description="Fast-moving teams patch components on the fly. Within months, UI debt slows every release and chips away at credibility."
          />
          <BeforeAfter />
          <p className="label label-sm ba-hint">← Drag the blade to compare the rough cut with the clean cut →</p>
        </section>

        {/* 02 — Selected work */}
        <section className="section shell" id="work">
          <div className="heading-row">
            <SectionHeading
              number="02"
              eyebrow="Proof of craft"
              title="Systems built for real complexity."
              accentWord="real complexity."
              description="Products with multi-role permissions, dense data and the edge cases that come with them."
            />
            <Link href="/work" className="text-link">
              All work →
            </Link>
          </div>

          <div className="work-stack">
            <WorkCard
              feature
              number={feature.number}
              title={feature.title}
              type={feature.type}
              tag={feature.tag}
              description={feature.description}
              href={feature.href}
              visual={feature.visual}
              image={feature.image}
              published={feature.published}
              facts={feature.facts}
            />
            <div className="work-grid">
              {rest.map((p, i) => (
                <WorkCard
                  key={p.id}
                  number={p.number}
                  title={p.title}
                  type={p.type}
                  tag={p.tag}
                  description={p.description}
                  href={p.href}
                  visual={p.visual}
                  image={p.image}
                  published={p.published}
                  tilt={i % 2 ? -0.3 : 0.4}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Services */}
        <section className="section shell" id="services">
          <SectionHeading
            number="03"
            eyebrow="Transparent scope"
            title="Fixed anchors. No surprise billing."
            accentWord="No surprise billing."
            description="Know the turnaround, deliverables and cost up front, before anything is signed."
          />
          <ServiceRows />
        </section>

        {/* 04 — Process */}
        <section className="section shell" id="process">
          <SectionHeading
            number="04"
            eyebrow="Workflow"
            title="Measure twice. Cut once."
            accentWord="Cut once."
            description="A five-step path from audit to handoff — no committee workshops, just clear milestones."
          />
          <ProcessSteps />
        </section>

        {/* 05 — FAQ */}
        <section className="section shell" id="faq-section">
          <div className="split">
            <SectionHeading number="05" eyebrow="Clarity first" title="Questions, answered." accentWord="answered." />
            <div>
              <Faq limit={5} />
              <Link href="/services#faq" className="text-link faq-more">
                All questions →
              </Link>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
