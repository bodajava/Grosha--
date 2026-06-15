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
  title: {
    default: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter | تصدير منتجات مجمدة",
    template: "%s | Merv IQF",
  },
  description: "Merv is Egypt's leading exporter of Individually Quick Frozen (IQF) fruits and vegetables. We supply premium frozen strawberries, artichokes, broccoli, and molokhia globally. ميرف هي الشركة الرائدة في مصر لتصدير الخضروات والفواكه المجمدة.",
  keywords: [
    "ميرف", "Merv", "Merv IQF",
    "تصدير خضار مجمدة", "تصدير فواكه مجمدة", "فراولة مجمدة للتصدير",
    "بطاطس مجمدة", "خضروات مجمدة مصر", "شركة تصدير منتجات مجمدة",
    "frozen food export", "frozen vegetables exporter Egypt",
    "frozen fruits export Giza", "IQF strawberry export Egypt",
    "artichoke exporter Egypt", "IQF Egypt", "Cryo-Fresh technology",
    "frozen broccoli export", "frozen molokhia export",
    "Egyptian frozen food supplier", "IQF frozen vegetables wholesale",
  ],
  metadataBase: new URL("https://merv-iqf.com"),
  alternates: {
    canonical: "https://merv-iqf.com",
    languages: {
      "en": "https://merv-iqf.com",
      "ar": "https://merv-iqf.com",
    },
  },
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
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter",
    description: "Merv is Egypt's leading exporter of Individually Quick Frozen (IQF) fruits and vegetables.",
    images: ["/assets/logo.png"],
  },
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
  verification: {
    google: "google-site-verification-code",
  },
  category: "food",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
    "telephone": "+20-100-977-8868",
    "contactType": "sales",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://merv-iqf.com",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://merv-iqf.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://merv-iqf.com/#products" },
    { "@type": "ListItem", "position": 3, "name": "Contact", "item": "https://merv-iqf.com/contact" },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Merv IQF",
  "url": "https://merv-iqf.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://merv-iqf.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="ltr" className={`${playfair.variable} ${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="google-site-verification" content="google-site-verification-code" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Giza" />
      </head>
      <body className="font-sans min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
