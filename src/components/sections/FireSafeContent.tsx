"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CircleCheck,
  Star,
  Check,
  ChevronDown,
  ChevronRight,
  MapPin,
  Flame,
  TreeDeciduous,
  Leaf,
  AlertTriangle,
  Calendar,
  Clock,
  FileWarning,
  Scale,
  Scissors,
} from "lucide-react";
import Image from "next/image";
import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: Star, label: "5-Star Rated Service" },
];

const fireStats = [
  {
    city: "Orinda",
    acres: "5,241",
    severity: "Very High",
    note: "Most very-high hazard acreage in Contra Costa County",
  },
  {
    city: "Lafayette",
    acres: "5,309",
    severity: "High",
    note: "Most high-hazard acreage in Contra Costa County",
  },
  {
    city: "Moraga",
    acres: "2,290+",
    severity: "Very High",
    note: "Plus 2,238 acres classified as high hazard",
  },
];

const zones = [
  {
    name: "Zone 0",
    subtitle: "Ember-Resistant Zone",
    distance: "0–5 ft from structure",
    color: "bg-error/10 border-error/30",
    iconColor: "text-error",
    items: [
      "Remove all combustible ground cover within 2 feet of structures",
      "No bark mulch, woodchips, or combustible materials — replace with gravel, rock, or pavers",
      "Maintain 1-foot vertical clearance from foliage to ground within 2 feet of structure",
      "Remove all dead or dying vegetation and rubbish",
      "AB 3074 requires existing homes to comply by end of 2028",
    ],
  },
  {
    name: "Zone 1",
    subtitle: "Lean, Clean & Green",
    distance: "5–30 ft from structure",
    color: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
    items: [
      "Low-growing, well-spaced, fire-resistant plants only",
      "Limb trees up to 6 feet above ground — remove ladder fuels",
      "Maintain 10-foot spacing between tree canopies",
      "Keep plants irrigated and remove dead branches, leaves, and debris",
      "Use fire-resistant or inorganic mulch only (no bark or woodchips)",
    ],
  },
  {
    name: "Zone 2",
    subtitle: "Reduced Fuel Zone",
    distance: "30–100 ft from structure",
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
    items: [
      "Mow grasses to 4 inches or less",
      "Create horizontal and vertical spacing between shrubs and trees",
      "Remove excess leaf and needle buildup from ground",
      "Thin dense vegetation to slow fire spread",
      "Maintain clear access paths for fire crews",
    ],
  },
];

const services = [
  "Complete defensible space assessment",
  "Zone 0 ember-resistant zone installation — gravel, hardscape, non-combustible materials",
  "Vegetation clearing and brush removal",
  "Tree limbing and ladder fuel removal",
  "Fire-resistant plant design and installation",
  "Annual weed abatement — MOFD May 31 deadline compliance",
  "Irrigation upgrades for fire-resistant plantings",
  "MOFD inspection preparation and compliance support",
  "Ongoing seasonal fire-safe maintenance plans",
];

const plants = [
  { name: "Lavender", note: "Low-growing, aromatic, drought-tolerant" },
  { name: "Rockrose (Cistus)", note: "Mediterranean native, fire-resistant, low water" },
  { name: "Toyon", note: "California native, provides winter berries for birds" },
  { name: "California Fuchsia", note: "Native, drought-tolerant, hummingbird magnet" },
  { name: "Manzanita (low-growing)", note: "Native ground cover, high leaf moisture" },
  { name: "Coyote Brush", note: "Native, fast-growing, excellent erosion control" },
  { name: "Salvia (native sages)", note: "Deer-resistant, pollinator-friendly, aromatic" },
  { name: "Creeping Rosemary", note: "Ground cover, fire-resistant, slopes and borders" },
  { name: "Ceanothus (low-growing)", note: "Native, nitrogen-fixing, great for slopes" },
  { name: "Native Bunch Grasses", note: "Low fuel load, erosion control, natural look" },
];

