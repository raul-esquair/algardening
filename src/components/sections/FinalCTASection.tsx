"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/animations";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-[#1B3D2A]">
      {/* Subtle radial glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_80%_30%,rgba(200,151,62,0.08),transparent)]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-20 text-center lg:px-20">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold text-white lg:text-[42px]">
            Ready to Love Your Outdoor Space?
          </h2>
          <p className="text-lg text-white/80">
            Get a free estimate — we&apos;ll come to you.
          </p>
          <div className="mt-3 flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-lift rounded-[10px] bg-accent px-9 py-4.5 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              Request Your Free Estimate
            </Link>
            <span className="text-[15px] text-white/60">
              or call{" "}
              <a
                href="tel:+19255047892"
                className="text-white/80 hover:text-white"
              >
                (925) 504-7892
              </a>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
