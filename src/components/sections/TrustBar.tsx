"use client";

import { ShieldCheck, CircleCheck, MapPin } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/ui/animations";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: CircleCheck, label: "Satisfaction Guaranteed" },
  { icon: MapPin, label: "Serving the East Bay" },
];

export default function TrustBar() {
  return (
    <section className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <StaggerChildren
        staggerDelay={0.1}
        className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-8 px-6 py-5 lg:gap-12 lg:px-20"
      >
        {trustItems.map((item) => (
          <StaggerItem key={item.label}>
            <div className="flex items-center gap-2">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-neutral-dark">
                {item.label}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
