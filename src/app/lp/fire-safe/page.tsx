import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/LandingPageShell";
import LandingPageForm from "@/components/landing/LandingPageForm";
import { Check, ShieldCheck, Star, AlertTriangle, Flame, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "MOFD Fire-Safe Landscaping — AL Gardening",
  robots: { index: false, follow: false },
};

const included = [
  "Full defensible space — Zone 0, Zone 1, Zone 2. All of it.",
  "Brush cleared, grasses mowed to 3 inches, beds cleaned",
  "Trees limbed up to 6 feet — ladder fuels gone",
  "Zone 0 ember zone installed if you need it — gravel, hardscape, nothing combustible within 5 feet",
  "We know the MOFD rules. We've passed dozens of inspections.",
];

const stats = [
  { city: "Orinda", acres: "5,241", label: "acres very-high hazard" },
  { city: "Lafayette", acres: "5,309", label: "acres high hazard" },
  { city: "Moraga", acres: "2,290+", label: "acres very-high hazard" },
];

export default function FireSafeLP() {
  return (
    <LandingPageShell>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:px-20 lg:py-20">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center gap-5">
            <span className="flex w-fit items-center gap-1.5 rounded-full bg-error/20 px-4 py-1.5 text-xs font-bold text-white">
              <Flame className="h-3.5 w-3.5" />
              MOFD Deadline: May 31
            </span>

            <h1 className="font-heading text-3xl font-bold leading-tight text-white lg:text-[42px] lg:leading-[1.15]">
              MOFD Inspections Start June 1.
              <br />
              Is Your Property Ready?
            </h1>
            <p className="text-lg text-white/80">
              If you got the postcard, the clock is ticking. We get Lamorinda
              properties compliant — fast, thorough, no citation.
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-[15px] text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-2 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" /> MOFD Compliance Experts
              </span>
            </p>

            <div className="mt-2 hidden items-center gap-4 lg:flex">
              <a
                href="tel:+19256643281"
                className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call (925) 664-3281
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div id="lead-form" className="flex flex-col justify-center">
            <LandingPageForm
              defaultService="Fire-Safe / Defensible Space"
              buttonText="Book My Fire-Safe Assessment"
              successMessage="We'll call you within 2 hours to schedule your property walk-through. If you've already been cited, let us know — we can usually get you compliant within the 30-day window."
            />
          </div>
        </div>
      </section>

      {/* Urgency Bar */}
      <div className="bg-error/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-3 text-[13px] font-semibold text-error lg:px-20">
          <span className="flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5" />
            May 31 is the abatement deadline
          </span>
          <span className="hidden sm:inline">·</span>
          <span>MOFD inspectors start June 1</span>
          <span className="hidden sm:inline">·</span>
          <span>Booking Lamorinda properties now</span>
        </div>
      </div>

      {/* The Problem */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="mb-6 font-heading text-2xl font-bold text-neutral-dark">
            Every Spring, Same Story
          </h2>
          <p className="text-base leading-relaxed text-neutral-dark/60">
            The postcard shows up. You think &ldquo;I&apos;ll get to it.&rdquo;
            Then it&apos;s May 28 and the weeds are waist-high. MOFD sends inspectors
            in June, and properties that aren&apos;t ready get cited — 30 days to fix
            it or face fines and liens. It happens to hundreds of Lamorinda
            homeowners every year. It doesn&apos;t have to happen to you.
          </p>
        </div>
      </section>

      {/* Fire Stats */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-neutral-dark">
            Your City Is in a Fire Zone
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.city} className="flex flex-col gap-2 rounded-xl border border-error/20 bg-error/5 p-6 text-center">
                <span className="text-sm font-bold text-neutral-dark">{stat.city}</span>
                <span className="text-3xl font-bold text-error">{stat.acres}</span>
                <span className="text-[13px] text-neutral-dark/50">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] text-neutral-dark/40">
            Source: Cal Fire 2025 Fire Hazard Severity Zone Maps, Contra Costa County
          </p>
        </div>
      </section>

      {/* AB 3074 Callout */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 lg:p-8">
            <h3 className="mb-3 text-lg font-bold text-neutral-dark">
              New Rule Most Homeowners Don&apos;t Know About
            </h3>
            <p className="text-sm leading-relaxed text-neutral-dark/60">
              California&apos;s AB 3074 now requires an ember-resistant zone within
              5 feet of your home — that&apos;s Zone 0. No bark mulch, no woodchips,
              no combustible materials. Replace it with gravel, rock, or pavers.
              New construction must comply now. Existing homes have until the end
              of 2028. Most people in Lamorinda have never heard of this. We can
              get you ahead of it.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="text-lg text-accent">★★★★★</div>
          <p className="mt-4 text-base italic leading-relaxed text-neutral-dark/60">
            &ldquo;Our Sleepy Hollow property failed MOFD two years in a row.
            AL Gardening cleared the defensible space, replaced the euonymus
            with fire-resistant natives, and we passed with flying colors.
            Looks better than ever too.&rdquo;
          </p>
          <p className="mt-4 text-sm font-bold text-neutral-dark">
            Karen W. <span className="font-normal text-neutral-dark/50">— Sleepy Hollow, Orinda</span>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A] py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center lg:px-20">
          <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
            Don&apos;t Wait for the Citation
          </h2>
          <p className="text-base text-white/70">
            Free property assessment. We walk it, map the compliance gaps, and
            give you a clear quote. No pressure.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="tel:+19256643281"
              className="btn-lift rounded-[10px] bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Call (925) 664-3281
            </a>
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <Clock className="h-3.5 w-3.5" />
              Booking Lamorinda properties now
            </span>
          </div>
        </div>
      </section>
    </LandingPageShell>
  );
}
