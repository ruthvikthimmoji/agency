/**
 * Ruler strip — 80 / 40 / 8px ticks, numbered in "cm".
 * Decorative only, so it's hidden from screen readers.
 */
export default function Ruler({
  count = 24,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`ruler ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="ruler-num" style={{ left: i * 80 + 4 }}>
          {i}
        </span>
      ))}
    </div>
  );
}
