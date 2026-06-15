"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { Leaf, Zap, Globe, Thermometer } from "lucide-react";

export default function AboutPage() {
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
        <span className="rail-text">Merv — Vol. 01 · Issue Nº 01 · About Us</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">IQF · Cold Chain · Egypt · Global · 40+ Ports</span>
      </div>

      <div className="shell">
        <Navbar />

        {/* HERO SECTION */}
        <section className="hero" id="about-hero">
          <div className="container">
            <div className="sec-rule">
              <span className="roman">I.</span>
              <span className="meta-grp">
                <span>About / Our Ethos</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>001 / 005</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="label" data-reveal>Our Culinary Ethos <span className="ix">· Nº 01</span></span>
                <h1 className="display" data-reveal>Crafting <em>Freshness</em> Beyond <em>Boundaries</em><span className="dot">.</span></h1>
                <p className="lead" data-reveal>Discover the story of Merv, where artisanal dedication meets modern preservation to bring the world's finest harvests to your kitchen.</p>
                
                <div className="hero-foot" data-reveal style={{ marginTop: "40px" }}>
                  <span className="meta">↳ &nbsp; 30° 00′ N · 31° 12′ E &nbsp; · &nbsp; Giza, Egypt</span>
                  <span className="coord">Sourcing · Freezing · Shipping</span>
                </div>
              </div>
              <div className="hero-art" data-reveal="scale">
                <img src="/assets/real_Image/sunrise_harvest.jpg" alt="Artisanal Sunrise Harvest" />
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="labs" style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">II.</span>
              <span className="meta-grp">
                <span>Foundational Pillars / Innovation</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>002 / 005</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "60px" }}>
              <div style={{ maxWidth: "800px" }} data-reveal>
                <span className="label">Our Approach</span>
                <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.1, marginBottom: "20px" }}>
                  Rooted in Nature, <br />Driven by <span className="coral italic">Innovation</span>
                </h2>
                <p className="lead">Our commitment is simple: preserve the peak of nutritional value and flavor through meticulous harvesting and flash-frozen technology. Every piece of produce tells a story of sustainable farming and uncompromising quality.</p>
              </div>
            </div>

            <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {/* Card 1 */}
              <div className="lab-card" data-reveal style={{ background: "var(--paper-warm)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "24px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", color: "var(--coral)", padding: "14px" }}>
                  <Leaf size={28} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", textTransform: "uppercase" }}>Ethical Sourcing</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mute)", lineHeight: "1.6" }}>
                  Working directly with local farmers to ensure sustainable practices and fair trade at every stage of the supply chain.
                </p>
              </div>

              {/* Card 2 */}
              <div className="lab-card" data-reveal style={{ background: "var(--paper-dark)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "24px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", color: "var(--olive)", padding: "14px" }}>
                  <Zap size={28} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", textTransform: "uppercase" }}>Cryo-Fresh Tech</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mute)", lineHeight: "1.6" }}>
                  Advanced flash-freezing locks in cellular integrity and nutritional peak within minutes of harvest, preserving vital purity.
                </p>
              </div>

              {/* Card 3 */}
              <div className="lab-card" data-reveal style={{ background: "var(--bone)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "24px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", color: "var(--mustard)", padding: "14px" }}>
                  <Globe size={28} />
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", textTransform: "uppercase" }}>Global Standards</h3>
                <p style={{ fontSize: "14px", color: "var(--ink-mute)", lineHeight: "1.6" }}>
                  Maintaining rigorous international quality certifications for export excellence across six continents with 100% transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DETAIL HARVESTING SECTION */}
        <section className="about" id="sustainable-harvesting" style={{ borderTop: "1px solid var(--line-soft)", padding: "100px 0" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">III.</span>
              <span className="meta-grp">
                <span>Harvest / Agriculture</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>003 / 005</span>
            </div>
            
            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <span className="label">Section 02 // Harvesting</span>
                <h2 className="display">Sustainable <em>Harvesting</em></h2>
                <p className="lead">Every piece of produce tells a story of sustainable farming and uncompromising quality. We follow natural cycles to ensure ingredients are picked at their absolute peak of nutritional density.</p>
                <div className="footer-row" style={{ marginTop: "40px" }}>
                  <span className="mark">B</span>
                  <span>Partnering with 50+ regional farms</span>
                  <span className="stamp">
                    <span>100% Organic & Non-GMO</span>
                  </span>
                </div>
              </div>
              <div className="about-art" data-reveal="right">
                <img src="/assets/real_Image/cancer_risk_reduction.jpg" alt="Sustainable Farm Harvesting" />
                <div className="about-caption">
                  <b>Freshness locked within 4 hours of farm picking.</b>
                  (Merv, MMXXVI)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS INTEGRATION SECTION */}
        <section className="about" id="rapid-logistics" style={{ borderTop: "1px solid var(--line-soft)", padding: "100px 0", background: "var(--bone)" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">IV.</span>
              <span className="meta-grp">
                <span>Logistics / Climate Control</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>004 / 005</span>
            </div>
            
            <div className="about-grid" style={{ direction: "rtl" }}>
              <div className="about-copy" data-reveal style={{ direction: "ltr" }}>
                <span className="label">Section 03 // Logistics</span>
                <h2 className="display">Rapid <em>Logistics</em></h2>
                <p className="lead">Harvested goods are transported in climate-controlled environments within <b>2 hours</b> to maintain peak vibrancy. Our cold chain is an unbroken promise of freshness from field to table.</p>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
                  <div style={{ padding: "20px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "16px" }}>
                    <p style={{ fontSize: "28px", fontWeight: 900, color: "var(--coral)", marginBottom: "4px" }}>2H</p>
                    <p style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-mute)" }}>Field to Flash</p>
                  </div>
                  <div style={{ padding: "20px", background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: "16px" }}>
                    <p style={{ fontSize: "28px", fontWeight: 900, color: "var(--olive)", marginBottom: "4px" }}>-40°C</p>
                    <p style={{ fontSize: "10px", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-mute)" }}>Core Temp Lock</p>
                  </div>
                </div>
              </div>
              <div className="about-art" data-reveal="left" style={{ direction: "ltr" }}>
                <img src="/assets/real_Image/global_shipping.jpg" alt="Logistics Shipping Container" />
                <div className="about-caption">
                  <b>Climate-controlled cold storage systems.</b>
                  (Merv, MMXXVI)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROMISE SECTION */}
        <section className="cta" style={{ background: "var(--coral)", color: "var(--paper)" }}>
          <div className="container">
            <div className="sec-rule" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--paper)" }}>
              <span className="roman" style={{ color: "var(--paper)" }}>V.</span>
              <span className="meta-grp" style={{ color: "var(--paper)" }}>
                <span>Quality Promise / Standards</span>
                <span className="dot-mark" style={{ color: "var(--paper)" }}>•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span style={{ color: "var(--paper)" }}>005 / 005</span>
            </div>
            
            <div className="cta-inner" style={{ textAlign: "center", padding: "100px 0" }}>
              <h2 className="display" style={{ color: "var(--paper)", fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.0, marginBottom: "32px" }}>
                Our <em>Promise</em> of <br />Freshness<span className="dot" style={{ color: "var(--mustard)" }}>.</span>
              </h2>
              <p className="lead" style={{ color: "rgba(255, 255, 255, 0.8)", maxWidth: "700px", margin: "0 auto 48px auto" }}>
                Every batch undergoes 12 internal quality checks and 3rd party laboratory validation for pesticide residue, microbial safety, and nutrient density. We don't just freeze; we preserve perfection.
              </p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <Link className="btn btn-ghost" href="/#products" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
                  Explore Our Products
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
