"use client";

import { useState } from "react";
import { work, workFilters, type WorkKind } from "@/data/site";
import WorkCard from "./WorkCard";

const TILTS = [0, 0.4, -0.3, 0.2, -0.4, 0.3];

/** Filter chips + the grid of paper cards on /work */
export default function WorkGrid() {
  const [filter, setFilter] = useState<"all" | WorkKind>("all");
  const shown = filter === "all" ? work : work.filter((p) => p.kinds.includes(filter));

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        <div className="chips">
          {workFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="label filter-count" aria-live="polite">
          {String(shown.length).padStart(2, "0")} {shown.length === 1 ? "piece" : "pieces"} on the mat
        </p>
      </div>

      <div className="work-grid work-grid-page">
        {shown.map((p, i) => (
          <WorkCard
            key={p.id}
            number={p.number}
            title={p.title}
            type={p.type}
            tag={p.tag}
            description={p.description}
            href={p.href}
            visual={p.visual}
            image={p.image}
            published={p.published}
            tilt={TILTS[i % TILTS.length]}
          />
        ))}
      </div>
    </>
  );
}
