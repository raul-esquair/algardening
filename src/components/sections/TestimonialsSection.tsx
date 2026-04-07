"use client";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";

const testimonials = [
  {
    quote:
      "AL Gardening transformed our backyard into something we never imagined. They truly care about every detail.",
    name: "Sarah M.",
    location: "Walnut Creek",
  },
  {
    quote:
      "Reliable, professional, and always on time. Our lawn has never looked better. Highly recommend!",
    name: "David R.",
    location: "Concord",
  },
  {
    quote:
      "They treat our yard like it's their own. Best landscaping team in the East Bay, hands down.",
    name: "Jennifer L.",
    location: "Pleasant Hill",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              What Our Clients Say
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Trusted by Our Neighbors
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="card-lift flex flex-col gap-4 rounded-xl border border-neutral-mid bg-neutral-light p-7">
                  <span className="font-heading text-5xl leading-none text-primary/10">
                    &ldquo;
                  </span>
                  <div className="flex text-lg text-accent">★★★★★</div>
                  <p className="text-sm italic leading-relaxed text-neutral-dark/60">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-primary/10" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-bold text-neutral-dark">
                        {t.name}
                      </span>
                      <span className="text-xs text-neutral-dark/50">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
