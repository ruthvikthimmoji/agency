type Props = {
  /** Sheet code shown before the eyebrow, e.g. "B1" */
  number?: string;
  /** Mono label above the title, e.g. "Selected work" */
  eyebrow?: string;
  /** Use "\n" for a line break */
  title: string;
  /** Word(s) in the title to set in italic */
  accentWord?: string;
  /** Paint the italic accent in the blade yellow (use on page heroes) */
  blade?: boolean;
  description?: string;
  /** 1 renders an <h1> (page heroes), 2 an <h2> (sections) */
  level?: 1 | 2;
  /** Kept so older pages still compile — the mat has one theme */
  dark?: boolean;
  className?: string;
};

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function SectionHeading({
  number,
  eyebrow,
  title,
  accentWord,
  blade = false,
  description,
  level = 2,
  className = "",
}: Props) {
  const Tag = level === 1 ? "h1" : "h2";
  const sizeClass = level === 1 ? "h1" : "h2";

  const parts = accentWord
    ? title.split(new RegExp(`(${escapeRegExp(accentWord)})`, "i"))
    : [title];

  const label = [number, eyebrow].filter(Boolean).join(" — ");

  return (
    <div className={`section-heading ${className}`.trim()}>
      {label && <p className="label rise">{label}</p>}

      <Tag className={`${sizeClass} pre-line rise delay-1`}>
        {parts.map((part, i) =>
          accentWord && part.toLowerCase() === accentWord.toLowerCase() ? (
            <em key={i} className={blade ? "accent" : undefined}>
              {part}
            </em>
          ) : (
            part
          ),
        )}
      </Tag>

      {description && <p className="lead rise delay-2">{description}</p>}
    </div>
  );
}
