"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { Globe2, Package, Database, MapPin, ShieldCheck, Thermometer, Anchor, Truck } from "lucide-react";

const hubs = [
  { region: "Europe", city: "Rotterdam Hub", latency: "Strategic Gateway" },
  { region: "North America", city: "NJ Distribution", latency: "East Coast Hub" },
  { region: "Asia", city: "Singapore Terminal", latency: "Far East Logistics" }
];

const logisticSolutions = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Thermal Armor",
    description: "Eco-friendly, multi-layer thermal insulation designed to withstand 72-hour transit windows and maintain peak freshness.",
    color: "var(--coral)"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Express Air Route",
    description: "Next-day delivery options for high-value perishable products to major metropolitan cities across the globe.",
    color: "var(--olive)"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "IoT Dashboard",
    description: "Real-time IoT temperature monitoring and GPS tracking accessible via our client portal for full transparency.",
    color: "var(--mustard)"
  }
];

export default function LogisticsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not([data-revealed])');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => {
        (el as HTMLElement).dataset.revealed = 'true';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      {/* Editorial side-rails */}
      <div className="side-rail right">
        <span className="rail-text">Merv — Vol. 01 · Issue Nº 01 · Logistics Network</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">Cold Storage · Port Export · Unbroken Cold Chain</span>
      </div>

      <div className="shell">
        <Navbar />

        {/* HERO SECTION */}
        <section className="hero pt-0" id="logistics-hero">
          <div className="container">
            <div className="sec-rule">
              <span className="roman">I.</span>
              <span className="meta-grp">
                <span>Logistics / Global Infrastructure</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>001 / 004</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="label" data-reveal>GLOBAL EXPORT INFRASTRUCTURE <span className="ix">· Nº 03</span></span>
                <h1 className="display" data-reveal>Global Export <span className="coral italic">Reach</span><span className="dot">.</span></h1>
                <p className="lead" data-reveal>Navigating the world's most complex logistics routes to bring artisanal frozen quality from our source to your doorstep.</p>
                
                <div className="hero-foot" data-reveal style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
                  <Link className="btn btn-primary" href="/contact">
                    Feasibility Study
                    <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span>
                  </Link>
                </div>
              </div>
              <div className="hero-art" data-reveal="scale">
                <img src="/assets/real_Image/global_shipping.jpg" alt="Global Shipping Container Port" />
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="labs" style={{ padding: "60px 0", background: "var(--bone)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
              <div data-reveal>
                <span className="label" style={{ marginBottom: "8px" }}>Sea Routes</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "var(--coral)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <Anchor size={24} /> 40+ Ports
                </h3>
              </div>
              <div data-reveal style={{ borderLeft: "1px solid var(--line-soft)", borderRight: "1px solid var(--line-soft)" }}>
                <span className="label" style={{ marginBottom: "8px" }}>Network Strength</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "var(--olive)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <MapPin size={24} /> 15+ Hubs
                </h3>
              </div>
              <div data-reveal>
                <span className="label" style={{ marginBottom: "8px" }}>Global Presence</span>
                <h3 style={{ fontSize: "36px", fontWeight: 900, color: "var(--mustard)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <Globe2 size={24} /> 3 Continents
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="labs" style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">II.</span>
              <span className="meta-grp">
                <span>Solutions / Smart Cold Chain</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>002 / 004</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "60px", textAlign: "center" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }} data-reveal>
                <span className="label">Logistics Powerhouse</span>
                <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.1, marginBottom: "20px" }}>
                  Cold-Chain <span className="coral italic">Optimization</span>
                </h2>
              </div>
            </div>

            <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {logisticSolutions.map((sol, i) => (
                <div key={i} className="lab-card" data-reveal style={{ background: "var(--paper-warm)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", color: sol.color, padding: "14px" }}>
                      {sol.icon}
                    </div>
                    <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", textTransform: "uppercase" }}>{sol.title}</h3>
                    <p style={{ fontSize: "14.5px", color: "var(--ink-mute)", lineHeight: "1.6", marginBottom: "24px" }}>
                      {sol.description}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink-mute)", borderTop: "1px solid var(--line-soft)", paddingTop: "20px" }}>
                    <ShieldCheck size={14} style={{ color: sol.color }} />
                    Protocol Compliant
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONAL DISTRIBUTION SECTION */}
        <section className="about" id="regional-distribution" style={{ borderTop: "1px solid var(--line-soft)", padding: "100px 0", background: "var(--bone)" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">III.</span>
              <span className="meta-grp">
                <span>Distribution / Regional Hubs</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>003 / 004</span>
            </div>
            
            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <span className="label">Regional Distribution</span>
                <h2 className="display">Regional <span className="coral italic">Distribution</span></h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "32px" }}>
                  {hubs.map((hub, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "16px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--coral)" }}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--coral)" }}>{hub.region}</p>
                        <p style={{ fontSize: "18px", fontWeight: 900 }}>{hub.city}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-art" data-reveal="right">
                <img src="/assets/frouts/Production.png" alt="Distribution Facility Production" />
                <div className="about-caption">
                  <b>Real-time dispatch and loading facilities.</b>
                  (Merv, MMXXVI)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta" style={{ background: "var(--coral)", color: "var(--paper)" }}>
          <div className="container">
            <div className="sec-rule" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--paper)" }}>
              <span className="roman" style={{ color: "var(--paper)" }}>IV.</span>
              <span className="meta-grp" style={{ color: "var(--paper)" }}>
                <span>Expand / Logistics Feasibility Study</span>
                <span className="dot-mark" style={{ color: "var(--paper)" }}>•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span style={{ color: "var(--paper)" }}>004 / 004</span>
            </div>
            
            <div className="cta-inner" style={{ textAlign: "center", padding: "100px 0" }}>
              <h2 className="display" style={{ color: "var(--paper)", fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.0, marginBottom: "32px" }}>
                Ready to <span className="italic underline decoration-wavy decoration-1 underline-offset-8">Expand?</span>
              </h2>
              <p className="lead" style={{ color: "rgba(255, 255, 255, 0.8)", maxWidth: "700px", margin: "0 auto 48px auto" }}>
                Connect with our export logistics team today for a tailored quote and capacity study for your specific region.
              </p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <Link className="btn btn-ghost" href="/contact" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
                  Start Study
                  <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
