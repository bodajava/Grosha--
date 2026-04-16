"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { FluidArchDivider } from "@/components/amr/FluidArchDivider";
import { Thermometer, Microscope, Cpu, CheckCircle2, Leaf, Zap, UserX, ScanQrCode, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const workflowSteps = [
  { step: "01", title: "Harvest", desc: "Sourced within 4 hours." },
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
    color: "text-[#366b7a]"
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "MOLECULAR ANALYSIS",
    description: "Every batch undergoes rigorous microbial and chemical testing in our ISO-certified laboratories to meet global safety standards.",
    bullets: ["Purity Level: 99.9%", "Microbial safety", "Chemical purity"],
    color: "text-[#9a5035]"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "UNBROKEN COLD CHAIN",
    description: "Our logistics network is monitored 24/7 with real-time IoT sensors. From our blast freezers to your doorstep, the temperature never deviates.",
    bullets: ["24/7 IoT Monitoring", "Real-time thermal alerts", "End-to-end transparency"],
    color: "text-[#7c6103]"
  }
];

export default function QualityPage() {
  return (
    <main className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12 bg-[#fdffd8]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-5 py-2 bg-[#ade2f4]/30 rounded-full w-fit"
            >
              <ShieldCheck className="w-4 h-4 text-[#366b7a]" />
              <span className="text-[#366b7a] text-[10px] font-black uppercase tracking-[0.2em]">HACCP Certified System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-heading font-black tracking-tighter leading-[0.85] uppercase text-[#38382f]"
            >
              FROZEN AT THE <br /> PEAK OF <span className="text-[#366b7a] italic underline decoration-wavy decoration-1 underline-offset-8">PURE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#65655a] leading-relaxed max-w-2xl font-medium"
            >
              Beyond just cold, we apply rigorous scientific standards to ensure every shipment meets international gastronomic benchmarks.
            </motion.p>

            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 px-6 py-4 bg-white rounded-2xl border border-[#eae9db] shadow-sm">
                <Thermometer className="w-5 h-5 text-[#366b7a]" />
                <span className="text-[10px] font-black uppercase tracking-wider">-40°C IQF Technology</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-4 bg-white rounded-2xl border border-[#eae9db] shadow-sm">
                <Award className="w-5 h-5 text-[#9a5035]" />
                <span className="text-[10px] font-black uppercase tracking-wider">ISO 9001 Certified</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative aspect-square w-full max-w-xl"
          >
            {/* Circular Image Mask like Stitch */}
            <div className="absolute inset-0 bg-[#366b7a]/5 rounded-full scale-110" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-ambient">
              <Image
                src="/assets/real_Image/cold_plunge_therapy.jpg"
                alt="Quality Control Scientist"
                fill
                className="object-cover"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-[#eae9db] text-center"
            >
              <p className="text-[10px] font-black text-[#366b7a] uppercase mb-1">Purity Level</p>
              <p className="text-3xl font-black text-[#38382f]">99.9%</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Badge Bar */}
      <section className="bg-[#38382f] py-12 px-6 md:px-12 flex flex-wrap justify-center gap-12 md:gap-32">
        <div className="text-center group">
          <p className="text-[#ade2f4] text-xs font-black uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">Global Safety</p>
          <p className="text-white text-3xl font-black uppercase tracking-tighter">Certified</p>
        </div>
        <div className="text-center group border-x border-white/10 px-12 md:px-32">
          <p className="text-[#ade2f4] text-xs font-black uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">Contact Risk</p>
          <p className="text-white text-3xl font-black uppercase tracking-tighter">Zero Contact</p>
        </div>
        <div className="text-center group">
          <p className="text-[#ade2f4] text-xs font-black uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">Freezing Speed</p>
          <p className="text-white text-3xl font-black uppercase tracking-tighter">Ultra Blast</p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 px-6 md:px-12 bg-[#fcf9ef]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#366b7a]">Systematic Excellence</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter text-[#38382f]">Precision Workflow.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-[#eae9db] shadow-sm hover:shadow-ambient transition-all text-center relative overflow-hidden group"
              >
                <span className="absolute -top-4 -left-4 text-8xl font-black text-[#fcf9ef] group-hover:text-[#ade2f4]/30 transition-colors">{step.step}</span>
                <h4 className="relative z-10 text-2xl font-black uppercase tracking-tight text-[#38382f] mb-4">{step.title}</h4>
                <p className="relative z-10 text-[#65655a] text-xs font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Pillars Section */}
      <section className="py-32 px-6 md:px-12 bg-[#fdffd8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {qualityValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[4rem] shadow-ambient border border-[#eae9db]/30 space-y-8 h-full flex flex-col group hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-[#fcf9ef] flex items-center justify-center ${value.color} group-hover:scale-110 transition-transform shadow-sm`}>
                {value.icon}
              </div>
              <h3 className="text-3xl font-heading font-black uppercase tracking-tight leading-tight text-[#38382f]">{value.title}</h3>
              <p className="text-[#65655a] text-sm leading-relaxed flex-1 font-medium">{value.description}</p>

              <ul className="space-y-3 pt-6">
                {value.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-wider text-[#38382f]">
                    <CheckCircle2 className={`w-4 h-4 ${value.color}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#366b7a] rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-ambient">
            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] uppercase tracking-tighter">
                Connect with our <br /> <span className="text-[#ade2f4] italic underline decoration-wavy decoration-1 underline-offset-8">Quality Experts.</span>
              </h2>
              <div className="flex justify-center gap-6 pt-8">
                <button className="h-20 px-16 text-xs font-black uppercase tracking-[0.3em] rounded-full bg-[#f8d472] text-[#463600] hover:bg-white hover:scale-105 transition-all shadow-xl">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
