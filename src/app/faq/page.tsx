"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    title: "General",
    faqs: [
      {
        q: "What areas do you serve?",
        a: "We serve homes and businesses across Contra Costa County and Alameda County, including Walnut Creek, Concord, Pleasant Hill, Lafayette, Oakland, Berkeley, Fremont, Dublin, and many more East Bay communities.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes — we are fully licensed and carry comprehensive general liability and workers' compensation insurance for your peace of mind.",
      },
      {
        q: "How do I get a free estimate?",
        a: "Simply fill out our contact form, call us at (925) 504-7892, or request an estimate through any page on our site. We'll schedule a visit to your property and provide a detailed quote — no obligation.",
      },
      {
        q: "What's your satisfaction guarantee?",
        a: "If you're not happy with our work, we'll come back and make it right at no extra charge. Your satisfaction is our top priority.",
      },
    ],
  },
  {
    title: "Services",
    faqs: [
      {
        q: "What does lawn maintenance include?",
        a: "Our lawn maintenance service includes weekly mowing, edging, string trimming, blowing, seasonal fertilization, weed control, and leaf/debris cleanup. We customize every plan to your yard's needs.",
      },
      {
        q: "How often should I schedule maintenance?",
        a: "For most East Bay lawns, we recommend weekly service during the growing season (March–October) and bi-weekly during cooler months. We'll help you find the right schedule.",
      },
      {
        q: "Do you handle landscape design from start to finish?",
        a: "Yes! We manage the entire process — from initial consultation and custom design to material sourcing and installation. One team, one point of contact.",
      },
      {
        q: "What tree services do you offer?",
        a: "We offer professional pruning and shaping, seasonal trimming, tree and stump removal, shrub maintenance, health assessments, and storm damage cleanup.",
      },
    ],
  },
  {
    title: "Pricing & Scheduling",
    faqs: [
      {
        q: "How much do your services cost?",
        a: "Every property is different, so we provide custom quotes based on your yard's size, condition, and the services you need. Our estimates are always free with no obligation.",
      },
      {
        q: "Do you offer recurring service plans?",
        a: "Yes! Most of our clients choose recurring weekly or bi-weekly service for the best results and value. We also offer one-time cleanups and seasonal work.",
      },
      {
        q: "How far in advance should I book?",
        a: "We try to accommodate requests as quickly as possible. Most estimates are scheduled within 48 hours, and service can typically begin within a week of approval.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept checks, credit/debit cards, and electronic transfers. Recurring clients receive monthly invoices for convenience.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            Everything you need to know about working with AL Gardening.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {faqSections.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="mb-6 font-heading text-2xl font-bold text-neutral-dark">
                {section.title}
              </h2>
              <div className="rounded-xl border border-neutral-mid bg-white">
                {section.faqs.map((faq, i) => {
                  const key = `${section.title}-${i}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={key}
                      className={
                        i < section.faqs.length - 1
                          ? "border-b border-neutral-mid"
                          : ""
                      }
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="pr-4 text-[15px] font-semibold text-neutral-dark">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`h-[18px] w-[18px] shrink-0 text-neutral-dark/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-dark/60">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-12 text-center lg:px-20">
          <h2 className="font-heading text-2xl font-bold text-neutral-dark">
            Still have questions?
          </h2>
          <p className="text-neutral-dark/60">
            Give us a call or request your free estimate.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19255047892"
              className="text-sm font-semibold text-primary"
            >
              (925) 504-7892
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
