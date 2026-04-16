"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { Button } from "@/components/ui/button";
import { Globe2, Package, Plane, Database, MapPin, ArrowUpRight, ShieldCheck, Thermometer, Anchor, Truck } from "lucide-react";
import { motion } from "framer-motion";

const hubs = [
  { region: "Europe", city: "Rotterdam Hub", latency: "Strategic Gateway", color: "border-[#366b7a]/20" },
  { region: "North America", city: "NJ Distribution", latency: "East Coast Hub", color: "border-[#9a5035]/20" },
  { region: "Asia", city: "Singapore Terminal", latency: "Far East Logistics", color: "border-[#7c6103]/20" }
];

const logisticSolutions = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Thermal Armor",
    description: "Eco-friendly, multi-layer thermal insulation designed to withstand 72-hour transit windows and maintain peak freshness.",
    color: "text-[#366b7a]"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Express Air Route",
    description: "Next-day delivery options for high-value perishable products to major metropolitan cities across the globe.",
    color: "text-[#9a5035]"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "IoT Dashboard",
    description: "Real-time IoT temperature monitoring and GPS tracking accessible via our client portal for full transparency.",
    color: "text-[#7c6103]"
  }
];

export default function LogisticsPage() {
  return (
    <main className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12 bg-[#fdffd8]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-5 py-2 bg-[#ffdbcf]/30 rounded-full w-fit"
            >
              <Globe2 className="w-4 h-4 text-[#9a5035]" />
              <span className="text-[#9a5035] text-[10px] font-black uppercase tracking-[0.2em]">Global Export Infrastructure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-heading font-black tracking-tighter leading-[0.85] uppercase text-[#38382f]"
            >
              GLOBAL EXPORT <br /> <span className="text-[#366b7a] italic underline decoration-wavy decoration-1 underline-offset-8">REACH.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#65655a] leading-relaxed max-w-2xl font-medium"
            >
              Navigating the world's most complex logistics routes to bring artisanal frozen quality from our source to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <Button asChild className="h-20 px-16 text-xs font-black uppercase tracking-[0.3em] rounded-full bg-primary-gradient text-white hover:scale-105 transition-all shadow-xl group border-none">
                <Link href="/contact" className="flex items-center gap-3">
                  Feasibility Study <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative aspect-[4/5] w-full max-w-xl order-1 lg:order-2"
          >
            {/* Organic Arch Frame */}
            <div className="absolute inset-0 bg-[#366b7a]/5 arch-mask scale-110" />
            <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border border-[#eae9db] shadow-ambient">
              <Image
                src="/assets/real_Image/sauteed_edamame.jpg"
                alt="Global Logistic Container"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-[3rem] shadow-ambient border border-[#eae9db] flex items-center gap-6 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-[#fcf9ef] flex items-center justify-center text-[#366b7a]">
                <Thermometer className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#366b7a] mb-1">Thermal Integrity</p>
                <p className="text-lg font-black text-[#38382f] tracking-tight">-18.4°C Global Standard</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capacity/Scale Stats Bar */}
      <section className="bg-[#366b7a] py-16 px-6 md:px-12 flex flex-wrap justify-center gap-12 md:gap-32">
        <div className="text-center group">
          <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">Sea Routes</p>
          <div className="flex items-end gap-2 text-white">
            <Anchor className="w-6 h-6 mb-1 opacity-50" />
            <p className="text-4xl font-black uppercase tracking-tighter">40+ Ports</p>
          </div>
        </div>
        <div className="text-center group border-x border-white/10 px-12 md:px-32">
          <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">Network Strength</p>
          <div className="flex items-end gap-2 text-white">
            <MapPin className="w-6 h-6 mb-1 opacity-50" />
            <p className="text-4xl font-black uppercase tracking-tighter">15+ Hubs</p>
          </div>
        </div>
        <div className="text-center group">
          <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">Global Presence</p>
          <div className="flex items-end gap-2 text-white">
            <Globe2 className="w-6 h-6 mb-1 opacity-50" />
            <p className="text-4xl font-black uppercase tracking-tighter">3 Continents</p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-40 px-6 md:px-12 bg-[#fcf9ef]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#9a5035]">Logistics Powerhouse</h2>
            <h3 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter text-[#38382f]">Smart Cold Chain.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logisticSolutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[4rem] shadow-ambient border border-[#eae9db]/30 space-y-8 flex flex-col group hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-[2rem] bg-[#fcf9ef] flex items-center justify-center ${sol.color} shadow-sm group-hover:rotate-6 transition-transform`}>
                  {sol.icon}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none text-[#38382f]">{sol.title}</h3>
                <p className="text-[#65655a] font-medium leading-relaxed">{sol.description}</p>
                <div className="flex items-center gap-4 pt-4 mt-auto">
                  <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${sol.color}`}>
                    <ShieldCheck className="w-4 h-4" />
                    Protocol Compliant
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution Hubs Grid */}
      <section className="bg-[#fdffd8] py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-[0.85]">Regional <br /> <span className="text-[#9a5035] italic">Distribution.</span></h2>
              <div className="space-y-6">
                {hubs.map((hub, i) => (
                  <div key={i} className="flex items-center gap-8 p-6 bg-white rounded-3xl border border-[#eae9db]/50 hover:shadow-ambient transition-all group">
                    <div className="w-14 h-14 rounded-full bg-[#fcf9ef] flex items-center justify-center text-[#366b7a] group-hover:bg-[#366b7a] group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#366b7a] mb-1">{hub.region}</p>
                      <p className="text-2xl font-black text-[#38382f] uppercase tracking-tight">{hub.city}</p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 ml-auto opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-x-0 bottom-0 h-[80%] bg-[#366b7a]/5 rounded-t-[20rem]" />
              <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border border-[#eae9db] shadow-ambient">
                <Image
                  src="/assets/frouts/Production.png"
                  alt="Global Distribution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-12 -right-8 z-20 bg-[#38382f] p-8 rounded-[3rem] shadow-2xl text-white">
                <Truck className="w-10 h-10 mb-4 text-[#ade2f4]" />
                <p className="text-2xl font-black uppercase tracking-tight">Active Delivery</p>
                <p className="text-white/60 text-xs font-medium">Real-time GPS tracking active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#fdffd8]">
        <div className="max-w-7xl mx-auto text-center space-y-12 bg-white p-12 md:p-32 rounded-[5rem] shadow-ambient border border-[#eae9db]">
          <h2 className="text-5xl md:text-8xl font-heading font-black text-[#38382f] tracking-tighter uppercase leading-[0.9]">
            Ready to <br /> <span className="text-[#9a5035] italic underline decoration-wavy decoration-1 underline-offset-8">Expand?</span>
          </h2>
          <p className="text-xl text-[#65655a] max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with our export logistics team today for a tailored quote and capacity study for your specific region.
          </p>
          <div className="pt-10">
            <Button asChild className="h-20 px-24 text-xs font-black uppercase tracking-[0.3em] rounded-full bg-[#f8d472] text-[#463600] hover:bg-[#38382f] hover:text-white hover:scale-105 transition-all shadow-xl border-none">
              <Link href="/contact">Start Study</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
