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
  title:
    "Property Registration & Documentation Assistance in Sargodha | Fine Registry House",

  description:
    "Independent property registration assistance and property documentation guidance in [City], [Province]. Call or WhatsApp Fine Registry House to discuss your situation.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Property Registration & Documentation Assistance | Fine Registry House",
    description:
      "Practical, independent guidance for property documentation and registration procedures in [City].",
    type: "website",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Property Registration & Documentation Assistance | Fine Registry House",
    description:
      "Practical, independent guidance for property documentation and registration procedures in [City].",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fine Registry House",
  description:
    "Independent property documentation and registration assistance service.",
  telephone: "[PHONE NUMBER]",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ZAM ZAMA CENTRE",
    addressLocality: "SARGODHA",
    addressRegion: "PUNJAB",
    addressCountry: "PK",
  },
  areaServed: "SARGODHA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
      
    </html>
  );
}
