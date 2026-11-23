import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WorkGrid from "@/components/WorkGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description: "Product UI and design system work — each piece shows the problem, the cut, and what shipped.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <SectionHeading
            level={1}
            number="Sheet B"
            eyebrow="The work"
            title={"Every piece,\nto scale."}
            accentWord="to scale."
            blade
            description="Product work across apps, platforms and systems. Each piece shows the problem, the cut, and what shipped."
          />
        </section>

        <section className="shell">
          <WorkGrid />
        </section>

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
