import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: `Tell me what's getting messy. Send a short brief — ${site.responsePromise.toLowerCase()}.`,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <SectionHeading
            level={1}
            number="Sheet E"
            eyebrow="Work order"
            title={"Tell me what's\ngetting messy."}
            accentWord="messy."
            blade
            description={`Send a short brief. I read every one personally. ${site.responsePromise}.`}
          />
        </section>

        <section className="shell section-last">
          <ContactForm />
          <p className="label contact-fallback">
            Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
