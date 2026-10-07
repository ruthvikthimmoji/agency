type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, dark = false }: Props) {
  return (
    <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
