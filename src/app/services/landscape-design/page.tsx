import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Landscape Design & Installation",
  description: "Custom landscape design and installation in Walnut Creek, Lafayette, Dublin, and 11 more East Bay cities. Planting, sod, mulch, and irrigation.",
};

export default function LandscapeDesign() {
  const service = getServiceBySlug("landscape-design");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
