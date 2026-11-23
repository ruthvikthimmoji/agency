const ITEMS = [
  "Product UI",
  "Design systems",
  "UX / UI audits",
  "Information architecture",
  "Design tokens",
  "Developer handoff",
];

/** Slow, endless strip of what the studio does. Decorative — services are listed properly below. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee mat-deep" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="accent marquee-x">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
