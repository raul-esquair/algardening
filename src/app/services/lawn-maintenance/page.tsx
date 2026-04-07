import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Lawn Maintenance",
  description: "Professional lawn care in Contra Costa and Alameda County. Weekly mowing, edging, trimming, fertilization, and seasonal cleanup.",
};

export default function LawnMaintenance() {
  const service = getServiceBySlug("lawn-maintenance");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
