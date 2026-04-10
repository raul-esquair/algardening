import type { Metadata } from "next";
import Link from "next/link";
import { getCitiesByCounty } from "@/lib/cities-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "AL Gardening serves 14 cities across Contra Costa and Alameda County including Walnut Creek, Danville, Lafayette, Pleasanton, Dublin, and more.",
};

const counties = [
  {
    name: "Contra Costa County",
    cities: getCitiesByCounty("Contra Costa"),
  },
  {
    name: "Alameda County",
    cities: getCitiesByCounty("Alameda"),
  },
];

export default function ServiceAreas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Serving the East Bay
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            AL Gardening proudly serves homes and businesses across Contra Costa
            and Alameda County.
          </p>
        </div>
      </section>

      {/* Map + Cities */}
      <section className="py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:px-20">
          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-2xl" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=14yQFvo12qLWJ2bMJPpJXuy_QwjWTSt0&ehbc=2E312F"
              width="100%"
              height="470"
              className="border-0"
              style={{ marginTop: -70 }}
              loading="lazy"
              title="AL Gardening Service Area Map"
            />
          </div>

          {/* City Lists */}
          <div className="flex flex-col gap-12">
            {counties.map((county) => (
              <div key={county.name}>
                <h2 className="mb-4 font-heading text-2xl font-bold text-neutral-dark">
                  {county.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                  {county.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="text-sm text-neutral-dark/60 transition-colors hover:text-primary"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-12 text-center lg:px-20">
          <h2 className="font-heading text-2xl font-bold text-neutral-dark">
            Don&apos;t see your area?
          </h2>
          <p className="text-neutral-dark/60">
            Give us a call — we may still be able to help.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+19256643281"
              className="text-sm font-semibold text-primary"
            >
              (925) 664-3281
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
