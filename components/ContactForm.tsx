"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const NEEDS = ["UX/UI audit", "Product UI design", "Design system", "Not sure yet"];
const BUDGETS = ["Under ₹35K ($500)", "₹35K–1L ($500–1.5K)", "₹1L–2L ($1.5K–3K)", "₹2L+ ($3K+)", "Not sure yet"];
const TIMELINES = ["As soon as possible", "Within 1–2 months", "Just exploring"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [orderNo, setOrderNo] = useState<string | null>(null);

  const toggleNeed = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setOrderNo(String(Date.now()).slice(-4));
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function startOver() {
    setNeeds([]);
    setBudget(null);
    setTimeline(null);
    setOrderNo(null);
    setStatus("idle");
  }

  const sent = status === "success";

  return (
    <div className="work-order">
      <div className="work-order-main">
        {sent ? (
          <div className="form-success rise" role="status">
            <h2 className="h2">Order received.</h2>
            <p className="lead">
              Thanks — your brief is in. I&apos;ll read it properly and reply within 24 hours with a
              few questions and a time for a 30‑minute call.
            </p>
            <button type="button" className="btn btn-secondary" onClick={startOver}>
              Send another
            </button>
          </div>
        ) : (
          <form className="work-order-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name" className="label label-sm">01 · Your name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" />
              </div>
              <div className="field">
                <label htmlFor="email" className="label label-sm">02 · Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
              </div>
              <div className="field">
                <label htmlFor="company" className="label label-sm">03 · Company or product link</label>
                <input id="company" name="company" type="text" autoComplete="organization" placeholder="Optional" />
              </div>
            </div>

            <fieldset className="choice-group">
              <legend className="label label-sm">04 · What do you need? (pick any)</legend>
              <div className="chips">
                {NEEDS.map((n) => (
                  <button key={n} type="button" className="chip" aria-pressed={needs.includes(n)} onClick={() => toggleNeed(n)}>
                    {n}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="choice-group">
              <legend className="label label-sm">05 · Budget band</legend>
              <div className="chips">
                {BUDGETS.map((b) => (
                  <button key={b} type="button" className="chip" aria-pressed={budget === b} onClick={() => setBudget(b)}>
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="choice-group">
              <legend className="label label-sm">06 · Timeline</legend>
              <div className="chips">
                {TIMELINES.map((t) => (
                  <button key={t} type="button" className="chip" aria-pressed={timeline === t} onClick={() => setTimeline(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="message" className="label label-sm">07 · What&apos;s getting messy?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Screens that don't match, a product that has outgrown its design, handoff problems…"
              />
            </div>

            {/* Chip choices travel with the form as hidden fields */}
            <input type="hidden" name="need" value={needs.join(", ")} />
            <input type="hidden" name="budget" value={budget ?? ""} />
            <input type="hidden" name="timeline" value={timeline ?? ""} />
            <input type="hidden" name="_subject" value={`New project brief — ${site.name}`} />

            {/* Spam trap: real visitors never see or fill this */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />

            {status === "error" && (
              <p className="form-error" role="alert">
                Something went wrong. Please try again, or email me directly at{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send work order →"}
              </button>
              <span className="form-note">
                I only use your details to reply. <Link href="/privacy">Privacy</Link>
              </span>
            </div>
          </form>
        )}
      </div>

      <aside className="ticket paper" aria-label="Your work order summary">
        <p className="ticket-head label label-sm">
          <span>Work order</span>
          <span>No. {orderNo ? `${site.name.replace(".", "").slice(0, 3).toUpperCase()}‑${orderNo}` : "—"}</span>
        </p>
        <hr className="ticket-rule" />
        <dl>
          <div>
            <dt className="label label-sm">Services</dt>
            <dd>{needs.length ? needs.join(" + ") : "—"}</dd>
          </div>
          <div>
            <dt className="label label-sm">Budget</dt>
            <dd>{budget ?? "—"}</dd>
          </div>
          <div>
            <dt className="label label-sm">Start</dt>
            <dd>{timeline ?? "—"}</dd>
          </div>
        </dl>
        <hr className="ticket-rule" />
        <p className="ticket-note">
          Next: a 30‑minute call, then a written scope with a fixed price. No commitment until you
          approve it.
        </p>
        {sent && <p className="stamp">Received</p>}
      </aside>
    </div>
  );
}
