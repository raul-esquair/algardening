"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";

const comparisons = [
  {
    beforeColor: "bg-[#8B7355]",
    afterColor: "bg-[#4A8C5C]",
  },
  {
    beforeColor: "bg-[#A09080]",
    afterColor: "bg-[#5A9C6A]",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              See the Transformation
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Real Results, Real Yards
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {comparisons.map((comp, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="flex overflow-hidden rounded-xl">
                <div className={`relative flex-1 ${comp.beforeColor} h-[300px]`}>
                  <span className="absolute left-3 top-3 rounded-md bg-black/40 px-3.5 py-1.5 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>
                <div className={`relative flex-1 ${comp.afterColor} h-[300px]`}>
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-3.5 py-1.5 text-xs font-semibold text-white">
                    After
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="text-base font-semibold text-primary hover:underline"
            >
              View Full Gallery →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
