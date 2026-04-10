"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CircleCheck,
  Star,
  ChevronDown,
  ChevronRight,
  MapPin,
  Leaf,
  TreeDeciduous,
  Scissors,
  Trash2,
  Flame,
} from "lucide-react";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";
import type { CityData } from "@/lib/cities-data";
import { getNearbyCities } from "@/lib/cities-data";
import { services } from "@/lib/services-data";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: Star, label: "5-Star Rated Service" },
];

const serviceIcons = [Leaf, TreeDeciduous, Scissors, Trash2];

export default function CityPageTemplate({ city }: { city: CityData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const nearbyCities = getNearbyCities(city.slug);

  const siteUrl = "https://algardening.com";

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "LandscapingBusiness"],
        name: "AL Gardening",
        url: siteUrl,
        telephone: "+19256643281",
        email: "hello@algardening.com",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: `${city.name}, CA`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Landscaping Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${s.badge} in ${city.name}`,
              url: `${siteUrl}/services/${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${siteUrl}/service-areas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: `${siteUrl}/service-areas/${city.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-20 text-center lg:px-20 lg:py-24"
        >
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent">
            {city.county} County
          </span>
          <h1 className="max-w-3xl font-heading text-3xl font-bold text-white lg:text-[44px] lg:leading-[1.2]">
            {city.headline}
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            {city.subheadline}
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
                href="tel:+19256643281"
                className="text-white/70 hover:text-white"
              >
                (925) 664-3281
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

      {/* Breadcrumb */}
      <div className="bg-neutral-light">
        <nav className="mx-auto flex max-w-[1440px] items-center gap-1.5 px-6 py-3 text-xs text-neutral-dark/50 lg:px-20">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/service-areas" className="hover:text-primary">
            Service Areas
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-neutral-dark">{city.name}</span>
        </nav>
      </div>

      {/* Our Services in [City] */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              What We Offer
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Our Services in {city.name}
            </h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = serviceIcons[i] || Leaf;
              return (
                <StaggerItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="card-lift flex flex-col items-center gap-4 rounded-xl border border-neutral-mid bg-white p-7 text-center transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-[15px] font-bold text-neutral-dark">
                      {service.badge}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-neutral-dark/50">
                      {service.description.slice(0, 80)}...
                    </p>
                    <span className="text-sm font-semibold text-primary">
                      Learn More →
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Local Content: Description + Challenges */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-20">
          <SlideIn direction="left">
            <div className="flex flex-col gap-5">
              <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
                Local Expertise
              </span>
              <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
                Landscaping in {city.name}
              </h2>
              <p className="leading-relaxed text-neutral-dark/60">
                {city.description}
              </p>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-5">
              <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
                What We Know
              </span>
              <h2 className="font-heading text-[28px] font-bold text-neutral-dark">
                Local Landscaping Challenges
              </h2>
              <p className="leading-relaxed text-neutral-dark/60">
                {city.localChallenges}
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Fire-Safe CTA (Lamorinda cities only) */}
      {["lafayette", "orinda", "moraga"].includes(city.slug) && (
        <section className="bg-error/5 py-10">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-20">
            <Flame className="h-8 w-8 flex-shrink-0 text-error" />
            <div className="flex-1">
              <h3 className="text-base font-bold text-neutral-dark">
                {city.name} is in a high fire-hazard zone
              </h3>
              <p className="mt-1 text-sm text-neutral-dark/60">
                We specialize in MOFD-compliant defensible space, Zone 0 installation, and fire-resistant landscaping for Lamorinda properties.
              </p>
            </div>
            <Link
              href="/services/fire-safe-landscaping"
              className="btn-lift whitespace-nowrap rounded-lg bg-error px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-error/90"
            >
              Fire-Safe Services →
            </Link>
          </div>
        </section>
      )}

      {/* Neighborhoods We Serve */}
      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-10 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Neighborhoods
            </span>
            <h2 className="font-heading text-[28px] font-bold text-neutral-dark">
              Areas We Serve in {city.name}
            </h2>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {city.neighborhoods.map((n) => (
              <span
                key={n}
                className="flex items-center gap-1.5 rounded-full border border-neutral-mid bg-white px-5 py-2.5 text-sm font-medium text-neutral-dark"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {n}
              </span>
            ))}
          </div>
          {city.landmarks.length > 0 && (
            <p className="mt-6 text-center text-sm text-neutral-dark/50">
              Proudly serving homes near {city.landmarks.join(", ")}, and
              surrounding areas.
            </p>
          )}
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row lg:px-20">
          <p className="text-base font-semibold text-neutral-dark">
            Ready to transform your {city.name} property?
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn>
            <div className="mx-auto max-w-2xl flex flex-col items-center gap-6 rounded-xl border border-neutral-mid bg-white p-8 text-center">
              <div className="text-lg text-accent">★★★★★</div>
              <p className="text-base italic leading-relaxed text-neutral-dark/60">
                &ldquo;{city.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 rounded-full bg-primary/10" />
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[13px] font-bold text-neutral-dark">
                    {city.testimonial.name}
                  </span>
                  <span className="text-xs text-neutral-dark/50">
                    {city.testimonial.neighborhood}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
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
              {city.name} Landscaping FAQ
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {city.faqs.map((faq, i) => (
              <div key={i} className="border-b border-neutral-mid">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-neutral-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] flex-shrink-0 text-neutral-dark/40 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
            <FadeIn className="mb-8 flex flex-col items-center gap-3">
              <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
                Nearby Service Areas
              </span>
              <h2 className="font-heading text-[28px] font-bold text-neutral-dark">
                We Also Serve Nearby
              </h2>
            </FadeIn>
            <StaggerChildren staggerDelay={0.1} className="flex flex-wrap items-center justify-center gap-4">
              {nearbyCities.map((nearby) => (
                <StaggerItem key={nearby.slug}>
                  <Link
                    href={`/service-areas/${nearby.slug}`}
                    className="card-lift flex items-center gap-2 rounded-xl border border-neutral-mid bg-white px-6 py-4 text-sm font-semibold text-neutral-dark transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    Landscaping in {nearby.name}
                  </Link>
                </StaggerItem>
              ))}
              <StaggerItem>
                <Link
                  href="/service-areas"
                  className="flex items-center gap-1.5 px-4 py-4 text-sm font-semibold text-primary hover:underline"
                >
                  View All Service Areas →
                </Link>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-20 text-center lg:px-20">
          <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
            Get Your Free Estimate in {city.name}
          </h2>
          <p className="max-w-lg text-base text-white/70">
            Ready to upgrade your outdoor space? Contact us today for a free,
            no-obligation estimate.
          </p>
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
                href="tel:+19256643281"
                className="text-white/80 hover:text-white"
              >
                (925) 664-3281
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
