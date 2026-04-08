"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animations";
import { services } from "@/lib/services-data";

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <FadeIn className="mb-12 flex flex-col items-center gap-3">
          <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
            What We Do
          </span>
          <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
            Services Built Around You
          </h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.15} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.badge}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-heading text-[22px] font-bold text-neutral-dark">
                    {service.badge}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-dark/60">
                    {service.subheadline}
                  </p>
                  <span className="text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    Learn More →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
