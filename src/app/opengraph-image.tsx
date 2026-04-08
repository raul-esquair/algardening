import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "AL Gardening — East Bay Landscaping & Lawn Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoPath = join(process.cwd(), "public/images/logo-full.png");
  const logoData = readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2D5A3D",
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, rgba(200,151,62,0.12), transparent 70%)",
          padding: "60px 80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="AL Gardening Logo"
          width={460}
          height={460}
          style={{
            filter: "brightness(0) invert(1)",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 48,
            color: "#C8973E",
            marginTop: 32,
            fontFamily: "sans-serif",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Get Your Free Estimate Today
        </div>
      </div>
    ),
    { ...size }
  );
}
