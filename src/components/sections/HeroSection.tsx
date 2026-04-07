"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  "Lawn Maintenance",
  "Landscape Design & Installation",
  "Tree & Shrub Care",
  "Not Sure — Need Advice",
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up Resend in Phase 4
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Beautiful landscaped backyard"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B3D2A]/90 via-[#1B3D2A]/75 to-[#1B3D2A]/60" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20 lg:py-0 lg:min-h-[680px]">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex max-w-xl flex-col gap-6 text-center lg:text-left"
        >
          <h1 className="font-heading text-4xl font-bold leading-[1.2] tracking-tight text-white lg:text-[48px]">
            Your East Bay Landscaping Team — Where Every Yard Feels Like Home
          </h1>
          <p className="text-base leading-relaxed text-white/75 lg:text-[17px]">
            Lawn care, landscape design, and tree services for homes and
            businesses across Contra Costa and Alameda County.
          </p>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[420px] rounded-2xl bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] lg:p-9"
        >
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-neutral-dark">
            Get Your Free Estimate
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-neutral-dark">
                Full Name
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
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(925) 555-0123"
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
                Email
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
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-neutral-dark">
                Service Interested In
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                required
                className="h-11 rounded-lg border border-neutral-mid bg-neutral-light px-3.5 text-sm text-neutral-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn-lift mt-1 h-[52px] w-full rounded-[10px] bg-accent text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Free Estimate
            </button>
            <p className="text-center text-xs text-neutral-dark/40">
              We&apos;ll never share your info. Expect a response within 24
              hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
