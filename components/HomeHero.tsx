"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { site } from "@/data/site";
import Dimension from "./Dimension";

/**
 * Home hero on the cutting mat:
 * - a yellow "blade" line cuts across on load
 * - 45° / 60° angle guides like a real mat
 * - a measuring crosshair follows the mouse (not shown on touch)
 * The crosshair moves via CSS variables, so React doesn't re-render on every move.
 */
export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const readoutRef = useRef<HTMLParagraphElement>(null);

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--cx", `${x}px`);
    ref.current.style.setProperty("--cy", `${y}px`);
    ref.current.dataset.crosshair = "on";
    if (readoutRef.current) {
      readoutRef.current.textContent = `X ${(x / 80).toFixed(1)} · Y ${(y / 80).toFixed(1)} cm`;
    }
  }

  function handleLeave() {
    if (ref.current) ref.current.dataset.crosshair = "off";
  }

  return (
    <section
      ref={ref}
      className="hero"
      data-crosshair="off"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <svg className="hero-guides" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="600" x2="600" y2="0" className="guide" />
        <line x1="0" y1="600" x2="346" y2="0" className="guide guide-faint" />
        <path d="M 0 470 A 130 130 0 0 1 92 508" className="guide guide-arc" />
        <line x1="-20" y1="520" x2="1020" y2="170" className="hero-cut" />
      </svg>

      <div className="crosshair" aria-hidden="true">
        <span className="crosshair-v" />
        <span className="crosshair-h" />
        <p ref={readoutRef} className="crosshair-readout" />
      </div>

      <div className="shell hero-inner">
        <p className="label rise">{site.hero.sheet}</p>

        <h1 className="display pre-line rise delay-1 hero-title">
          {site.hero.title.lead}
          <em className="accent">{site.hero.title.accent}</em>
        </h1>

        <div className="hero-measure rise delay-2">
          <Dimension label={site.hero.measure} />
        </div>

        <div className="hero-row">
          <p className="lead rise delay-3">{site.hero.body}</p>
          <div className="hero-actions rise delay-4">
            <Link href="/contact" className="btn btn-primary">
              Start with an audit
            </Link>
            <Link href="/work" className="btn btn-secondary">
              View the work
            </Link>
          </div>
        </div>

        <div className="hero-foot">
          <span className="label label-sm">45° · 60° · Cut line 18.4°</span>
          <span className="label label-sm">Fixed-price audits from ₹18,000 / $300</span>
        </div>
      </div>
    </section>
  );
}
