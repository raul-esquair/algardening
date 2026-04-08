import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingCTA from "@/components/layout/MobileFloatingCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://algardening.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AL Gardening | East Bay Landscaping & Lawn Care",
    template: "%s | AL Gardening",
  },
  description:
    "Your neighborhood landscaping team serving Contra Costa and Alameda County. Lawn maintenance, landscape design, and tree care for homes and businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AL Gardening",
    title: "AL Gardening | East Bay Landscaping & Lawn Care",
    description:
      "Professional lawn care, landscape design, and tree services for the East Bay. Licensed & insured. Satisfaction guaranteed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL Gardening | East Bay Landscaping & Lawn Care",
    description:
      "Professional lawn care, landscape design, and tree services for the East Bay.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileFloatingCTA />

        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AL Gardening",
              description:
                "Professional landscaping and lawn care services serving Contra Costa and Alameda County in the East Bay, California.",
              url: siteUrl,
              telephone: "+19255047892",
              email: "hello@algardening.com",
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Contra Costa County, CA",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Alameda County, CA",
                },
              ],
              serviceType: [
                "Lawn Maintenance",
                "Landscape Design",
                "Tree & Shrub Care",
              ],
              priceRange: "$$",
              openingHours: "Mo-Sa 07:00-18:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Landscaping Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lawn Maintenance",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landscape Design & Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tree & Shrub Care",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
