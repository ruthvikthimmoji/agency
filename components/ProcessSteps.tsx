import { process } from "@/data/site";
import Ruler from "./Ruler";

/**
 * variant="row"  — five steps laid along a ruler (home)
 * variant="list" — large stacked rows (process page)
 */
export default function ProcessSteps({ variant = "row" }: { variant?: "row" | "list" }) {
  if (variant === "list") {
    return (
      <ol className="process-list">
        {process.map((step) => (
          <li key={step.number} className="process-list-item">
            <span className="label label-blade">{step.number}</span>
            <h2 className="h2">{step.title}</h2>
            <div className="process-list-body">
              <p className="body">{step.description}</p>
              <span className="label label-sm">On the ruler · {step.at}</span>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="process-row-wrap">
      <Ruler count={20} className="process-ruler" />
      <ol className="process-row">
        {process.map((step) => (
          <li key={step.number} className="process-step">
            <span className="label label-sm label-blade">{step.at}</span>
            <h3 className="h4">{step.title}</h3>
            <p className="body">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
