"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { FluidArchDivider } from "@/components/amr/FluidArchDivider";
import { OrganicShape } from "@/components/amr/OrganicShape";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, Tractor, Search, Thermometer, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.utils.toArray(".reveal-item").forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full inline-block">
              Our Culinary Ethos
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9] uppercase text-left">
              <span className="text-secondary">
                Crafting
                Freshness
              </span>
              <br />
              <span className="text-primary italic">Beyond Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg font-light mt-8">
              Discover the story of AMR FROIZZ, where artisanal dedication meets modern preservation to bring the world's finest harvests to your kitchen.
            </p>
          </div>

          <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl-ambient border border-white/20">
            <Image
              src="/assets/real_Image/sunrise_harvest.jpg"
              alt="Artisanal Harvest"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase leading-tight">
            Rooted in Nature, <br /> Driven by <span className="text-primary italic">Innovation</span>
          </h2>
          <p className="text-foreground/60 max-w-md font-light leading-relaxed">
            Our commitment is simple: preserve the peak of nutritional value and flavor through meticulous harvesting and flash-frozen technology. Every piece of produce tells a story of sustainable farming and uncompromising quality.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="reveal-item bg-background p-10 md:p-12 rounded-[3.5rem] shadow-ambient hover:-translate-y-2 transition-all duration-500 border border-primary/5">
            <div className="w-16 h-16 rounded-3xl bg-surface-low flex items-center justify-center mb-10 text-primary">
              <Leaf size={28} />
            </div>
            <h3 className="text-xl font-heading font-black mb-6 uppercase tracking-tight">
              Ethical Sourcing
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed font-light">
              Working directly with local farmers to ensure sustainable practices and fair trade at every stage of the supply chain.
            </p>
          </div>

          {/* Card 2 */}
          <div className="reveal-item bg-[#FFDBCF] p-10 md:p-12 rounded-[3.5rem] shadow-ambient hover:-translate-y-2 transition-all duration-500 border border-primary/5">
            <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center mb-10 text-secondary">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-heading font-black mb-6 uppercase tracking-tight">
              Cryo-Fresh Tech
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed font-light">
              Advanced flash-freezing locks in cellular integrity and nutritional peak within minutes of harvest, preserving vital purity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="reveal-item bg-white p-10 md:p-12 rounded-[3.5rem] shadow-ambient hover:-translate-y-2 transition-all duration-500 border border-primary/5">
            <div className="w-16 h-16 rounded-3xl bg-surface-low flex items-center justify-center mb-10 text-accent">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-heading font-black mb-6 uppercase tracking-tight">
              Global Standards
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed font-light">
              Maintaining rigorous international quality certifications for export excellence across six continents with 100% transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Harvesting & Logistics Sections */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-40">

          {/* Harvesting */}
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-8 reveal-item order-last lg:order-first">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Section 02 // Harvesting</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] uppercase">
                SUSTAINABLE <br /> <span className="text-secondary italic">HARVESTING</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light max-w-xl">
                Every piece of produce tells a story of sustainable farming and uncompromising quality. We follow natural cycles to ensure ingredients are picked at their absolute peak of nutritional density.
              </p>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-surface-high overflow-hidden relative">
                      <Image
                        fill
                        src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDgQYiDrjshgdoMzufEYeZvAYzsQVLjNh9j095tSW3eVwCacWclrbvGuDl4qoayg8p8shP4vu7_MpfE6DX6RZOHfU2b-vUfi4hVIoxbkgz08ReZfDKFcYKGtogkKBamlmKI0O7v20xCplLd4Od5sE4WNyMPM7UhsBG_BbPzUPnJLjtj7OpVCWHc8mqbEynd4hXf3Gv8jEogM8B47-of7kFwxK5tyI4kF8k997yD3UVW1pmio888XEoJfvZcZWEuKUG0HCSXZ-nxTrc`}
                        alt="Farmer profile"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest leading-relaxed">Partnering with 50+ <br /> regional farms</p>
              </div>
            </div>
            <div className="flex-1 relative aspect-[16/10] w-full rounded-[4rem] overflow-hidden shadow-2xl-ambient reveal-item border border-white/20">
              <Image
                fill
                src="/assets/real_Image/cancer_risk_reduction.jpg"
                className="object-cover"
                alt="Sustainable Harvest"
              />
            </div>
          </div>

          {/* Rapid Logistics */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
            <div className="flex-1 space-y-8 reveal-item">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Section 03 // Logistics</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-[0.9] uppercase">
                RAPID <br /> <span className="text-primary italic">LOGISTICS</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed font-light max-w-xl">
                Harvested goods are transported in climate-controlled environments within **2 hours** to maintain peak vibrancy. Our cold chain is an unbroken promise of freshness from field to table.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="p-8 bg-surface-low rounded-[2rem] border border-white/50">
                  <p className="text-3xl font-heading font-black text-primary mb-2">2H</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Field to Flash</p>
                </div>
                <div className="p-8 bg-surface-low rounded-[2rem] border border-white/50">
                  <p className="text-3xl font-heading font-black text-secondary mb-2">-40°C</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Core Temp Lock</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative aspect-[16/10] w-full rounded-[4rem] overflow-hidden shadow-2xl-ambient reveal-item bg-surface-high border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Thermometer size={120} className="text-primary/10 animate-pulse" />
              </div>
              <Image
                fill
                src="/assets/real_Image/Global Package Shipping Services from the USA.jpg"
                className="object-cover mix-blend-multiply opacity-80"
                alt="Logistics Network"
              />
            </div>
          </div>

          {/* Precision sorting Promise */}
          <div className="bg-primary rounded-[5rem] p-16 md:p-32 reveal-item relative overflow-hidden shadow-2xl-ambient">
            <OrganicShape type="blob" color="bg-white" className="absolute -top-48 -right-48 w-[40rem] h-[40rem] opacity-5" />
            <div className="relative z-10 max-w-3xl text-center mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase leading-tight">
                Our <span className="text-secondary italic">Promise</span> of Freshness
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                Every batch undergoes 12 internal quality checks and 3rd party laboratory validation for pesticide residue, microbial safety, and nutrient density. We don't just freeze; we preserve perfection.
              </p>
              <Button asChild variant="outline" className="px-12 h-16 rounded-full font-black uppercase tracking-widest text-xs border-white/30 text-white hover:bg-white hover:text-primary transition-all shadow-xl">
                <Link href="/products" className="flex items-center">
                  Explore Our Products <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
