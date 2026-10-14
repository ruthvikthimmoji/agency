import { faqItems } from "@/data/faq";

export default function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="section-shell faq" id="faq">
      <div>
        <div className="eyebrow">Questions</div>
      </div>

      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}