"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Service Areas", href: "/service-areas" },
];

const serviceLinks = [
  { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
  { label: "Landscape Design", href: "/services/landscape-design" },
  { label: "Tree & Shrub Care", href: "/services/tree-shrub-care" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          : "shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/emblem.png"
            alt="AL Gardening emblem"
            width={56}
            height={56}
            style={{ width: "auto", height: "auto" }}
            className="h-12 lg:h-14"
            priority
          />
          <span className="font-heading text-xl font-bold lg:text-2xl">
            <span className="text-neutral-dark">AL</span>{" "}
            <span className="text-primary">Gardening</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-dark transition-colors hover:text-primary">
              Services
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-dark transition-colors hover:bg-neutral-light hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-neutral-dark transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+19255550123"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            (925) 555-0123
          </a>
          <Link
            href="/contact"
            className="btn-lift rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Get Free Estimate
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="tel:+19255550123"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
          >
            <Phone className="h-[18px] w-[18px] text-primary" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-dark" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-24 z-[60] bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-8">
            {/* Services Accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between border-b border-neutral-mid py-4 text-lg font-medium text-neutral-dark"
            >
              Services
              <ChevronDown
                className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="flex flex-col border-b border-neutral-mid py-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 pl-4 text-base text-neutral-dark/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-mid py-4 text-lg font-medium text-neutral-dark"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-lift mt-8 rounded-lg bg-accent py-4 text-center text-base font-semibold text-white"
            >
              Get Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
