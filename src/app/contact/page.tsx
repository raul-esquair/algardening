"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Sun,
  MapPin,
  Zap,
  ShieldCheck,
  CircleCheck,
  Leaf,
} from "lucide-react";

const serviceOptions = [
  "Lawn Maintenance",
  "Landscape Design & Installation",
  "Tree & Shrub Care",
  "Not Sure — Need Advice",
];

const contactInfo = [
  { icon: Phone, label: "(925) 664-3281", href: "tel:+19256643281" },
  {
    icon: Mail,
    label: "hello@algardening.com",
    href: "mailto:hello@algardening.com",
  },
  { icon: Sun, label: "Mon–Sat: 7am – 6pm" },
  { icon: MapPin, label: "Contra Costa & Alameda County" },
];

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: Leaf, label: "East Bay's Trusted Team" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "residential",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 px-6 py-16 text-center lg:px-20 lg:py-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Get in Touch
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-[17px]">
            Ready for a free estimate? Have a question? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Response Promise Bar */}
      <section className="bg-accent/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-6 py-4 lg:px-20">
          <Zap className="h-[18px] w-[18px] text-accent" />
          <p className="text-sm font-semibold text-neutral-dark">
            Most estimates scheduled within 48 hours · Free, no-obligation
            quotes
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1fr_380px] lg:px-20">
          {/* Form */}
          <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:p-9">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                  <CircleCheck className="h-8 w-8 text-success" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-neutral-dark">
                  Thank You!
                </h2>
                <p className="max-w-sm text-neutral-dark/60">
                  We&apos;ve received your request and will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-6 font-heading text-2xl font-bold text-neutral-dark">
                  Send Us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name + Email row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-neutral-dark">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark placeholder:text-neutral-dark/25 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-neutral-dark">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark placeholder:text-neutral-dark/25 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Phone + Service row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-neutral-dark">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="(925) 664-3281"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark placeholder:text-neutral-dark/25 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-neutral-dark">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-neutral-dark">
                      Property Type
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            propertyType: "residential",
                          })
                        }
                        className={`rounded-lg px-5 py-2.5 text-[13px] font-semibold transition-colors ${
                          formData.propertyType === "residential"
                            ? "bg-primary text-white"
                            : "border border-neutral-mid bg-neutral-light text-neutral-dark"
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            propertyType: "commercial",
                          })
                        }
                        className={`rounded-lg px-5 py-2.5 text-[13px] font-semibold transition-colors ${
                          formData.propertyType === "commercial"
                            ? "bg-primary text-white"
                            : "border border-neutral-mid bg-neutral-light text-neutral-dark"
                        }`}
                      >
                        Commercial
                      </button>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-semibold text-neutral-dark">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="rounded-lg border border-neutral-mid bg-neutral-light px-3.5 py-3 text-sm text-neutral-dark placeholder:text-neutral-dark/25 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="rounded-lg bg-error/10 px-4 py-3 text-sm font-medium text-error">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-lift h-[52px] w-full rounded-[10px] bg-accent text-base font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send My Request"}
                  </button>
                  <p className="text-center text-xs text-neutral-dark/40">
                    We&apos;ll never share your info. Expect a response within 24
                    hours.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Info Column */}
          <div className="flex flex-col gap-8">
            {/* Contact Info Card */}
            <div className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h3 className="font-heading text-xl font-bold text-neutral-dark">
                Contact Information
              </h3>
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <item.icon className="h-[18px] w-[18px] text-primary" />
                    <span className="text-[15px] font-medium text-neutral-dark">
                      {item.label}
                    </span>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Testimonial */}
            <div className="flex flex-col gap-3 rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="text-sm text-accent">★★★★★</div>
              <p className="text-[13px] italic leading-relaxed text-neutral-dark/50">
                &ldquo;From the first call to the finished job, everything was
                seamless. Couldn&apos;t be happier.&rdquo;
              </p>
              <span className="text-xs font-semibold text-neutral-dark">
                — Sarah M., Walnut Creek
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3.5 rounded-xl bg-primary/5 p-6">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-neutral-dark">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
