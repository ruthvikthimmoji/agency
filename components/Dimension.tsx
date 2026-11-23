/**
 * Dimension line |———————| that draws itself in on load,
 * with an optional measurement label underneath.
 */
export default function Dimension({ label }: { label?: string }) {
  return (
    <div className="dimension-wrap">
      <div className="dimension" aria-hidden="true">
        <span />
      </div>
      {label && <p className="label label-sm dimension-label">{label}</p>}
    </div>
  );
}
