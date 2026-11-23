import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, socialLinks } from "@/data/site";
import Wordmark from "./Wordmark";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="site-footer mat-deep">
      <div className="shell site-footer-top">
        <div className="footer-brand">
          <Wordmark size="lg" />
          <p className="label">{site.tagline}</p>
        </div>

        <div className="footer-contact">
          <p className="label availability">
            <span className="dot blink" aria-hidden="true" />
            {site.availability}
          </p>
          <a href={`mailto:${site.email}`} className="footer-email">
            {site.email}
          </a>
          <p className="label label-sm">{site.responsePromise}</p>
        </div>
      </div>

      <div className="shell site-footer-bottom">
        <p className="label label-sm">
          © {year} {site.name} · Led by {site.founder} · {site.location}
        </p>

        <nav className="footer-links" aria-label="Footer">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy">Privacy</Link>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </nav>

        <p className="label label-sm">Self‑healing since day one.</p>
      </div>
    </footer>
  );
}
