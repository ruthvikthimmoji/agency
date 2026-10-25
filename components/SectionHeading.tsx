type Props = {
  number?: string;
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  accentWord,
  description,
  dark = true,
}: Props) {
  const renderHighlightedTitle = () => {
    if (!accentWord) return title;

    const parts = title.split(new RegExp(`(${accentWord})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === accentWord.toLowerCase() ? (
        <span key={index} className="text-[#F54F1B]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-[760px] mb-12 md:mb-16">
      {(number || eyebrow) && (
        <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs tracking-wider uppercase">
          {number && <span className="text-[#F54F1B]">[{number}]</span>}
          {eyebrow && (
            <span className={dark ? "text-[#7A819E]" : "text-[#1E223D]/70"}>
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h2
        className={`text-3xl md:text-5xl font-display font-extrabold tracking-[-0.02em] leading-[1.1] ${
          dark ? "text-[#E6D5B7]" : "text-[#1E223D]"
        }`}
      >
        {renderHighlightedTitle()}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? "text-[#7A819E]" : "text-[#1E223D]/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}