import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Lawn Maintenance",
  description: "Professional lawn care in Walnut Creek, Danville, Pleasanton, and 11 more East Bay cities. Weekly mowing, edging, trimming, and seasonal cleanup.",
};

export default function LawnMaintenance() {
  const service = getServiceBySlug("lawn-maintenance");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
