"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface LandingPageFormProps {
  defaultService: string;
  buttonText: string;
  successMessage: string;
}

const serviceOptions = [
  "Yard Cleanup",
  "Lawn Maintenance",
  "Landscape Design",
  "Tree & Shrub Care",
  "Fire-Safe / Defensible Space",
  "Not Sure — Need Advice",
];

export default function LandingPageForm({
  defaultService,
  buttonText,
  successMessage,
}: LandingPageFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: defaultService,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: "landing-page-lead@algardening.com",
          phone: form.phone,
          service: form.service,
          message: `[Landing page lead] Service: ${form.service}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      // Fire Google Ads conversion event
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-703328787/submit_lead_form",
        });
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Call us directly at (925) 664-3281.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-7 w-7 text-success" />
        </div>
        <h3 className="text-lg font-bold text-neutral-dark">You&apos;re all set.</h3>
        <p className="text-sm leading-relaxed text-neutral-dark/60">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lp-name" className="text-[13px] font-semibold text-neutral-dark">
          Your Name
        </label>
        <input
          id="lp-name"
          type="text"
          required
          placeholder="John Smith"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lp-phone" className="text-[13px] font-semibold text-neutral-dark">
          Phone Number
        </label>
        <input
          id="lp-phone"
          type="tel"
          required
          placeholder="(925) 555-1234"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="lp-service" className="text-[13px] font-semibold text-neutral-dark">
          What Do You Need?
        </label>
        <select
          id="lp-service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="rounded-lg bg-error/10 px-4 py-2.5 text-sm font-medium text-error">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-lift h-[52px] w-full rounded-[10px] bg-accent text-base font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
      >
        {loading ? "Sending..." : buttonText}
      </button>

      <p className="text-center text-[11px] text-neutral-dark/40">
        We respond within 2 hours. No spam, ever.
      </p>
    </form>
  );
}
