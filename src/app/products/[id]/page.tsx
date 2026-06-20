"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { products } from "@/lib/data";
import { ArrowLeft, Thermometer, ShieldCheck, Zap, Leaf, ChevronRight } from "lucide-react";
import { NutritionalValues } from "@/components/merv/NutritionalValues";
import { SeasonalCalendar } from "@/components/merv/SeasonalCalendar";

const benefits = [
  { icon: <Zap className="w-5 h-5" />, title: "Nutrient Lock", desc: "Cryogenic freezing at -40°C prevents cellular degradation." },
  { icon: <Thermometer className="w-5 h-5" />, title: "Thermal Integrity", desc: "Maintains peak freshness from harvest to industrial kitchen." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Bio-Safety", desc: "No additives. No preservatives. Pure agricultural quality." },
  { icon: <Leaf className="w-5 h-5" />, title: "Eco-Harvest", desc: "Sustainably sourced from Egypt's richest agricultural zones." },
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not([data-revealed])");
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => { (el as HTMLElement).dataset.revealed = "true"; });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [product]);

  if (!product) {
    return (
      <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 className="display" style={{ fontSize: "28px", marginBottom: "24px" }}>Product not found</h1>
        <Link href="/#products" className="btn btn-ghost" style={{ border: "1px solid var(--line-soft)" }}>Back to Catalog</Link>
      </div>
    );
  }

  const titleParts = product.name.split(" ");
  const firstPart = titleParts[0];
  const otherParts = titleParts.slice(1).join(" ");

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      {/* Side rails – desktop only */}
      <div className="side-rail right">
        <span className="rail-text">Merv — Product Specification · {product.name}</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">IQF Origin / Certified Export / Delta Agriculture</span>
      </div>

      <div className="shell">
        <Navbar />

        <section className="hero pt-0" id="product-detail-hero" style={{ paddingBottom: "100px" }}>
          <div className="container">

            {/* Section rule */}
            <div className="sec-rule">
              <span className="roman">II.</span>
              <span className="meta-grp">
                <span>Specification // {product.category}</span>
                <span className="dot-mark">•</span>
                <span>Product ID: {product.id}</span>
              </span>
              <span>002 / 002</span>
            </div>

            {/* ── Two-column grid – collapses to 1 col on mobile via .pd-grid CSS class ── */}
            <div className="pd-grid">

              {/* ══════════ LEFT COLUMN ══════════ */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                {/* Hero image */}
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
                  <Image src={product.image} alt={product.name} fill className="object-cover" priority />
                  <div style={{ position: "absolute", top: "24px", left: "24px" }}>
                    <div style={{ background: "var(--ink)", color: "var(--paper)", display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 18px", borderRadius: "100px", boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}>
                      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ade2f4", animation: "pulse 2s infinite" }} />
                      <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.28em" }}>Premium IQF</span>
                    </div>
                  </div>
                </div>


                {/* Technical Specs card */}
                <div className="pd-card" data-reveal>
                  <div className="pd-card-header">
                    <span className="pd-card-title">Technical Specifications</span>
                    <span className="pd-card-sub">GR-{product.id.toUpperCase()}-IQF</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 28px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Packing Types</span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                        {product.packingTypes.map((type, i) => (
                          <span key={i} style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", background: "white", border: "1px solid var(--line-soft)", padding: "2px 8px", borderRadius: "4px" }}>{type}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Cut / Variety</span>
                      <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>{product.types?.join(" / ") || "Standard IQF"}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Storage</span>
                      <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>{product.storage}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9a5035", opacity: 0.85 }}>Cold Chain</span>
                      <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", marginTop: "4px" }}>-18°C Controlled</span>
                    </div>
                  </div>
                </div>

                {/* Nutrition card */}
                <div className="pd-card" data-reveal>
                  <div className="pd-card-header">
                    <span className="pd-card-title">Nutrition & Data</span>
                    <span className="pd-card-sub">Per 100g serving</span>
                  </div>
                  <NutritionalValues nutrition={product.nutrition} />
                </div>

              </div>

              {/* ══════════ RIGHT COLUMN ══════════ */}
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                {/* Title header */}
                <header style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <Link href="/#products" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: "#9a5035", textDecoration: "none" }}
                    className="hover:gap-5 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Return to catalog
                  </Link>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ color: "#366b7a", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5em", fontSize: "10px" }}>
                      Global Agricultural Standard
                    </span>
                    <h1 className="display" style={{ fontSize: "clamp(38px, 5.5vw, 82px)", lineHeight: 0.95, textTransform: "uppercase" }}>
                      {firstPart} <br />
                      <span className="coral italic">{otherParts}</span>
                    </h1>
                  </div>

                  <p className="lead" style={{ fontSize: "16px", color: "var(--ink-mute)", lineHeight: 1.65 }}>
                    {product.shortDescription}
                  </p>
                </header>

                {/* Benefit cards – 2×2 grid */}
                <div className="pd-benefits-grid">
                  {benefits.map((b, i) => (
                    <div key={i} style={{ padding: "22px", background: "rgba(255,255,255,0.5)", borderRadius: "2rem", border: "1px solid var(--line-soft)", display: "flex", flexDirection: "column", gap: "12px", transition: "background 250ms ease" }}
                      className="group hover:bg-white">
                      <div style={{ color: "var(--olive)", width: "42px", height: "42px", borderRadius: "14px", background: "#fcf9ef", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                        className="group-hover:bg-[var(--olive)] group-hover:text-white transition-colors">
                        {b.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "5px" }}>{b.title}</h4>
                        <p style={{ fontSize: "12px", color: "#65655a", lineHeight: 1.55, margin: 0 }}>{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Merv brand flat-lay image */}
                <div className="pd-brand-img" data-reveal>
                  <Image src="/assets/new image/export_shipping.jpg" alt="Merv export products" fill className="object-cover" />
                  <div className="pd-brand-img-caption">
                    <span style={{ color: "white", fontSize: "10px", fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase" }}>
                      Merv · Premium Export Range
                    </span>
                  </div>
                </div>

                {/* Seasonal calendar */}
                <div className="pd-card" data-reveal>
                  <div className="pd-card-header">
                    <span className="pd-card-title">Seasonal Calendar</span>
                    <span className="pd-card-sub">Harvest Availability</span>
                  </div>
                  <SeasonalCalendar months={product.seasonalCalendar} />
                </div>

                {/* CTA button */}
                <div>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "10px",
                      padding: "18px 40px", borderRadius: "100px",
                      background: "var(--ink)", color: "var(--paper)",
                      fontFamily: "var(--sans)", fontWeight: 900,
                      fontSize: "11px", letterSpacing: "0.2em",
                      textTransform: "uppercase", textDecoration: "none",
                      transition: "background 300ms ease",
                      width: "100%", justifyContent: "center",
                    }}
                    className="hover:bg-[var(--coral)] transition-colors"
                  >
                    Request Commercial Quote <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>{/* /pd-grid */}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
