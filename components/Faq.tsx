"use client";

import { useId, useState } from "react";
import { faqItems } from "@/data/faq";

export default function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="faq-list" id="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const btnId = `${uid}-q-${index}`;
        const panelId = `${uid}-a-${index}`;

        return (
          <div key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <h3 className="faq-q">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="label label-sm label-blade">
                  Q.{String(index + 1).padStart(2, "0")}
                </span>
                <span className="faq-q-text">{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="faq-panel"
              inert={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
