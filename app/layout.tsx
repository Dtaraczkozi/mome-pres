import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Design Dispatch — March 24, 2026",
  description:
    "Product, UX, and design-tooling news for March 24, 2026 — with a focus on Figma, agents, and the design–code loop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
