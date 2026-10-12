import { agency, socialLinks } from "@/data/agency";

export default function Footer() {
  return (
    <footer className="section-shell footer">
      <span>
        Made with Love © 2026 {agency.name}
      </span>

      <div>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}