const timeline = [
  {
    icon: Calendar,
    period: "March – April",
    title: "MOFD Sends Reminders",
    desc: "All district residents receive postcards reminding them of abatement requirements and the upcoming deadline.",
  },
  {
    icon: Clock,
    period: "May 31",
    title: "Abatement Deadline",
    desc: "All grasses and weeds must be cut to 3 inches or less. Defensible space requirements must be maintained year-round.",
  },
  {
    icon: ShieldCheck,
    period: "June – July",
    title: "MOFD Inspections",
    desc: "Fire district inspectors visit properties to verify compliance. Violations receive a 30-day notice to correct.",
  },
  {
    icon: FileWarning,
    period: "After Notice",
    title: "Citations Issued",
    desc: "Non-compliant properties receive administrative citations with fines. Continued non-compliance can result in liens on the property.",
  },
];

const neighborhoods = {
  Orinda: ["Sleepy Hollow", "Glorietta", "Orinda Country Club", "Del Rey"],
  Lafayette: ["Burton Valley", "Happy Valley", "Reliez Valley", "Springhill"],
  Moraga: ["Sanders Ranch", "Moraga Country Club", "Rheem Valley", "Campolindo"],
};

const faqs = [
  {
    q: "What is defensible space and how much do I need?",
    a: "Defensible space is the area around your home where vegetation is managed to reduce wildfire risk. California law requires 100 feet of defensible space (or to your property line) around all structures in fire-hazard zones. It's divided into three zones: Zone 0 (0–5 ft, ember-resistant), Zone 1 (5–30 ft, lean and green), and Zone 2 (30–100 ft, reduced fuel). All of Lamorinda falls within these requirements.",
  },
  {
    q: "When is the MOFD weed abatement deadline?",
    a: "The Moraga-Orinda Fire District requires all vegetation to be cut to 3 inches or less by May 31 each year. Postcards go out in March–April as reminders, and inspections begin in June. If you're in the Contra Costa County Fire Protection District area (parts of Lafayette), deadlines are similar. We recommend scheduling spring abatement in March or April to avoid the rush.",
  },
  {
    q: "What is Zone 0 and does it apply to my home?",
    a: "Zone 0 is the ember-resistant zone within 5 feet of your home, required by California's AB 3074. All combustible materials — including bark mulch and woodchips — must be removed and replaced with gravel, rock, pavers, or concrete. This applies to all homes in fire-hazard zones. New construction must comply immediately; existing homes have until the end of 2028 to meet Zone 0 requirements.",
  },
  {
    q: "Can I keep my oak trees and still be fire-safe?",
    a: "Absolutely. Mature oaks are a defining feature of Lamorinda properties, and they can coexist with fire-safe landscaping. The key is proper structural pruning: limb trees up to 6 feet from the ground, maintain 10-foot spacing between canopies, remove all dead wood and leaf litter, and eliminate ladder fuels (shrubs growing into the tree canopy). A well-maintained oak is far safer than an untended one.",
  },
  {
    q: "How much does fire-safe landscaping cost?",
    a: "Cost varies significantly based on property size, slope, current vegetation density, and how much work is needed to reach compliance. A small flat lot may need only a few hundred dollars in annual maintenance, while a large hillside property with heavy brush could require a more significant initial investment. We provide free on-site assessments with detailed, transparent quotes — no surprises.",
  },
  {
    q: "Do you handle the full MOFD inspection process?",
    a: "Yes. We prepare your property for inspection, address all defensible space requirements across zones 0–2, and can be on-site during the inspection if needed. If you've already received a citation or pre-citation notice, we can get your property into compliance within the 30-day correction window to help avoid fines.",
  },
];

const relatedServices = [
  {
    title: "Tree & Shrub Care",
    desc: "Structural pruning, limbing, and hazardous tree removal — critical for fire-safe properties.",
    href: "/services/tree-shrub-care",
    image: "/images/services/tree-care.jpg",
  },
  {
    title: "Landscape Design",
    desc: "Fire-resistant garden design that's both safe and beautiful — native plants, hardscape, and smart irrigation.",
    href: "/services/landscape-design",
    image: "/images/services/landscape-design.jpg",
  },
  {
    title: "Yard Cleanup",
    desc: "Brush clearing, debris removal, and overgrown yard restoration — the first step to a fire-safe property.",
    href: "/services/yard-cleanup",
    image: "/images/services/yard-cleanup.jpg",
  },
];

// Structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Fire-Safe Landscaping in Lafayette, Orinda & Moraga",
      provider: {
        "@type": "LandscapingBusiness",
        name: "AL Gardening",
        url: "https://algardening.com",
        telephone: "+19256643281",
      },
      areaServed: [
        { "@type": "City", name: "Lafayette, CA" },
        { "@type": "City", name: "Orinda, CA" },
        { "@type": "City", name: "Moraga, CA" },
      ],
      description:
        "Defensible space installation, MOFD compliance, weed abatement, and fire-resistant landscape design for Lamorinda properties.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://algardening.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://algardening.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fire-Safe Landscaping",
          item: "https://algardening.com/services/fire-safe-landscaping",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function FireSafeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Flame className="h-3.5 w-3.5" />
            Lamorinda Fire-Safe Specialists
          </span>
          <h1 className="max-w-3xl font-heading text-3xl font-bold text-white lg:text-[44px] lg:leading-[1.2]">
            Fire-Safe Landscaping for Lafayette, Orinda & Moraga
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            Defensible space, MOFD compliance, and fire-resistant design — from
            the team that knows Lamorinda properties inside and out.
          </p>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Your Free Fire-Safe Assessment
            </Link>
            <span className="text-sm text-white/50">
              or call{" "}
              <a href="tel:+19256643281" className="text-white/70 hover:text-white">
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
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/services" className="hover:text-primary">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-neutral-dark">Fire-Safe Landscaping</span>
        </nav>
      </div>

      {/* The Problem */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-error">
              Why This Matters
            </span>
            <h2 className="max-w-2xl text-center font-heading text-[32px] font-bold text-neutral-dark">
              Living in a Fire Zone Means Your Landscape Matters
            </h2>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} className="mb-12 grid gap-6 md:grid-cols-3">
            {fireStats.map((stat) => (
              <StaggerItem key={stat.city}>
                <div className="flex flex-col gap-3 rounded-xl border border-error/20 bg-error/5 p-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-error" />
                    <span className="text-sm font-bold text-neutral-dark">{stat.city}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-error">{stat.acres}</span>
                    <span className="text-sm text-neutral-dark/60">acres — {stat.severity} Hazard</span>
                  </div>
                  <p className="text-[13px] text-neutral-dark/50">{stat.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <p className="mx-auto max-w-3xl text-center leading-relaxed text-neutral-dark/60">
              Lamorinda&apos;s hillside terrain, dense vegetation, and proximity to open
              space — Las Trampas, Briones, and Tilden — make it one of the highest
              wildfire-risk areas in the East Bay. The Moraga-Orinda Fire District
              inspects properties annually, and California&apos;s new AB 3074 Zone 0
              rules are phasing in for all existing homes. Non-compliance means
              citations, fines, and — more importantly — real risk to your home and
              family.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Defensible Space Zones */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              The Essentials
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Understanding Defensible Space Zones
            </h2>
            <p className="max-w-2xl text-center text-sm text-neutral-dark/50">
              California law requires 100 feet of defensible space around structures
              in fire-hazard zones. Here&apos;s what each zone requires.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-6">
            {zones.map((zone, i) => (
              <SlideIn key={zone.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className={`rounded-2xl border p-8 ${zone.color}`}>
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Flame className={`h-5 w-5 ${zone.iconColor}`} />
                      <h3 className="text-lg font-bold text-neutral-dark">{zone.name}</h3>
                    </div>
                    <span className="text-sm font-semibold text-neutral-dark/60">
                      {zone.subtitle} — {zone.distance}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {zone.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${zone.iconColor}`} />
                        <span className="text-sm text-neutral-dark/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-20">
          <SlideIn direction="left">
            <div className="flex flex-col gap-5">
              <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
                Our Services
              </span>
              <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
                Fire-Safe Landscaping Services
              </h2>
              <p className="leading-relaxed text-neutral-dark/60">
                From initial assessment to ongoing maintenance, we handle every
                aspect of fire-safe landscaping for Lamorinda properties. Whether
                you need to pass an MOFD inspection, comply with AB 3074 Zone 0
                requirements, or simply want peace of mind during fire season — we
                have you covered.
              </p>
              <ul className="mt-2 flex flex-col gap-3.5">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-primary" />
                    <span className="text-sm font-medium text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <div className="relative h-[300px] overflow-hidden rounded-2xl bg-primary/10 lg:h-full lg:min-h-[500px]">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <Flame className="h-16 w-16 text-primary/30" />
                <p className="text-sm font-medium text-primary/50">
                  Fire-safe landscaping project photo
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row lg:px-20">
          <p className="text-base font-semibold text-neutral-dark">
            Don&apos;t wait for a citation. Get your property fire-safe today.
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Schedule Free Assessment
          </Link>
        </div>
      </section>

      {/* Fire-Resistant Plants */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Smart Plant Choices
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Plants That Protect
            </h2>
            <p className="max-w-2xl text-center text-sm text-neutral-dark/50">
              Fire-resistant doesn&apos;t mean ugly. These plants thrive in
              Lamorinda&apos;s climate, reduce fire risk, and look beautiful year-round.
            </p>
          </FadeIn>

          <StaggerChildren staggerDelay={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {plants.map((plant) => (
              <StaggerItem key={plant.name}>
                <div className="flex flex-col gap-1.5 rounded-xl border border-neutral-mid bg-neutral-light p-5">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-neutral-dark">{plant.name}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-neutral-dark/50">{plant.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <p className="mt-6 text-center text-[13px] text-neutral-dark/40">
            All plants must be properly irrigated and maintained free of dead
            material to remain fire-resistant. No plant is completely fireproof.
          </p>
        </div>
      </section>

      {/* MOFD Compliance Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Know the Deadlines
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              MOFD Weed Abatement Timeline
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-3xl">
            <StaggerChildren staggerDelay={0.12} className="flex flex-col gap-0">
              {timeline.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-5">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                        <step.icon className="h-5 w-5" />
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-neutral-mid" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        {step.period}
                      </span>
                      <h3 className="mt-1 text-[15px] font-bold text-neutral-dark">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-dark/60">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Protect */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn className="mb-10 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Neighborhoods We Protect
            </span>
            <h2 className="font-heading text-[28px] font-bold text-neutral-dark">
              Fire-Safe Service Across Lamorinda
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(neighborhoods).map(([city, hoods]) => (
              <div key={city} className="flex flex-col gap-3">
                <Link
                  href={`/service-areas/${city.toLowerCase()}`}
                  className="text-base font-bold text-primary hover:underline"
                >
                  {city}
                </Link>
                <div className="flex flex-wrap gap-2">
                  {hoods.map((n) => (
                    <span
                      key={n}
                      className="flex items-center gap-1.5 rounded-full border border-neutral-mid bg-neutral-light px-4 py-2 text-[13px] font-medium text-neutral-dark"
                    >
                      <MapPin className="h-3 w-3 text-primary" />
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-neutral-dark/50">
            Serving properties near Las Trampas Wilderness, Briones Regional
            Park, Tilden Regional Park, and the open space boundaries where fire
            risk is highest.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <FadeIn>
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-xl border border-neutral-mid bg-white p-8 text-center">
              <div className="text-lg text-accent">★★★★★</div>
              <p className="text-base italic leading-relaxed text-neutral-dark/60">
                &ldquo;Our Sleepy Hollow property failed its MOFD fire inspection
                two years in a row. AL Gardening cleared the defensible space,
                replaced the euonymus with fire-resistant natives, and we passed
                with flying colors. Looks better than ever too.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 rounded-full bg-primary/10" />
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="text-[13px] font-bold text-neutral-dark">
                    Karen W.
                  </span>
                  <span className="text-xs text-neutral-dark/50">
                    Sleepy Hollow, Orinda
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
              Fire-Safe Landscaping FAQ
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-neutral-mid">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-[15px] font-semibold text-neutral-dark">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] flex-shrink-0 text-neutral-dark/40 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed text-neutral-dark/60">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-10 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Related Services
            </span>
            <h2 className="font-heading text-[32px] font-bold text-neutral-dark">
              Services That Support Fire Safety
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="card-lift group overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-heading text-xl font-bold text-neutral-dark">
                    {svc.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-neutral-dark/50">
                    {svc.desc}
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

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-6 py-20 text-center lg:px-20">
          <h2 className="font-heading text-3xl font-bold text-white lg:text-4xl">
            Protect Your Lamorinda Home
          </h2>
          <p className="max-w-lg text-base text-white/70">
            Get a free, no-obligation fire-safe assessment. We&apos;ll walk your
            property, identify every compliance gap, and give you a clear plan
            and quote.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-9 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Your Free Assessment
            </Link>
            <span className="text-[15px] text-white/60">
              or call{" "}
              <a href="tel:+19256643281" className="text-white/80 hover:text-white">
                (925) 664-3281
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
