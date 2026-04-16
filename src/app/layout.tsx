import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
