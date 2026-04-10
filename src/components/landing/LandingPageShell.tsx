"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";

interface LandingPageShellProps {
  children: React.ReactNode;
  formId?: string;
}

export default function LandingPageShell({
  children,
  formId = "lead-form",
}: LandingPageShellProps) {
  const scrollToForm = () => {
    document.getElementById(formId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Minimal Top Bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-mid/50 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 lg:px-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/emblem.png"
              alt="AL Gardening"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-heading text-lg font-bold">
              <span className="text-neutral-dark">AL</span>{" "}
              <span className="text-primary">Gardening</span>
            </span>
          </Link>
          <a
            href="tel:+19256643281"
            className="flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(925) 664-3281</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-mid/30 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-3">
          <a
            href="tel:+19256643281"
            className="btn-lift flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={scrollToForm}
            className="btn-lift flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-white"
          >
            <MessageSquare className="h-4 w-4" />
            Free Estimate
          </button>
        </div>
      </div>

      {/* Bottom padding on mobile for sticky bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}
