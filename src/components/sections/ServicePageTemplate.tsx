"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CircleCheck,
  Star,
  Check,
  ChevronDown,
} from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";
import type { ServiceData } from "@/lib/services-data";
import { getRelatedServices } from "@/lib/services-data";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: Star, label: "5-Star Rated Service" },
];

const steps = [
  {
    num: "1",
    title: "Schedule Your Free Estimate",
    desc: "We visit your property and assess your needs.",
  },
  {
    num: "2",
    title: "Get Your Custom Plan",
    desc: "We recommend the right approach for your yard.",
  },
  {
    num: "3",
    title: "Enjoy Your Space",
    desc: "We get to work, you relax.",
  },
];

export default function ServicePageTemplate({
  service,
}: {
  service: ServiceData;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const related = getRelatedServices(service.slug);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-20 text-center lg:px-20 lg:py-24"
        >
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent">
            {service.badge}
          </span>
          <h1 className="max-w-2xl font-heading text-3xl font-bold text-white lg:text-[44px] lg:leading-[1.2]">
            {service.headline}
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            {service.subheadline}
          </p>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Your Free Estimate
            </Link>
            <span className="text-sm text-white/50">
              or call{" "}
              <a
                href="tel:+19255550123"
                className="text-white/70 hover:text-white"
              >
                (925) 555-0123
              </a>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-8 px-6 py-4 lg:gap-10 lg:px-20">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <item.icon className="h-4 w-4 text-primary" />
              <span className="text-[13px] font-semibold text-neutral-dark">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-20">
          <SlideIn direction="left">
          <div className="flex flex-col gap-5">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              What&apos;s Included
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Everything Your Yard Needs
            </h2>
            <p className="leading-relaxed text-neutral-dark/60">
              {service.description}
            </p>
            <ul className="mt-2 flex flex-col gap-3.5">
              {service.checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check className="h-[18px] w-[18px] text-primary" />
                  <span className="text-sm font-medium text-neutral-dark">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
          <div
            className="relative h-[300px] overflow-hidden rounded-2xl lg:h-full lg:min-h-[400px]"
          >
            <Image
              src={service.image}
              alt={service.badge}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row lg:px-20">
          <p className="text-base font-semibold text-neutral-dark">
            Like what you see? Let&apos;s talk about your yard.
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              How It Works
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Simple as 1, 2, 3
            </h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem key={step.num}>
              <div
                className="card-lift flex flex-col items-center gap-3.5 rounded-xl bg-neutral-light p-7 text-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-[15px] font-bold text-neutral-dark">
                  {step.title}
                </h3>
                <p className="text-[13px] text-neutral-dark/50">
                  {step.desc}
                </p>
              </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Before/After + Testimonial */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-8 flex flex-col gap-2">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Real Results
            </span>
            <h2 className="font-heading text-[28px] font-bold text-neutral-dark">
              See the Difference
            </h2>
          </div>
          {/* Before/After */}
          <div className="mb-10 flex overflow-hidden rounded-xl">
            <div className="relative h-[280px] flex-1 bg-[#8B7355]">
              <span className="absolute left-3 top-3 rounded-md bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-white">
                Before
              </span>
            </div>
            <div className="relative h-[280px] flex-1 bg-[#4A8C5C]">
              <span className="absolute left-3 top-3 rounded-md bg-primary px-3.5 py-1.5 text-xs font-semibold text-white">
                After
              </span>
            </div>
          </div>
          {/* Testimonial */}
          <div className="flex flex-col items-start gap-6 rounded-xl border border-neutral-mid bg-white p-8 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <div className="text-lg text-accent">★★★★★</div>
              <p className="text-sm italic leading-relaxed text-neutral-dark/60">
                &ldquo;{service.testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-full bg-primary/10" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] font-bold text-neutral-dark">
                  {service.testimonial.name}
                </span>
                <span className="text-xs text-neutral-dark/50">
                  {service.testimonial.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-10 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Common Questions
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border-b border-neutral-mid">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-neutral-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] text-neutral-dark/40 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed text-neutral-dark/60">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-20 text-center lg:px-20">
          <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
            {service.ctaQuestion}
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-9 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Your Free Estimate
            </Link>
            <span className="text-[15px] text-white/60">
              or call{" "}
              <a
                href="tel:+19255550123"
                className="text-white/80 hover:text-white"
              >
                (925) 555-0123
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-10 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              You Might Also Need
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Explore Our Other Services
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="card-lift group overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.badge}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-heading text-xl font-bold text-neutral-dark">
                    {rel.badge}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-neutral-dark/50">
                    {rel.description.slice(0, 100)}...
                  </p>
                  <span className="text-sm font-semibold text-primary">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
