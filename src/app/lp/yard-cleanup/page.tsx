import type { Metadata } from "next";
import LandingPageShell from "@/components/landing/LandingPageShell";
import LandingPageForm from "@/components/landing/LandingPageForm";
import Image from "next/image";
import { Check, ShieldCheck, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Yard Cleanup — AL Gardening",
  robots: { index: false, follow: false },
};

const included = [
  "Everything mowed, edged, and blown clean",
  "Overgrown beds and brush cut back to the dirt",
  "Dead plants, branches, and junk hauled away",
  "Green waste handled — your cart or we haul it",
];

const steps = [
  { num: "1", title: "You Request a Quote", desc: "Takes 30 seconds. We call you back within 2 hours." },
  { num: "2", title: "We Walk Your Property", desc: "Free on-site estimate. No pressure, no obligation." },
  { num: "3", title: "Your Yard Looks Great", desc: "Most cleanups done within 3-5 days of booking." },
];

export default function YardCleanupLP() {
  return (
    <LandingPageShell>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:px-20 lg:py-20">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="font-heading text-3xl font-bold leading-tight text-white lg:text-[42px] lg:leading-[1.15]">
              Your Yard Deserves Better Than This
            </h1>
            <p className="text-lg text-white/80">
              Overgrown. Embarrassing. On the to-do list for months.
              <br className="hidden sm:block" />
              Let&apos;s fix it this week.
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
                <Star className="h-3.5 w-3.5" /> Satisfaction Guaranteed
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
              defaultService="Yard Cleanup"
              buttonText="Get My Cleanup Quote"
              successMessage="Got it — we'll call you within 2 hours to schedule your cleanup. By the way, if you want it to stay this clean, ask us about weekly maintenance plans."
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
          <span>500+ Projects Completed</span>
          <span className="hidden sm:inline">·</span>
          <span>Serving the East Bay</span>
        </div>
      </div>

      {/* Photo */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <div className="relative h-[250px] overflow-hidden rounded-2xl lg:h-[400px]">
            <Image
              src="/images/services/yard-cleanup.jpg"
              alt="Yard cleanup project by AL Gardening"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm text-neutral-dark/40">
            Licensed, insured, and we&apos;ve cleaned up hundreds of yards across the East Bay. Yours won&apos;t be the hardest.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="text-lg text-accent">★★★★★</div>
          <p className="mt-4 text-base italic leading-relaxed text-neutral-dark/60">
            &ldquo;Our front yard was a disaster — dead patches, weeds everywhere,
            hadn&apos;t been touched in months. AL Gardening knocked it out in one
            morning. Neighbors started asking who we hired.&rdquo;
          </p>
          <p className="mt-4 text-sm font-bold text-neutral-dark">
            David R. <span className="font-normal text-neutral-dark/50">— Dana Estates, Concord</span>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-light py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-neutral-dark">
            How It Works
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
            Done Putting It Off?
          </h2>
          <p className="text-base text-white/70">
            Most cleanups are done within 3-5 days. Call now or fill out the form above.
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
              We pick up. No phone tree.
            </span>
          </div>
        </div>
      </section>
    </LandingPageShell>
  );
}
