import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aptus Group - Professional Logistics & Safe Depository Services",
  description:
    "Aptus Group offers world-class transport and logistics services across East Africa. Air, Sea & Road Freight, Safe Depository, Warehousing, and Customs Clearing services. Powering Trade since 2012.",
  keywords:
    "logistics, freight, shipping, cargo, safe depository, warehousing, customs clearing, transport, Kenya, East Africa",
  authors: [{ name: "Aptus Group" }],
  creator: "Aptus Group",
  publisher: "Aptus Group",
  robots: "index, follow",
  openGraph: {
    title: "Aptus Group - Professional Logistics & Safe Depository Services",
    description:
      "World-class transport and logistics services across East Africa. Air, Sea & Road Freight, Safe Depository, Warehousing, and Customs Clearing.",
    url: "https://aptusgroup.com",
    siteName: "Aptus Group",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptus Group - Professional Logistics & Safe Depository Services",
    description:
      "World-class transport and logistics services across East Africa.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
