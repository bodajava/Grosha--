"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { products } from "@/lib/data";
import { ArrowLeft, Thermometer, ShieldCheck, Zap, Leaf, ChevronRight } from "lucide-react";
import { NutritionalValues } from "@/components/amr/NutritionalValues";
import { SeasonalCalendar } from "@/components/amr/SeasonalCalendar";

const benefits = [
   { icon: <Zap className="w-5 h-5" />, title: "Nutrient Lock", desc: "Cryogenic freezing at -40°C prevents cellular degradation." },
   { icon: <Thermometer className="w-5 h-5" />, title: "Thermal Integrity", desc: "Maintains peak freshness from harvest to industrial kitchen." },
   { icon: <ShieldCheck className="w-5 h-5" />, title: "Bio-Safety", desc: "No additives. No preservatives. Pure agricultural quality." },
   { icon: <Leaf className="w-5 h-5" />, title: "Eco-Harvest", desc: "Sustainably sourced from Egypt's richest agricultural zones." }
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = use(params);
   const product = products.find((p) => p.id === id);

   useEffect(() => {
     const elements = document.querySelectorAll('[data-reveal]:not([data-revealed])');
     if (!elements.length) return;

     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
       elements.forEach(el => { (el as HTMLElement).dataset.revealed = 'true'; });
       return;
     }

     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           (entry.target as HTMLElement).dataset.revealed = 'true';
           observer.unobserve(entry.target);
         }
       });
     }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

     elements.forEach(el => observer.observe(el));
     return () => { elements.forEach(el => observer.unobserve(el)); };
   }, [product]);

   if (!product) {
      return (
         <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h1 className="display" style={{ fontSize: "28px", marginBottom: "24px" }}>Product not found</h1>
            <Link href="/products" className="btn btn-ghost" style={{ border: "1px solid var(--line-soft)" }}>Back to Catalog</Link>
         </div>
      );
   }

   const titleParts = product.name.split(' ');
   const firstPart = titleParts[0];
   const otherParts = titleParts.slice(1).join(' ');

   return (
      <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
         {/* Editorial side-rails */}
         <div className="side-rail right">
           <span className="rail-text">GROSHA — Product Specification File · {product.name}</span>
         </div>
         <div className="side-rail left">
           <span className="rail-text">IQF Origin / Certified Export / Delta Agriculture</span>
         </div>

         <div className="shell">
            <Navbar />

            <section className="hero pt-0" id="product-detail-hero" style={{ paddingBottom: "100px" }}>
               <div className="container">
                  {/* Section Rule */}
                  <div className="sec-rule">
                     <span className="roman">II.</span>
                     <span className="meta-grp">
                        <span>Specification // {product.category}</span>
                        <span className="dot-mark">•</span>
                        <span>Product ID: {product.id}</span>
                     </span>
                     <span>002 / 002</span>
                  </div>

                  {/* ── TWO-COLUMN GRID ── */}
                  <div style={{
                     display: "grid",
                     gridTemplateColumns: "1fr 1fr",
                     gap: "60px",
                     alignItems: "start",
                  }}>

                     {/* ── LEFT COLUMN ── */}
                     <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

                        {/* Hero product image */}
                        <div
                           data-reveal
                           style={{
                              position: "relative",
                              width: "100%",
                              aspectRatio: "1 / 1",
                              borderRadius: "3rem",
                              overflow: "hidden",
                              border: "1px solid var(--line-soft)",
                              boxShadow: "var(--shadow)",
                              background: "var(--bone)",
                           }}
                        >
                           <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              priority
                           />
                           <div style={{ position: "absolute", top: "28px", left: "28px" }}>
                              <div style={{ background: "var(--ink)", color: "var(--paper)" }} className="px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl">
                                 <div className="w-2 h-2 rounded-full bg-[#ade2f4] animate-pulse" />
                                 <span className="text-[10px] font-black uppercase tracking-[0.25em]">Premium IQF Spec</span>
                              </div>
                           </div>
                        </div>

                        {/* Thumbnails row */}
                        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                           {[1, 2, 3].map((i) => (
                              <div key={i} style={{ width: "88px", height: "88px", borderRadius: "50%", border: "2px solid var(--line-soft)", overflow: "hidden", cursor: "pointer", transition: "transform 250ms ease" }}
                                 className="hover:scale-110 grayscale hover:grayscale-0 transition-all">
                                 <Image src={product.image} alt="thumbnail" width={88} height={88} className="object-cover w-full h-full" />
                              </div>
                           ))}
                        </div>

                        {/* Technical Specifications card */}
                        <div data-reveal style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", borderRadius: "2.5rem", border: "1px solid var(--line-soft)", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)", paddingBottom: "14px" }}>
                              <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em", color: "#366b7a" }}>Technical Specifications</span>
                              <span style={{ fontSize: "9px", fontFamily: "var(--mono)", color: "#65655a" }}>GR-{product.id.toUpperCase()}-IQF</span>
                           </div>
                           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                 <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Packing Types</span>
                                 <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "4px" }}>
                                    {product.packingTypes.map((type, i) => (
                                       <span key={i} style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", background: "white", border: "1px solid var(--line-soft)", padding: "2px 8px", borderRadius: "4px" }}>{type}</span>
                                    ))}
                                 </div>
                              </div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                 <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Cut / Variety</span>
                                 <span style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>{product.types?.join(" / ") || "Standard IQF"}</span>
                              </div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                 <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Storage</span>
                                 <span style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>{product.storage}</span>
                              </div>
                              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                 <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Cold Chain</span>
                                 <span style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>-18°C Controlled</span>
                              </div>
                           </div>
                        </div>

                        {/* Nutrition card */}
                        <div data-reveal style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", borderRadius: "2.5rem", border: "1px solid var(--line-soft)", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)", paddingBottom: "14px" }}>
                              <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em", color: "#366b7a" }}>Nutrition & Data</span>
                              <span style={{ fontSize: "9px", fontFamily: "var(--mono)", color: "#65655a" }}>Per 100g serving</span>
                           </div>
                           <NutritionalValues nutrition={product.nutrition} />
                        </div>

                     </div>

                     {/* ── RIGHT COLUMN ── */}
                     <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

                        {/* Back link + title */}
                        <header style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                           <Link href="/products" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9a5035] hover:gap-5 transition-all">
                              <ArrowLeft className="w-4 h-4" /> Return to catalog
                           </Link>
                           <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                              <span style={{ color: "#366b7a", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5em", fontSize: "10px" }}>Global Agricultural Standard</span>
                              <h1 className="display" style={{ fontSize: "clamp(44px, 5.5vw, 82px)", lineHeight: 0.95, textTransform: "uppercase" }}>
                                 {firstPart} <br />
                                 <span className="coral italic">{otherParts}</span>
                              </h1>
                           </div>
                           <p className="lead" style={{ fontSize: "17px", color: "var(--ink-mute)", lineHeight: 1.65 }}>
                              {product.shortDescription}
                           </p>
                        </header>

                        {/* Benefit Cards — 2×2 grid */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                           {benefits.map((benefit, i) => (
                              <div key={i} style={{ padding: "24px", background: "rgba(255,255,255,0.5)", borderRadius: "2rem", border: "1px solid var(--line-soft)", display: "flex", flexDirection: "column", gap: "14px", transition: "all 250ms ease" }}
                                 className="group hover:bg-white">
                                 <div style={{ color: "var(--olive)", width: "44px", height: "44px", borderRadius: "14px", background: "#fcf9ef", display: "flex", alignItems: "center", justifyContent: "center" }}
                                    className="group-hover:bg-[var(--olive)] group-hover:text-white transition-colors">
                                    {benefit.icon}
                                 </div>
                                 <div>
                                    <h4 style={{ fontSize: "12px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "5px" }}>{benefit.title}</h4>
                                    <p style={{ fontSize: "12px", color: "#65655a", lineHeight: 1.55 }}>{benefit.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Grosha product flat-lay brand image */}
                        <div data-reveal style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "2.5rem", overflow: "hidden", border: "1px solid var(--line-soft)", boxShadow: "var(--shadow)" }}>
                           <Image
                              src="/assets/cta_export_hero.png"
                              alt="Grosha export products"
                              fill
                              className="object-cover"
                           />
                           <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(21,20,15,0.65) 0%, transparent 100%)", padding: "24px 28px" }}>
                              <span style={{ color: "white", fontSize: "10px", fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase" }}>Grosha · Premium Export Range</span>
                           </div>
                        </div>

                        {/* Seasonal Calendar */}
                        <div data-reveal style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", borderRadius: "2.5rem", border: "1px solid var(--line-soft)", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line-soft)", paddingBottom: "14px" }}>
                              <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em", color: "#366b7a" }}>Seasonal Calendar</span>
                              <span style={{ fontSize: "9px", fontFamily: "var(--mono)", color: "#65655a" }}>Harvest Availability</span>
                           </div>
                           <SeasonalCalendar months={product.seasonalCalendar} />
                        </div>

                        {/* CTA button */}
                        <div style={{ paddingTop: "8px" }}>
                           <Link href="/contact" className="btn" style={{ background: "var(--ink)", color: "var(--paper)", display: "inline-flex", alignItems: "center", padding: "20px 44px", borderRadius: "50px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.2em", fontWeight: 900, textDecoration: "none", gap: "10px", transition: "all 300ms ease" }}>
                              Request Commercial Quote <ChevronRight className="w-4 h-4" />
                           </Link>
                        </div>

                     </div>
                  </div>
               </div>
            </section>

            <Footer />
         </div>
      </div>
   );
}
