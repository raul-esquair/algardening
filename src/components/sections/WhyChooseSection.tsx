"use client";

import { HeartHandshake, ShieldCheck, CircleCheck, Trees } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";

const valueProps = [
  {
    icon: HeartHandshake,
    title: "Relationship-First",
    description: "We treat every client like family",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full peace of mind on every job",
  },
  {
    icon: CircleCheck,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll make it right",
  },
  {
    icon: Trees,
    title: "Local Expertise",
    description: "We know East Bay soil & climate",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Why AL Gardening
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Why East Bay Families Trust Us
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {valueProps.map((prop) => (
              <StaggerItem key={prop.title}>
                <div className="card-lift flex flex-col items-center gap-4 rounded-xl bg-neutral-light p-7 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-dark">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-neutral-dark/60">
                    {prop.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
