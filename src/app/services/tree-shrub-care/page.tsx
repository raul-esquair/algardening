import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Tree & Shrub Care",
  description: "Expert tree and shrub care in Contra Costa and Alameda County. Pruning, trimming, removal, stump grinding, and health assessments.",
};

export default function TreeShrubCare() {
  const service = getServiceBySlug("tree-shrub-care");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
