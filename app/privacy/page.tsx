import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `What ${site.name} collects when you send a brief, why, and who can see it.`,
};

export default function PrivacyPage() {
  const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

  return (
    <>
      <Navbar />

      <main id="main">
        <section className="page-hero shell">
          <SectionHeading
            level={1}
            number="Sheet L"
            eyebrow="Privacy"
            title="Privacy."
            description="What I collect, why, and who can see it."
          />
        </section>

        <section className="shell section-last">
          <div className="split">
            <p className="label">Last updated: 22 November 2026</p>

            <div className="prose legal">
              <h2 className="h4">Who I am</h2>
              <p>
                {site.name} is an independent product design studio run by {site.founder} in {site.location}.
                You can reach me at {mail}.
              </p>

              <h2 className="h4">What I collect</h2>
              <p>Only what you enter in the project brief form on the Contact page:</p>
              <ul>
                <li>your name and email address</li>
                <li>a company or product link, if you add one</li>
                <li>your message about what&apos;s getting messy</li>
                <li>what you need, your budget band and your timeline</li>
              </ul>

              <h2 className="h4">Why I collect it</h2>
              <p>
                To reply to your brief and to work out whether and how I can help. I don&apos;t sell your
                details, add you to a marketing list, or use them for advertising.
              </p>

              <h2 className="h4">Who else handles it</h2>
              <p>
                The form is run by Formspree, a third-party form service. Your submission passes through its
                systems and is forwarded to my email inbox, so Formspree&apos;s own privacy policy also applies to
                that part. Emails you send me directly sit in my email account.
              </p>

              <h2 className="h4">How long I keep it</h2>
              <p>
                I keep enquiries for as long as I need them to reply and follow up. If a conversation
                doesn&apos;t lead to a project, I&apos;ll delete your details on request.
              </p>

              <h2 className="h4">Cookies and analytics</h2>
              <p>
                At the time of writing, this site doesn&apos;t use analytics or advertising trackers. If that
                changes, I&apos;ll update this page before it does.
              </p>

              <h2 className="h4">Your choices</h2>
              <p>
                You can ask me what I hold about you, ask me to correct it, or ask me to delete it. Email me at{" "}
                {mail}.
              </p>

              <h2 className="h4">Changes</h2>
              <p>If this page changes, the date at the top will change with it.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
