import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
  { label: "Landscape Design", href: "/services/landscape-design" },
  { label: "Tree & Shrub Care", href: "/services/tree-shrub-care" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-16 lg:px-20">
        {/* Main Columns */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company Info */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/images/logo-full.png"
                alt="AL Gardening"
                width={200}
                height={200}
                className="h-36 w-auto brightness-0 invert lg:h-44"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/75">
              Your neighborhood landscaping team.
              <br />
              Serving the East Bay with care since day one.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider">Services</h3>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider">Quick Links</h3>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider">Contact</h3>
            <a
              href="tel:+19255047892"
              className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              (925) 504-7892
            </a>
            <a
              href="mailto:hello@algardening.com"
              className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              hello@algardening.com
            </a>
            <span className="flex items-center gap-2 text-sm text-white/75">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Contra Costa & Alameda County
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[13px] text-white/50">
            © 2026 AL Gardening. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[13px] text-white/50 transition-colors hover:text-white/75"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-white/50 transition-colors hover:text-white/75"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
