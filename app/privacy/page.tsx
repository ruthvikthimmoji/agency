import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { agency } from "@/data/agency";

export const metadata = {
  title: "Privacy",
  description:
    "What ROUGH. collects when you send a brief, why, and who can see it.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="inner-hero section-shell">
          <div className="section-index">01 / PRIVACY</div>
          <div className="inner-hero-grid">
            <h1>Privacy.</h1>
            <p>What I collect, why, and who can see it.</p>
          </div>
        </section>

        <section className="about-page section-shell legal">
          <div className="section-index">02 / DETAILS</div>
          <div className="about-page-copy">
            <p className="legal-updated">Last updated: 14 October 2026</p>

            <h2>Who I am</h2>
            <p>
              ROUGH. is an independent product design studio run by Ruthvik P
              Thimmoji in Bengaluru, India. You can reach me at{" "}
              <a href={`mailto:${agency.email}`}>{agency.email}</a>.
            </p>

            <h2>What I collect</h2>
            <p>
              Only what you type into the project brief form on the Contact
              page:
            </p>
            <ul>
              <li>your name and email address</li>
              <li>a company or product link, if you add one</li>
              <li>your message about what&apos;s getting messy</li>
              <li>what you need, your budget band and your timeline</li>
            </ul>

            <h2>Why I collect it</h2>
            <p>
              To reply to your brief and to work out whether and how I can
              help. I don&apos;t sell your details, add you to a marketing
              list, or use them for advertising.
            </p>

            <h2>Who else handles it</h2>
            <p>
              The form is run by Formspree, a third-party form service. Your
              submission passes through its systems and is forwarded to my
              email inbox, so Formspree&apos;s own privacy policy also applies
              to that part. Emails you send me directly sit in my email
              account.
            </p>

            <h2>How long I keep it</h2>
            <p>
              I keep enquiries for as long as I need them to reply and follow
              up. If a conversation doesn&apos;t lead to a project, I&apos;ll
              delete your details on request.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              At the time of writing, this site doesn&apos;t use analytics or
              advertising trackers. If that changes, I&apos;ll update this
              page before it does.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask me what I hold about you, ask me to correct it, or
              ask me to delete it. Email me at{" "}
              <a href={`mailto:${agency.email}`}>{agency.email}</a>.
            </p>

            <h2>Changes</h2>
            <p>
              If this page changes, the date at the top will change with it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}