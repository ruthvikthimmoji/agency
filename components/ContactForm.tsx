"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { agency } from "@/data/agency";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(agency.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h2>Got it.</h2>
        <p>
          Thanks, your brief is in. I&apos;ll reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="company">Company or product link (optional)</label>
        <input id="company" name="company" type="text" />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="message">What&apos;s getting messy?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Screens that don't match, a product that has outgrown its design, handoff problems…"
        />
      </div>

      <div className="form-field">
        <label htmlFor="need">What do you need?</label>
        <select id="need" name="need" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>UX/UI audit</option>
          <option>Product UI design</option>
          <option>Design system</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="budget">Budget band</label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Under ₹35K ($500)</option>
          <option>₹35K–1L ($500–1.5K)</option>
          <option>₹1L–2L ($1.5K–3K)</option>
          <option>₹2L+ ($3K+)</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>As soon as possible</option>
          <option>Within 1–2 months</option>
          <option>Just exploring</option>
        </select>
      </div>

      {/* Spam trap: real visitors never see or fill this */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="form-honeypot"
      />
      <input type="hidden" name="_subject" value="New project brief — ROUGH." />

      {status === "error" && (
        <p className="form-error form-field-wide" role="alert">
          Something went wrong. Please try again, or email me directly at{" "}
          <a href={`mailto:${agency.email}`}>{agency.email}</a>.
        </p>
      )}

      <div className="form-actions">
        <button
          type="submit"
          className="contact-button"
          disabled={status === "sending"}
        >
          <span>{status === "sending" ? "Sending…" : "Send brief"}</span>
          <ArrowUpRight size={19} />
        </button>
        <span className="form-note">
          I only use your details to reply. <a href="/privacy">Privacy</a>
        </span>
      </div>
    </form>
  );
}
