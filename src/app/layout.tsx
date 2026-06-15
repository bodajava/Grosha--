import type { Metadata } from "next";
import { Playfair_Display, Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter | تصدير منتجات مجمدة",
  description: "Merv is Egypt's leading exporter of Individually Quick Frozen (IQF) fruits and vegetables. We supply premium frozen strawberries, artichokes, broccoli, and molokhia globally. ميرف هي الشركة الرائدة في مصر لتصدير الخضروات والفواكه المجمدة.",
  keywords: "ميرف, Merv, Merv IQF, frozen food export, frozen vegetables exporter Egypt, frozen fruits export Giza, IQF strawberry export Egypt, artichoke exporter Egypt, تصدير منتجات مجمدة, تصدير خضروات مجمدة بمصر, تصدير فواكه مجمدة, IQF Egypt, Cryo-Fresh technology",
  openGraph: {
    title: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter | تصدير منتجات مجمدة",
    description: "Merv is Egypt's leading exporter of Individually Quick Frozen (IQF) fruits and vegetables. We supply premium frozen strawberries, artichokes, broccoli, and molokhia globally.",
    url: "https://merv-iqf.com",
    siteName: "Merv IQF",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Merv IQF Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter",
    description: "Merv is Egypt's leading exporter of Individually Quick Frozen (IQF) fruits and vegetables. We supply premium frozen strawberries, artichokes, broccoli, and molokhia globally.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: "https://merv-iqf.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Merv",
  "alternateName": ["Merv IQF", "ميرف لتصدير المنتجات المجمدة", "Merv Frozen Foods"],
  "url": "https://merv-iqf.com",
  "logo": "https://merv-iqf.com/assets/logo.png",
  "description": "Merv is a premium exporter of Individually Quick Frozen (IQF) fruits and vegetables from Giza, Egypt. Leading the export of frozen strawberry, broccoli, artichoke, molokhia, and more.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Merv Building",
    "addressLocality": "Giza",
    "addressCountry": "EG"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201009778868",
    "contactType": "sales",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Arabic"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
