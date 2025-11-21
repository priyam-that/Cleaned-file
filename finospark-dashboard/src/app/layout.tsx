import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finospark · AI finance dashboard",
  description:
    "A Gemini-powered finance intelligence workspace built with Next.js, Tailwind, shadcn/ui, and mock data sources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrains.variable} bg-[#050505] antialiased`}
      >
        <div className="min-h-screen bg-[#050505] text-white">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
