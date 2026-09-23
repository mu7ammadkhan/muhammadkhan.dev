import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./enhancements.css";
import "./polish.css";
import "./refinement.css";
import "./hero-final.css";
import "./business-final.css";
import "./portrait-frame.css";
import "./typography-final.css";
import { site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${site.name} · Full-Stack Developer & Software Product Builder`,
  description:
    "Muhammad Khan builds commercial POS systems, desktop business software, full-stack React/Next.js applications and ESP32/MQTT automation products through MK TECH.",
  keywords: [
    "Muhammad Khan developer",
    "full stack developer Pakistan",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "desktop software developer",
    "POS software developer",
    "custom business software",
    "Electron developer",
    "ESP32 IoT developer",
    "MK TECH",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} · Full-Stack Developer & Software Product Builder`,
    description: "Commercial software, web applications and IoT systems built for real-world use.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080f",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
