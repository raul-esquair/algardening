import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services-data";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Landscape Design & Installation",
  description: "Custom landscape design and installation in the East Bay. Garden design, planting, sod, mulch, and irrigation systems.",
};

export default function LandscapeDesign() {
  const service = getServiceBySlug("landscape-design");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
