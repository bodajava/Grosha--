import type { Metadata } from "next";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Merv | Premium IQF Frozen Exports Inquiries | اتصل بنا",
  description: "Contact Merv for bulk IQF frozen fruit and vegetable exports. Get a quote, request samples, or inquire about partnerships. اتصل بميرف لتصدير الخضروات والفواكه المجمدة.",
  openGraph: {
    title: "Contact Merv | Premium IQF Frozen Exports Inquiries",
    description: "Contact Merv for bulk IQF frozen fruit and vegetable exports. Get a quote or request samples.",
  },
};

export default function ContactPage() {
  return (
    <RevealObserver>
      <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
        <div className="side-rail right">
          <span className="rail-text">Merv — Vol. 01 · Issue Nº 01 · Contact</span>
        </div>
        <div className="side-rail left">
          <span className="rail-text">Inquiries · Bulk Orders · Customer Relations</span>
        </div>

        <div className="shell">
          <Navbar />

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

              <div className="contact-grid">
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

                <div className="lab-card" data-reveal style={{ background: "var(--paper-warm)", border: "1px solid var(--line-soft)", padding: "40px", borderRadius: "32px" }}>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </RevealObserver>
  );
}
