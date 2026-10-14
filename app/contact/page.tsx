import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { agency } from "@/data/agency";

export const metadata = {
  title: "Start a project",
  description:
    "Tell me what's getting messy. Send a short brief and get a reply within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="contact-page section-shell">
          <div className="section-index">01 / CONTACT</div>
          <div className="contact-page-content">
            <p>Have a product that&apos;s getting harder to manage?</p>
            <h1>Tell me what&apos;s getting messy.</h1>
            <p className="contact-intro">
              Send a short brief. I read every one personally and reply within
              two business days.
            </p>

            <ContactForm />

            <p className="contact-fallback">
              Prefer email?{" "}
              <a href={`mailto:${agency.email}`}>{agency.email}</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}