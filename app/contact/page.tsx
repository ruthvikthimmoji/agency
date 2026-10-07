import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { agency } from "@/data/agency";

export const metadata = { title: `Contact — ${agency.name}` };

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="contact-page section-shell">
        <div className="section-index">01 / CONTACT</div>
        <div className="contact-page-content">
          <p>Have a product that&apos;s getting harder to manage?</p>
          <h1>Let&apos;s make the product make sense.</h1>
          <a className="contact-button" href="mailto:hello@example.com">
            Start a conversation <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
