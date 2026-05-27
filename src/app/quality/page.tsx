"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { Thermometer, Microscope, Cpu, CheckCircle2, ShieldCheck, Award } from "lucide-react";

const workflowSteps = [
  { step: "01", title: "Harvest", desc: "Sourced and brought within 4 hours." },
  { step: "02", title: "Blanching", desc: "Scientific enzyme blunting." },
  { step: "03", title: "IQF Blast", desc: "-40°C individual freezing." },
  { step: "04", title: "Audit", desc: "Molecular purity inspection." }
];

const qualityValues = [
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "IQF TECHNOLOGY",
    description: "Amr Froizz products use Individually Quick Frozen systems. This prevents large ice crystals from damaging fibers, locking in flavor at -40°C in minutes.",
    bullets: ["Zero moisture loss", "Individual piece separation", "Nutrient lock-in system"],
    color: "var(--coral)"
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "MOLECULAR ANALYSIS",
    description: "Every batch undergoes rigorous microbial and chemical testing in our ISO-certified laboratories to meet global safety standards.",
    bullets: ["Purity Level: 99.9%", "Microbial safety", "Chemical purity"],
    color: "var(--olive)"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "UNBROKEN COLD CHAIN",
    description: "Our logistics network is monitored 24/7 with real-time IoT sensors. From our blast freezers to your doorstep, the temperature never deviates.",
    bullets: ["24/7 IoT Monitoring", "Real-time thermal alerts", "End-to-end transparency"],
    color: "var(--mustard)"
  }
];

export default function QualityPage() {
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
        <span className="rail-text">GROSHA — Vol. 01 · Issue Nº 01 · Quality Standards</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">HACCP · ISO 9001 · IQF · Egyptian Origin</span>
      </div>

      <div className="shell">
        <Navbar />

        {/* HERO SECTION */}
        <section className="hero" id="quality-hero">
          <div className="container">
            <div className="sec-rule">
              <span className="roman">I.</span>
              <span className="meta-grp">
                <span>Quality / Scientific Standards</span>
                <span className="dot-mark">•</span>
                <span>GROSHA / Volume 01</span>
              </span>
              <span>001 / 004</span>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="label" data-reveal>HACCP CERTIFIED SYSTEM <span className="ix">· Nº 02</span></span>
                <h1 className="display" data-reveal>Frozen at the <br />Peak of <span className="coral italic">Pure</span><span className="dot">.</span></h1>
                <p className="lead" data-reveal>Beyond just cold, we apply rigorous scientific standards to ensure every shipment meets international gastronomic benchmarks.</p>
                
                <div className="hero-foot" data-reveal style={{ marginTop: "40px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--bone)", border: "1px solid var(--line-soft)", borderRadius: "16px" }}>
                    <Thermometer size={18} style={{ color: "var(--coral)" }} />
                    <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>-40°C IQF Blast</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "var(--bone)", border: "1px solid var(--line-soft)", borderRadius: "16px" }}>
                    <Award size={18} style={{ color: "var(--olive)" }} />
                    <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>ISO 9001 Certified</span>
                  </div>
                </div>
              </div>
              <div className="hero-art" data-reveal="scale">
                <img src="/assets/frouts/Lab tech.png" alt="Quality Control Scientist in Lab" />
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="labs" style={{ padding: "100px 0", background: "var(--bone)" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">II.</span>
              <span className="meta-grp">
                <span>Systematic Excellence / Process Workflow</span>
                <span className="dot-mark">•</span>
                <span>GROSHA / Volume 01</span>
              </span>
              <span>002 / 004</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "60px", textAlign: "center" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }} data-reveal>
                <span className="label">Precision Workflow</span>
                <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1.1, marginBottom: "20px" }}>
                  A Journey of <span className="coral italic">Purity</span>
                </h2>
              </div>
            </div>

            <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {workflowSteps.map((step, i) => (
                <div key={i} className="lab-card" data-reveal style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "24px", position: "relative", overflow: "hidden" }}>
                  <span style={{ position: "absolute", top: "-10px", left: "-10px", fontSize: "72px", fontWeight: 900, color: "var(--bone)", opacity: 0.8, pointerEvents: "none", zIndex: 0 }}>
                    {step.step}
                  </span>
                  <h3 style={{ fontSize: "20px", fontWeight: 900, marginBottom: "12px", textTransform: "uppercase", position: "relative", zIndex: 1 }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--ink-mute)", lineHeight: "1.6", position: "relative", zIndex: 1 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        <section className="labs" style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">III.</span>
              <span className="meta-grp">
                <span>Main Pillars / Safety Certifications</span>
                <span className="dot-mark">•</span>
                <span>GROSHA / Volume 01</span>
              </span>
              <span>003 / 004</span>
            </div>

            <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {qualityValues.map((value, i) => (
                <div key={i} className="lab-card" data-reveal style={{ background: "var(--paper-warm)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--bone)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", color: value.color, padding: "14px" }}>
                      {value.icon}
                    </div>
                    <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px", textTransform: "uppercase" }}>{value.title}</h3>
                    <p style={{ fontSize: "14.5px", color: "var(--ink-mute)", lineHeight: "1.6", marginBottom: "24px" }}>
                      {value.description}
                    </p>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--line-soft)", paddingTop: "20px" }}>
                    {value.bullets.map((bullet, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)", marginBottom: "8px" }}>
                        <CheckCircle2 size={14} style={{ color: value.color }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="cta" style={{ background: "var(--coral)", color: "var(--paper)" }}>
          <div className="container">
            <div className="sec-rule" style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--paper)" }}>
              <span className="roman" style={{ color: "var(--paper)" }}>IV.</span>
              <span className="meta-grp" style={{ color: "var(--paper)" }}>
                <span>Connect / Enterprise Quality Assurance</span>
                <span className="dot-mark" style={{ color: "var(--paper)" }}>•</span>
                <span>GROSHA / Volume 01</span>
              </span>
              <span style={{ color: "var(--paper)" }}>004 / 004</span>
            </div>
            
            <div className="cta-inner" style={{ textAlign: "center", padding: "100px 0" }}>
              <h2 className="display" style={{ color: "var(--paper)", fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.0, marginBottom: "32px" }}>
                Connect with our <br />Quality Experts<span className="dot" style={{ color: "var(--mustard)" }}>.</span>
              </h2>
              <p className="lead" style={{ color: "rgba(255, 255, 255, 0.8)", maxWidth: "700px", margin: "0 auto 48px auto" }}>
                Need full certification reports, physical test records, or detailed specs? Our QA representatives are ready to supply complete documentation.
              </p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <Link className="btn btn-ghost" href="/contact" style={{ background: "var(--paper)", color: "var(--ink)", borderColor: "var(--paper)" }}>
                  Get in Touch
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
