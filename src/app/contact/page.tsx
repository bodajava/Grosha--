"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      {/* Editorial side-rails */}
      <div className="side-rail right">
        <span className="rail-text">Merv — Vol. 01 · Issue Nº 01 · Contact</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">Inquiries · Bulk Orders · Customer Relations</span>
      </div>

      <div className="shell">
        <Navbar />

        {/* HERO / CONTACT SECTION */}
        <section className="hero pt-0" id="contact-hero" style={{ paddingBottom: "100px" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">I.</span>
              <span className="meta-grp">
                <span>Contact / Global Inquiries</span>
                <span className="dot-mark">•</span>
                <span>Merv / Volume 01</span>
              </span>
              <span>001 / 002</span>
            </div>
            
            <div className="hero-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "start" }}>
              {/* Left Side: Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                <div className="hero-copy">
                  <span className="label" data-reveal>LET'S CONNECT <span className="ix">· Nº 04</span></span>
                  <h1 className="display" data-reveal>Get in <span className="coral italic">Touch</span><span className="dot">.</span></h1>
                  <p className="lead" data-reveal>Whether you're looking for premium frozen ingredients for your kitchen or scaling bulk exports, our doors are always open.</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                  {[
                    { icon: <MapPin size={24} />, title: "Global Headquarters", detail: "Merv Building, Giza, Egypt", color: "var(--coral)" },
                    { icon: <Phone size={24} />, title: "Direct Inquiry", detail: "+201009778868", color: "var(--olive)" },
                    { icon: <Mail size={24} />, title: "Digital Mailbox", detail: "sales@goldengrainglobal.com", isEmail: true, color: "var(--mustard)" }
                  ].map((item, i) => (
                    <div key={i} className="lab-card" data-reveal style={{ display: "flex", alignItems: "center", gap: "20px", background: "var(--bone)", padding: "20px", borderRadius: "16px", border: "1px solid var(--line-soft)" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, padding: "12px", flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--ink)", marginBottom: "4px" }}>{item.title}</h4>
                        <p style={{ fontSize: "13px", color: "var(--ink-mute)", wordBreak: "break-all" }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lab-card" data-reveal style={{ background: "var(--paper-warm)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "32px" }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", transition: "border 0.2s" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", transition: "border 0.2s" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-mute)", marginLeft: "4px" }}>Message</label>
                    <textarea
                      required
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      style={{ width: "100%", padding: "16px 24px", borderRadius: "16px", background: "var(--paper)", border: "1px solid var(--line-soft)", color: "var(--ink)", outline: "none", fontSize: "14px", resize: "none", transition: "border 0.2s" }}
                      onFocus={(e) => e.target.style.borderColor = "var(--coral)"}
                      onBlur={(e) => e.target.style.borderColor = "var(--line-soft)"}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", borderRadius: "16px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)", color: "#10b981", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      <CheckCircle2 size={18} /> Message Sent Successfully!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px", borderRadius: "16px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)", color: "#ef4444", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", padding: "20px" }}
                  >
                    {isSubmitting ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <span className="arrow">
                          <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}><path d="M5 19L19 5M19 5H8M19 5v11" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
