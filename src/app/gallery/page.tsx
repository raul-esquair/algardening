"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Lawn Maintenance", "Landscape Design", "Tree & Shrub Care"] as const;

const galleryItems = [
  { category: "Lawn Maintenance", image: "/images/gallery/project-1.jpg" },
  { category: "Landscape Design", image: "/images/gallery/project-2.jpg" },
  { category: "Tree & Shrub Care", image: "/images/gallery/project-3.jpg" },
  { category: "Landscape Design", image: "/images/gallery/project-4.jpg" },
  { category: "Lawn Maintenance", image: "/images/gallery/project-5.jpg" },
  { category: "Tree & Shrub Care", image: "/images/gallery/project-6.jpg" },
  { category: "Lawn Maintenance", image: "/images/gallery/project-7.jpg" },
  { category: "Landscape Design", image: "/images/gallery/project-8.jpg" },
  { category: "Tree & Shrub Care", image: "/images/gallery/project-9.jpg" },
];

const beforeAfters = [
  { beforeColor: "bg-[#8B7355]", afterColor: "bg-[#4A8C5C]" },
  { beforeColor: "bg-[#A09080]", afterColor: "bg-[#5A9C6A]" },
  { beforeColor: "bg-[#9B8B75]", afterColor: "bg-[#3A6B4A]" },
];

export default function Gallery() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Our Work
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            See what we can do for your outdoor space.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          {/* Filter Bar */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-primary text-white"
                    : "border border-neutral-mid bg-white text-neutral-dark hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={item.image}
                  alt={`${item.category} project`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="mb-12 flex flex-col items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent">
              Transformations
            </span>
            <h2 className="font-heading text-3xl font-bold text-neutral-dark lg:text-[38px]">
              Before & After
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {beforeAfters.map((ba, i) => (
              <div key={i} className="flex overflow-hidden rounded-xl">
                <div className={`relative h-[220px] flex-1 ${ba.beforeColor}`}>
                  <span className="absolute left-3 top-3 rounded-md bg-black/40 px-3 py-1 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>
                <div className={`relative h-[220px] flex-1 ${ba.afterColor}`}>
                  <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-white">
                    After
                  </span>
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
            Like what you see? Let&apos;s make it happen.
          </h2>
          <Link
            href="/contact"
            className="btn-lift rounded-[10px] bg-accent px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
