import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A five-step process — align, structure, design, systemise, hand off — built to reduce ambiguity and keep product decisions visible.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <SectionHeading
            level={1}
            number="Sheet P"
            eyebrow="Process"
            title={"Structure first.\nPixels second."}
            accentWord="Pixels second."
            blade
            description="A simple process designed to reduce ambiguity, keep decisions visible and move the product forward."
          />
        </section>

        <section className="shell">
          <ProcessSteps variant="list" />
        </section>

        <CtaBand
          lead={"Have a\n"}
          accent="messy product?"
          body="Bring the current state. I'll work from there."
          label="Next"
        />
      </main>

      <Footer />
    </>
  );
}
