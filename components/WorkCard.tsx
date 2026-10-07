import { ArrowUpRight } from "lucide-react";

type Props = {
  number: string;
  title: string;
  type: string;
  description: string;
  href: string;
  tone?: "light" | "dark";
};

export default function WorkCard({ number, title, type, description, href, tone = "light" }: Props) {
  return (
    <a href={href} className={`work-card work-card-${tone}`}>
      <div className="work-card-top">
        <span>{number}</span>
        <span>{type}</span>
      </div>
      <div className="work-card-art" aria-hidden="true">
        <div className="mock-window"><span /><span /><span /></div>
        <div className="mock-panel"><i /><i /><i /><i /></div>
      </div>
      <div className="work-card-bottom">
        <div><h3>{title}</h3><p>{description}</p></div>
        <span className="round-arrow"><ArrowUpRight size={18} /></span>
      </div>
    </a>
  );
}
