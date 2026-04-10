import type { Metadata } from "next";
import FireSafeContent from "@/components/sections/FireSafeContent";

export const metadata: Metadata = {
  title: "Fire-Safe Landscaping in Lafayette, Orinda & Moraga",
  description:
    "Defensible space, MOFD compliance, and fire-resistant landscape design for Lamorinda properties. Zone 0–2 installation, weed abatement, and inspection prep. Free assessment.",
  alternates: {
    canonical: "https://algardening.com/services/fire-safe-landscaping",
  },
};

export default function FireSafeLandscaping() {
  return <FireSafeContent />;
}
