import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import SiteNavigation from "@/components/site-navigation/SiteNavigation";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francis Igwe | Copywriter & Copyeditor",
  description: "Portfolio of Francis Igwe, a versatile Copywriter and Copyeditor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="page-frame">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SiteNavigation />
        <main id="main-content" className="main-content-area">
          {children}
        </main>
      </body>
    </html>
  );
}
