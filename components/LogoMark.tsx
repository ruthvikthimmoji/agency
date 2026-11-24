/**
 * The Ruthvik's Studio mark: an R die-cut out of a sheet of paper,
 * with the sheet's corner snipped by the blade.
 * Uses currentColor, so it takes the colour of the text around it.
 * Master file: Figma › 05 · Logo.
 */
export default function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={`logo-mark ${className}`.trim()}
      width={size}
      height={size}
      viewBox="80 80 240 240"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M80 80H262L320 138V320H80Z M132 120H202A50 50 0 0 1 202 220H172V280H132Z M172 154H200A16 16 0 0 1 200 186H172Z M186 220H228L264 280H222Z"
      />
    </svg>
  );
}
