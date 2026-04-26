// app/layout.js
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  metadataBase: new URL("https://justvisioneyecenter.com"),

  title: {
    default: "Best Eye Clinic in Ikeja Lagos | Just Vision Eye Center",
    template: "%s | Just Vision Eye Center",
  },

  description:
    "Just Vision Eye Center is a leading eye clinic in Ikeja and Surulere, Lagos, Nigeria offering cataract Diagnosis, glaucoma treatment, pediatric eye care, comprehensive eye tests and advanced ophthalmology services.",

  keywords: [
    "Eye Clinic in Lagos",
    "Best Eye Hospital in Ikeja",
    "Eye Clinic in Surulere",
    "Cataract Surgery Lagos",
    "Glaucoma Treatment Nigeria",
    "Ophthalmologist in Lagos",
    "Eye Test in Ikeja",
    "Eye Doctor in Lagos",
    "Vision Care Nigeria"
  ],

  authors: [{ name: "Just Vision Eye Center" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Best Eye Clinic in Ikeja & Surulere Lagos | Just Vision Eye Center",
    description:
      "Premium eye care services in Ikeja and Surulere Lagos. Book cataract surgery, glaucoma treatment and comprehensive eye exams today.",
    url: "https://justvisioneyecenter.com",
    siteName: "Just Vision Eye Center",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Just Vision Eye Center - Eye Clinic in Lagos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Eye Clinic in Ikeja Lagos",
    description:
      "Advanced ophthalmology and vision care services in Lagos, Nigeria.",
    images: ["/og-image.jpg"],
  },

  /* ✅ ONLY ADDITION (FAVICON) */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.ico",
  },

  verification: {
    google: "google-site-verification-code", // Replace when available
  },
};

/* ========================= */
/* ENTERPRISE STRUCTURED DATA */
/* ========================= */

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Just Vision Eye Center",
  url: "https://justvisioneyecenter.com",
  logo: "https://justvisioneyecenter.com/logo.png",
  image: "https://justvisioneyecenter.com/og-image.jpg",
  telephone: "+2348031234567",
  priceRange: "₦₦",
  medicalSpecialty: [
    "Ophthalmology",
    "Cataract Surgery",
    "Glaucoma Treatment",
    "Optometry",
    "Pediatric Eye Care"
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87"
  },

  sameAs: [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage"
  ],

  department: [
    {
      "@type": "MedicalClinic",
      name: "Just Vision Eye Center – Ikeja Branch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Ikeja Address Here",
        addressLocality: "Ikeja",
        addressRegion: "Lagos",
        addressCountry: "NG"
      }
    },
    {
      "@type": "MedicalClinic",
      name: "Just Vision Eye Center – Surulere Branch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Surulere Address Here",
        addressLocality: "Surulere",
        addressRegion: "Lagos",
        addressCountry: "NG"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <BottomNav />
      </body>
    </html>
  );
}