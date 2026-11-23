"use client";

import { useState, type ChangeEvent } from "react";

const ROUGH = [
  { label: "Inconsistent styles", value: "Buttons rebuilt screen by screen" },
  { label: "Handoff friction", value: "Developers guessing spacing" },
  { label: "Maintenance", value: "Every new screen starts from scratch" },
];

const CLEAN = [
  { label: "Tokens", value: "One linked colour and type scale" },
  { label: "Handoff", value: "Documented states and specs" },
  { label: "Consistency", value: "Shared components across screens" },
];

/**
 * Rough cut vs clean cut. A native range input sits over the whole panel,
 * so it works with mouse, touch and keyboard (arrow keys) out of the box.
 */
export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div className="ba paper">
      {/* After — clean cut (underneath) */}
      <div className="ba-layer ba-after" aria-hidden="true">
        <p className="ba-head label label-sm">
          <span>Clean cut — after</span>
          <span>Ready to build</span>
        </p>
        <div className="ba-cards">
          {CLEAN.map((c) => (
            <div key={c.label} className="ba-card">
              <span className="label label-sm">{c.label}</span>
              <span className="ba-value">{c.value}</span>
            </div>
          ))}
        </div>
        <p className="ba-foot label label-sm">Aligned to one grid · zero guesswork</p>
      </div>

      {/* Before — rough cut (on top, clipped by the slider) */}
      <div
        className="ba-layer ba-before"
        aria-hidden="true"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <p className="ba-head label label-sm">
          <span>Rough cut — before</span>
          <span>High friction</span>
        </p>
        <div className="ba-cards">
          {ROUGH.map((c, i) => (
            <div key={c.label} className={`ba-card ba-card-rough ba-card-rough-${i}`}>
              <span className="label label-sm">{c.label}</span>
              <span className="ba-value">{c.value}</span>
            </div>
          ))}
        </div>
        <p className="ba-foot label label-sm">Patched as it grew · edge states missing</p>
      </div>

      <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="ba-knob">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPos(Number(e.target.value))}
        className="ba-range"
        aria-label="Compare the rough cut (before) with the clean cut (after)"
        aria-valuetext={`${pos}% before, ${100 - pos}% after`}
      />
    </div>
  );
}
