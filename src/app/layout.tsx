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
  title: "جروشا | Grosha | AMR FROIZZ - Premium IQF Frozen Foods",
  description: "Nutrients locked, flavor preserved, naturally premium frozen goods. جروشا - Grosha",
  keywords: "جروشا, Grosha, AMR, FROIZZ, frozen foods, IQF, frozen vegetables, frozen fruits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${interTight.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
