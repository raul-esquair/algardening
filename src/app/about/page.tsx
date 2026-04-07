import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  Ear,
  Heart,
  ShieldCheck,
  CircleCheck,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet AL Gardening — your East Bay landscaping team. Licensed, insured, and committed to treating your yard like our own.",
};

const values = [
  {
    icon: CalendarCheck,
    title: "We Show Up",
    description: "Reliability and consistency, every single visit.",
  },
  {
    icon: Ear,
    title: "We Listen",
    description: "Your vision drives every project we take on.",
  },
  {
    icon: Heart,
    title: "We Care",
    description: "About your yard, your family, your community.",
  },
];

const stats = [
  { value: "8+", label: "Years in Business" },
  { value: "500+", label: "Happy Customers" },
  { value: "15+", label: "Cities Served" },
];

const credentials = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: Leaf, label: "East Bay's Trusted Team" },
];

export default function About() {
  return (
    <>
      {/* Hero / Story */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-20">
          <div className="flex flex-col gap-5">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Our Story
            </span>
            <h1 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[44px] lg:leading-[1.2]">
              Meet AL Gardening
            </h1>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-neutral-dark/60">
              <p>
                We started AL Gardening because we believe every yard deserves
                care — and every homeowner deserves a team that shows up,
                listens, and delivers. What began as a small crew serving our
                neighbors has grown into a trusted landscaping partner across the
                East Bay.
              </p>
              <p>
                But no matter how much we grow, one thing stays the same: we
                treat your yard like it&apos;s our own.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-4">
              {credentials.map((cred) => (
                <span
                  key={cred.label}
                  className="flex items-center gap-2 text-sm font-semibold text-neutral-dark"
                >
                  <cred.icon className="h-4 w-4 text-primary" />
                  {cred.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-2xl lg:h-[360px]">
            <Image
              src="/images/about/team.jpg"
              alt="AL Gardening team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Our Values
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center gap-3.5 rounded-xl border border-neutral-mid bg-white p-8 text-center"
              >
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-neutral-dark">
                  {v.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-neutral-dark/50">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:gap-8 lg:px-20">
          <div className="flex flex-1 flex-col gap-2">
            <div className="text-base text-accent">★★★★★</div>
            <p className="text-[15px] italic leading-relaxed text-neutral-dark/60">
              &ldquo;We&apos;ve used AL Gardening for 3 years now. They truly
              feel like part of the family — reliable, honest, and they genuinely
              care about our yard.&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="h-11 w-11 rounded-full bg-primary/10" />
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-neutral-dark">
                David R.
              </span>
              <span className="text-xs text-neutral-dark/50">
                Concord · Client since 2023
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-around gap-8 px-6 py-10 lg:px-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading text-4xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-[#1B3D2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-20 text-center lg:px-20">
          <h2 className="max-w-2xl font-heading text-3xl font-bold text-white lg:text-[32px]">
            Want to work with a team that treats your yard like their own?
          </h2>
          <Link
            href="/contact"
            className="btn-lift rounded-[10px] bg-accent px-9 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
