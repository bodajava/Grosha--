"use client";

import React, { useRef, useState } from "react";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useGSAP(() => {
    gsap.from(".reveal-contact", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

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
    <main ref={containerRef} className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-48 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pb-24">
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-5 space-y-12 order-last lg:order-first">
          <header className="reveal-contact space-y-6">
            <span className="inline-block px-6 py-2 bg-[#ade2f4] text-[#1a5362] rounded-full font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">
              LET'S CONNECT
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-[#38382f] leading-[0.9] tracking-tighter uppercase text-left">
              GET IN <br /> <span className="text-[#366b7a] italic">TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl text-[#000000]/60 max-w-md font-medium leading-relaxed mt-10">
              Whether you're looking for premium frozen ingredients for your kitchen or scaling bulk exports, our doors are always open.
            </p>
          </header>

          <div className="space-y-10">
            {/* Contact Details */}
            {[
              { icon: <MapPin size={24} />, title: "Global Headquarters", detail: "AMR Building, Giza, Egypt" },
              { icon: <Phone size={24} />, title: "Direct Inquiry", detail: "+201009778868" },
              { icon: <Mail size={24} />, title: "Digital Mailbox", detail: "Sales@goldengrainglobal.com", isEmail: true }
            ].map((item, i) => (
              <div key={i} className="reveal-contact flex items-start gap-8 group">
                <div className="w-14 h-14 rounded-2xl bg-[#fcf9ef] flex items-center justify-center text-[#366b7a] group-hover:bg-[#366b7a] group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-[#38382f] uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className={item.isEmail ? "text-xs font-black text-[#366b7a] uppercase tracking-widest" : "text-[#65655a] font-medium leading-relaxed"}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 w-full order-first lg:order-last mb-16 lg:mb-0">
          <div className="reveal-contact bg-[#fcf9ef] p-8 md:p-16 rounded-[4rem] shadow-ambient border border-[#eae9db]/30">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-[#38382f]/40 ml-4 uppercase tracking-[0.2em]">Your Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-8 py-5 bg-white border-transparent focus:border-[#366b7a] focus:ring-4 focus:ring-[#366b7a]/5 rounded-3xl transition-all outline-none font-medium"
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-[#38382f]/40 ml-4 uppercase tracking-[0.2em]">Email Address</label>
                  <input
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-8 py-5 bg-white border-transparent focus:border-[#366b7a] focus:ring-4 focus:ring-[#366b7a]/5 rounded-3xl transition-all outline-none font-medium"
                    placeholder="email@domain.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-[#38382f]/40 ml-4 uppercase tracking-[0.2em]">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-8 py-5 bg-white border-transparent focus:border-[#366b7a] focus:ring-4 focus:ring-[#366b7a]/5 rounded-[2.5rem] transition-all outline-none resize-none font-medium"
                  placeholder="Tell us about your requirements..."
                  rows={6}
                />
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-8 rounded-[2.5rem] flex items-center justify-center gap-4 mb-6"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="font-black uppercase tracking-widest text-xs">Message Sent Successfully!</span>
                    </motion.div>
                  ) : submitStatus === "error" ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-600 p-8 rounded-[2.5rem] flex items-center justify-center gap-4 mb-6"
                    >
                      <span className="font-black uppercase tracking-widest text-xs">Failed to send message. Please try again.</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <Button
                  disabled={isSubmitting}
                  variant="primaryGradient"
                  className="w-full py-10 rounded-full font-heading font-black text-xl shadow-2xl flex items-center justify-center gap-4 group uppercase tracking-widest h-20 transition-all border-none disabled:opacity-50"
                  type="submit"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
