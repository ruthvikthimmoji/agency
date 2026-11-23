import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Fact = { label: string; value: string };

type Props = {
  number: string;
  title: string;
  type: string;
  description: string;
  href: string;
  tag?: string;
  /** Caption shown in the placeholder until a real image is added */
  visual?: string;
  /** Path to an image in /public, e.g. "/work/sportsea/cover.png" */
  image?: string | null;
  /** false = no case-study page yet: card isn't a link */
  published?: boolean;
  facts?: readonly Fact[];
  /** Wide, two-column card for the home page */
  feature?: boolean;
  /** Small resting rotation in degrees, so cards look placed by hand */
  tilt?: number;
  /** Kept so older pages still compile */
  tone?: "light" | "dark";
};

export default function WorkCard({
  number,
  title,
  type,
  description,
  href,
  tag,
  visual,
  image,
  published = true,
  facts = [],
  feature = false,
  tilt = 0,
}: Props) {
  const className = [
    "work-card paper",
    published && "paper-lift",
    feature && "work-card-feature",
  ]
    .filter(Boolean)
    .join(" ");

  const style = { "--tilt": `${tilt}deg` } as CSSProperties;

  const content: ReactNode = (
    <>
      <div className="work-card-visual paper-inset">
        {image ? (
          <Image
            src={image}
            alt={`${title} — ${visual ?? type}`}
            fill
            sizes={feature ? "(max-width: 900px) 100vw, 640px" : "(max-width: 900px) 100vw, 420px"}
          />
        ) : (
          <span>[{visual ?? "Cover visual"}]</span>
        )}
      </div>

      <div className="work-card-body">
        <p className="label label-sm">
          Piece {number} · {type}
          {tag ? ` · ${tag}` : ""}
        </p>
        <h3 className="h3 work-card-title">{title}</h3>
        <p className="work-card-desc">{description}</p>

        {facts.length > 0 && (
          <dl className="work-card-facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="label label-sm">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <span className="work-card-cta">
          {published ? "Read the case study →" : "Case study coming soon"}
        </span>
      </div>
    </>
  );

  return published ? (
    <Link href={href} className={className} style={style}>
      {content}
    </Link>
  ) : (
    <div className={className} style={style}>
      {content}
    </div>
  );
}
