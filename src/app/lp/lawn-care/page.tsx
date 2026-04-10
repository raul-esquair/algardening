import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/LandingPageShell";
import LandingPageForm from "@/components/landing/LandingPageForm";
import Image from "next/image";
import { Check, ShieldCheck, Star, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Weekly Lawn Care — AL Gardening",
  robots: { index: false, follow: false },
};

const included = [
  "Mowed, edged, and trimmed — every single visit",
  "Walkways and driveway blown clean",
  "Weeds pulled from beds before they spread",
  "Seasonal fertilizing so your lawn stays green through summer",
];

const steps = [
  { num: "1", title: "Pick Your Plan", desc: "Tell us your address. We quote it same day." },
  { num: "2", title: "We Start This Week", desc: "Same crew, same day, every week. No surprises." },
  { num: "3", title: "You Stop Thinking About It", desc: "Come home to a clean lawn. Every single week." },
];

export default function LawnCareLP() {
  return (
    <LandingPageShell>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:px-20 lg:py-20">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="font-heading text-3xl font-bold leading-tight text-white lg:text-[42px] lg:leading-[1.15]">
              Weekly Lawn Care.
              <br />
              Show Up. Get It Done. Every Week.
            </h1>
            <p className="text-lg text-white/80">
              No contracts. No hassle. Just a clean lawn waiting for you when you get home.
            </p>

            <ul className="mt-2 flex flex-col gap-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-[15px] text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-1 text-[15px] font-medium text-white/70">
              Same crew. Same day. Same result. You stop thinking about your lawn and start enjoying it.
            </p>

            <p className="mt-2 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Licensed & Insured
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" /> No Contracts Required
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
              defaultService="Lawn Maintenance"
              buttonText="Get My Weekly Quote"
              successMessage="Nice — we'll call you within 2 hours to set up your first visit. Most clients start the same week."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-neutral-light">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-3 text-[13px] font-medium text-neutral-dark/60 lg:px-20">
          <span>★★★★★ 5-Star Rated</span>
          <span className="hidden sm:inline">·</span>
          <span>Licensed & Insured</span>
          <span className="hidden sm:inline">·</span>
          <span>No Contracts</span>
          <span className="hidden sm:inline">·</span>
          <span>Cancel Anytime</span>
        </div>
      </div>

      {/* Photo */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <div className="relative h-[250px] overflow-hidden rounded-2xl lg:h-[400px]">
            <Image
              src="/images/services/lawn-maintenance.jpg"
              alt="Professional lawn care by AL Gardening"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm text-neutral-dark/40">
            Real results from real East Bay properties. Every week, every visit, no exceptions.
          </p>
        </div>
      </section>

      {/* The Pitch */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-dark">
            Here&apos;s What Changes
          </h2>
          <p className="text-base leading-relaxed text-neutral-dark/60">
            Right now you&apos;re mowing on weekends when you&apos;d rather be doing
            literally anything else. Or you&apos;re watching the lawn get shaggy and
            telling yourself you&apos;ll get to it next week. You won&apos;t. Let us
            handle it. You come home on Thursday and it&apos;s done. Every week. While
            you were at work. That&apos;s the whole pitch.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="text-lg text-accent">★★★★★</div>
          <p className="mt-4 text-base italic leading-relaxed text-neutral-dark/60">
            &ldquo;We&apos;ve used AL Gardening for two years now. Same crew, every
            Thursday, our yard always looks great. Wish I&apos;d signed up sooner
            instead of wasting weekends on it.&rdquo;
          </p>
          <p className="mt-4 text-sm font-bold text-neutral-dark">
            Jennifer L. <span className="font-normal text-neutral-dark/50">— Gregory Gardens, Pleasant Hill</span>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-light py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-neutral-dark">
            Three Steps. That&apos;s It.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center gap-3 rounded-xl bg-white p-7 text-center shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-[15px] font-bold text-neutral-dark">{step.title}</h3>
                <p className="text-[13px] text-neutral-dark/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A] py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center lg:px-20">
          <h2 className="font-heading text-2xl font-bold text-white lg:text-3xl">
            Your Last Weekend Spent Mowing
          </h2>
          <p className="text-base text-white/70">
            Grab one of the 5 weekly spots we&apos;re filling this month.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="tel:+19256643281"
              className="btn-lift rounded-[10px] bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Call (925) 664-3281
            </a>
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <Calendar className="h-3.5 w-3.5" />
              Most clients start the same week
            </span>
          </div>
        </div>
      </section>
    </LandingPageShell>
  );
}
