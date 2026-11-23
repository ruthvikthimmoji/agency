import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

/**
 * variant="rows"  — detailed list (home + services page)
 * variant="cells" — compact grid cells sitting on the mat lines
 */
export default function ServiceRows({ variant = "rows" }: { variant?: "rows" | "cells" }) {
  if (variant === "cells") {
    return (
      <div className="service-cells cell-grid">
        {services.map((s) => (
          <Link key={s.slug} href={`/services#${s.slug}`} className="cell service-cell">
            <span className="label label-sm label-blade">{s.code}</span>
            <span className="service-cell-body">
              <span className="h4">{s.title}</span>
              <span className="body">{s.short}</span>
            </span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="service-list">
      {services.map((s) => (
        <Link key={s.slug} href={`/services#${s.slug}`} className="service-row">
          <span className="label label-blade service-code">{s.code}</span>

          <span className="service-main">
            <span className="h3 service-title">
              {s.title}
              {s.startHere && <span className="start-here">Start here</span>}
            </span>
            <span className="body">{s.short}</span>
          </span>

          <dl className="service-row-meta">
            <div>
              <dt className="label label-sm">Timeline</dt>
              <dd>{s.timeline}</dd>
            </div>
            <div>
              <dt className="label label-sm">Investment</dt>
              <dd>{s.priceInr === s.priceUsd ? s.priceInr : `${s.priceInr} / ${s.priceUsd.replace("From ", "")}`}</dd>
            </div>
          </dl>

          <ArrowUpRight className="service-arrow" size={24} strokeWidth={1.4} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
