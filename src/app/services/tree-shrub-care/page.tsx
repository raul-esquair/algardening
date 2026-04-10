import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tree & Shrub Care",
  description: "Expert tree and shrub care in Orinda, Lafayette, Danville, and 11 more East Bay cities. Pruning, trimming, removal, and health assessments.",
};

export default function TreeShrubCare() {
  const service = getServiceBySlug("tree-shrub-care");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
