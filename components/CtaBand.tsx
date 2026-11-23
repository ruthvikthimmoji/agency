import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  /** Plain part of the headline; use "\n" for a line break */
  lead?: string;
  /** Italic, blade-coloured end of the headline */
  accent?: string;
  body?: string;
  label?: string;
};

/** Closing call to action: dashed "cut here" line, big headline, one clear button. */
export default function CtaBand({
  lead = "Ready to make\nthe ",
  accent = "first cut?",
  body = "Book a fixed-price audit (3–5 days), or talk through a full design system.",
  label = "Start here",
}: Props) {
  return (
    <section className="cta-band shell" aria-labelledby="cta-title">
      <div className="cut-here" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
        </svg>
        <hr className="cut-line" />
      </div>

      <div className="cta-row">
        <div>
          <p className="label">{label}</p>
          <h2 id="cta-title" className="display pre-line cta-title">
            {lead}
            <em className="accent">{accent}</em>
          </h2>
        </div>

        <div className="cta-actions">
          {body && <p className="body">{body}</p>}
          <Link href="/contact" className="btn btn-primary">
            Start a project →
          </Link>
          <p className="label label-sm">
            or write to <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
