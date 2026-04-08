import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Yard Cleanup",
  description:
    "Professional yard cleanup in Contra Costa and Alameda County. Seasonal cleanups, storm damage, overgrown yard restoration, and full haul-away.",
};

export default function YardCleanup() {
  const service = getServiceBySlug("yard-cleanup");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
