import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Yard Cleanup",
  description:
    "Professional yard cleanup in Concord, San Ramon, Brentwood, and 11 more East Bay cities. Seasonal cleanups, storm damage, and full haul-away.",
};

export default function YardCleanup() {
  const service = getServiceBySlug("yard-cleanup");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
