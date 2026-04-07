import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Lawn maintenance, landscape design & installation, and tree & shrub care for homes and businesses across the East Bay.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Our Services
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            From weekly lawn care to complete landscape transformations — we&apos;ve
            got your outdoor space covered.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-3 lg:px-20">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.badge}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <h2 className="font-heading text-2xl font-bold text-neutral-dark">
                  {service.badge}
                </h2>
                <p className="text-sm leading-relaxed text-neutral-dark/60">
                  {service.subheadline}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.checklist.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-dark/70"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <Link
                    href="/contact"
                    className="btn-lift rounded-lg bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    Get a Free Estimate
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-center text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-sell bar */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:flex-row sm:gap-2 lg:px-20">
          <p className="text-base text-neutral-dark/70">
            Not sure what you need?
          </p>
          <a
            href="tel:+19255550123"
            className="text-base font-semibold text-primary"
          >
            Call us at (925) 555-0123 and we&apos;ll help you figure it out.
          </a>
        </div>
      </section>
    </>
  );
}
