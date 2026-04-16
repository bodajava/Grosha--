"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Thermometer, ShieldCheck, Clock, Zap, Leaf, CheckCircle2, ChevronRight, Utensils } from "lucide-react";
import { NutritionalValues } from "@/components/amr/NutritionalValues";
import { SeasonalCalendar } from "@/components/amr/SeasonalCalendar";

const benefits = [
   { icon: <Zap className="w-6 h-6" />, title: "Nutrient Lock", desc: "Cryogenic freezing at -40°C prevents cellular degradation." },
   { icon: <Thermometer className="w-6 h-6" />, title: "Thermal Integrity", desc: "Maintains peak freshness from harvest to industrial kitchen." },
   { icon: <ShieldCheck className="w-6 h-6" />, title: "Bio-Safety", desc: "No additives. No preservatives. Pure artisanal quality." },
   { icon: <Leaf className="w-6 h-6" />, title: "Eco-Harvest", desc: "Sustainably sourced from Egypt's richest agricultural zones." }
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = use(params);
   const product = products.find((p) => p.id === id);

   if (!product) {
      return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdffd8]">
            <h1 className="text-4xl font-heading mb-8">Product not found</h1>
            <Button asChild variant="outline">
               <Link href="/products">Back to Catalog</Link>
            </Button>
         </div>
      );
   }

   return (
      <main className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
         <Navbar />

         <section className="pt-32 md:pt-48 pb-24 px-6 md:px-12 relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">

               {/* Left Side: Editorial Image Layout */}
               <div className="w-full space-y-12">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="relative aspect-square rounded-[6rem] overflow-hidden border border-[#eae9db] shadow-ambient bg-white"
                  >
                     <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                     />
                     <div className="absolute top-8 left-8">
                        <div className="bg-[#38382f] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl">
                           <div className="w-2 h-2 rounded-full bg-[#ade2f4] animate-pulse" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em]">Premium IQF Origin</span>
                        </div>
                     </div>
                  </motion.div>

                  {/* Circular Thumbnails */}
                  <div className="flex gap-6 justify-center lg:justify-start px-4">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="w-24 h-24 rounded-full border-2 border-white overflow-hidden shadow-lg hover:scale-110 transition-transform cursor-pointer grayscale hover:grayscale-0">
                           <Image src={product.image} alt="detail" width={100} height={100} className="object-cover h-full" />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Side: Professional Content */}
               <div className="space-y-12">
                  <header className="space-y-8">
                     <Link href="/products" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#9a5035] hover:gap-5 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Return to catalog
                     </Link>

                     <div className="space-y-4">
                        <span className="text-[#366b7a] font-black uppercase tracking-[0.5em] text-[10px] block">Global Agricultural Standard</span>
                        <h1 className="text-6xl md:text-[8rem] font-heading font-black leading-[0.85] tracking-tighter uppercase text-[#38382f]">
                           {product.name}
                        </h1>
                     </div>

                     <p className="text-xl md:text-2xl text-[#65655a] leading-relaxed font-medium">
                        {product.shortDescription}
                     </p>
                  </header>

                  {/* Benefit Grid: The Art of IQF */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {benefits.map((benefit, i) => (
                        <div key={i} className="p-8 bg-white/50 rounded-[2.5rem] border border-[#eae9db]/50 flex gap-6 group hover:bg-white transition-all">
                           <div className="w-12 h-12 rounded-2xl bg-[#fcf9ef] flex items-center justify-center text-[#366b7a] shrink-0 group-hover:bg-[#366b7a] group-hover:text-white transition-colors">
                              {benefit.icon}
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-lg font-black uppercase tracking-tight">{benefit.title}</h4>
                              <p className="text-xs text-[#65655a] font-medium leading-relaxed">{benefit.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Action Section */}
                  <div className="pt-12 space-y-8 border-t border-[#eae9db]">
                     <div className="flex flex-wrap gap-8">
                        <div className="space-y-2">
                           <p className="text-[10px] font-black uppercase tracking-widest text-[#366b7a]/40">Variety</p>
                           <p className="text-sm font-black uppercase">{product.types?.join(" / ") || "Standard IQF"}</p>
                        </div>
                        <div className="space-y-2 border-l border-[#eae9db] pl-8">
                           <p className="text-[10px] font-black uppercase tracking-widest text-[#366b7a]/40">Shipping Temp</p>
                           <p className="text-sm font-black uppercase">-18°C Controlled</p>
                        </div>
                     </div>

                     <Button asChild className="h-24 px-20 text-[10px] font-black uppercase tracking-[0.4em] rounded-full bg-primary-gradient text-white shadow-2xl hover:scale-105 transition-all border-none">
                        <Link href="/contact" className="flex items-center gap-4">
                           Request Commercial Quote <ChevronRight className="w-4 h-4" />
                        </Link>
                     </Button>
                  </div>
               </div>
            </div>
         </section>

         {/* Culinary Versatility Grid */}
         <section className="py-40 px-6 md:px-12 bg-[#fcf9ef]">
            <div className="max-w-7xl mx-auto space-y-24">
               <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-[0.85] mb-8">Culinary <br /> <span className="text-[#366b7a] italic">Versatility.</span></h2>
                  <p className="text-xl text-[#65655a] font-medium">Engineered for perfection across multiple culinary applications, from industrial food processing to boutique artisanal kitchens.</p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                  <div className="lg:col-span-2 relative rounded-[4rem] overflow-hidden group border border-[#eae9db]">
                     <Image src={product.image} alt="app" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end">
                        <Utensils className="w-10 h-10 text-[#ade2f4] mb-4" />
                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">High-End Gastronomy</h4>
                        <p className="text-white/60 text-sm font-medium">Perfect for consistent texture in creative desserts.</p>
                     </div>
                  </div>
                  <div className="relative rounded-[4rem] overflow-hidden group border border-[#eae9db]">
                     <div className="absolute inset-0 bg-[#38382f] p-12 flex flex-col justify-center text-center space-y-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#ade2f4]">Usage Case</p>
                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Healthy <br /> Juices</h4>
                        <div className="h-px w-20 bg-[#ade2f4]/30 mx-auto" />
                        <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Retains 99% Nutrients</p>
                     </div>
                  </div>
                  <div className="relative rounded-[4rem] overflow-hidden group border border-[#eae9db]">
                     <Image src={product.image} alt="app" fill className="object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="absolute inset-0 p-12 flex flex-col justify-between">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white">
                           <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-3xl font-black text-[#38382f] uppercase tracking-tighter group-hover:text-white transition-colors">Global <br /> Export</h4>
                     </div>
                  </div>
                  <div className="lg:col-span-2 bg-white rounded-[4rem] p-12 border border-[#eae9db] flex flex-col justify-center">
                     <p className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-[#38382f] group-hover:translate-x-4 transition-transform">Industrial <br /> Scaling.</p>
                     <p className="text-[#65655a] font-medium mt-6">Optimized for consistent batch processing and industrial scale distribution.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Technical Deep Dive */}
         <section className="py-40 px-6 md:px-12 bg-[#fdffd8]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
               <div className="space-y-16">
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 rounded-[2.5rem] bg-[#366b7a] flex items-center justify-center text-white shadow-xl shadow-[#366b7a]/20">
                        <Database className="w-10 h-10" />
                     </div>
                     <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none text-[#38382f]">Nutrition & <br /> Seasonality.</h2>
                  </div>
                  <NutritionalValues nutrition={product.nutrition} />
               </div>

               <div className="space-y-12">
                  <div className="bg-white p-12 rounded-[5rem] border border-[#eae9db] shadow-ambient">
                     <SeasonalCalendar months={product.seasonalCalendar} />
                  </div>
                  <div className="p-12 bg-[#366b7a] rounded-[5rem] text-white space-y-8 shadow-ambient">
                     <h4 className="text-2xl font-black uppercase tracking-tight">Packing Logistics</h4>
                     <div className="grid grid-cols-2 gap-8">
                        {product.packingTypes.map((type, i) => (
                           <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                              <CheckCircle2 className="w-5 h-5 text-[#ade2f4]" />
                              <span className="text-sm font-black uppercase">{type}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}

const Database = ({ className }: { className?: string }) => (
   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zM4 7c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 12c0 2 1 3 3 3h10c2 0 3-1 3-3" />
   </svg>
);
