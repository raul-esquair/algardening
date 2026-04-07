"use client";

import Link from "next/link";
import { FadeIn, SlideIn } from "@/components/ui/animations";

const counties = [
  {
    name: "Contra Costa County",
    cities: [
      "Walnut Creek",
      "Concord",
      "Pleasant Hill",
      "Martinez",
      "Lafayette",
      "Orinda",
      "Danville",
      "San Ramon",
      "Moraga",
    ],
  },
  {
    name: "Alameda County",
    cities: [
      "Oakland",
      "Berkeley",
      "Fremont",
      "Hayward",
      "Dublin",
      "Pleasanton",
      "Livermore",
      "San Leandro",
      "Castro Valley",
    ],
  },
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Where We Serve
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Proudly Serving the East Bay
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Google Maps Embed */}
          <SlideIn direction="left">
            <div className="overflow-hidden rounded-2xl" style={{ height: 280 }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=14yQFvo12qLWJ2bMJPpJXuy_QwjWTSt0&ehbc=2E312F"
                width="100%"
                height="350"
                className="border-0"
                style={{ marginTop: -70 }}
                loading="lazy"
                title="AL Gardening Service Area Map"
              />
            </div>
          </SlideIn>

          {/* City lists */}
          <SlideIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-10">
              {counties.map((county) => (
                <div key={county.name} className="flex flex-col gap-3">
                  <h3 className="text-base font-bold text-neutral-dark">
                    {county.name}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {county.cities.map((city) => (
                      <li
                        key={city}
                        className="text-sm text-neutral-dark/60"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/service-areas"
            className="text-base font-semibold text-primary hover:underline"
          >
            See All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
