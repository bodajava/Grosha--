"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { Button } from "@/components/ui/button";
import { FluidArchDivider } from "@/components/amr/FluidArchDivider";
import { OrganicShape } from "@/components/amr/OrganicShape";
import { ProductCard } from "@/components/amr/ProductCard";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Featured products for the home page
const featuredProducts = products.filter(p => ["artichokes", "strawberry", "broccoli"].includes(p.id));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance
    gsap.from(".hero-text-sub", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(".hero-title-reveal", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    });

    gsap.from(".hero-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });

    // Scroll Revelations
    gsap.utils.toArray(".reveal").forEach((elem: any) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
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
      <section className="relative pt-32 md:pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="hero-text-sub bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full inline-block">
                Artisanal IQF Exports
              </span>

              <div className="overflow-hidden">
                <h1 className="hero-title-reveal text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.85] text-left uppercase">
                  PRISTINE <br /> <span className="text-primary italic">HARVEST</span>
                </h1>
              </div>

              <p className="hero-text-sub text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg font-light">
                Preserving nature's finest flavors through innovative cold-chain technology. From harvest to doorstep in its most vital state.
              </p>
            </div>

            <div className="hero-text-sub flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" variant="primaryGradient" className="px-12 text-lg h-16 rounded-full group">
                <Link href="/products">
                  Explore Catalog <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-12 text-lg rounded-full border-primary/20 bg-transparent text-primary hover:bg-primary/5 h-16">
                <Link href="/about">Learn Methodology</Link>
              </Button>
            </div>
          </div>

          <div className="hero-image relative aspect-[4/5] w-full max-w-md mx-auto lg:mr-0 order-first lg:order-last">
            <OrganicShape type="blob" color="bg-primary/5" className="inset-0 scale-150 rotate-45" />
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-2xl-ambient arch-mask border border-white/20">
              <Image
                src="/assets/frouts/Mask Group.png"
                className="object-cover"
                alt="Premium harvest"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="bg-surface-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 leading-[0.9] text-left uppercase">
                GOURMET SELECTIONS
              </h2>
              <p className="text-foreground/60 text-lg font-light mt-6">Sustainably sourced, flash-frozen at the peak of ripeness for global culinary excellence.</p>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold text-lg group bg-transparent border-transparent px-0 hover:bg-transparent">
              <Link href="/products" className="flex items-center">
                View All Products <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className="reveal h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FluidArchDivider from="bg-surface-low" to="bg-background" flip />

      {/* IQF Tech Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="reveal flex-1 w-full max-w-xl rounded-[4rem] p-8 md:p-16 aspect-square relative overflow-hidden border border-white/50 bg-surface-low/50">
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <Image fill className="object-contain scale-125" src="/assets/circle/Background.png" alt="Decorative background pattern" />
              </div>
              <div className="relative w-full h-full">
                <Image fill className="rounded-4xl object-cover  z-1 scale-110" src="/assets/real_Image/trail_origins.jpg" alt="IQF Technology" />
              </div>
              <div className="absolute inset-0 opacity-10 scale-150 rotate-90">
                <Image fill className="object-contain" src="/assets/circle/Background copy.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-12 w-full">
            <div className="reveal space-y-6">
              <h2 className="text-4xl md:text-6xl font-heading font-black leading-[1.1] uppercase text-left">
                LOCKED IN <br /> <span className="text-primary italic">SECONDS</span>
              </h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                Our Individual Quick Freezing (IQF) method ensures that each piece of fruit or vegetable is frozen independently. This prevents clumping and preserves the cellular structure, meaning when you thaw our products, they taste exactly as they did in the field.
              </p>
            </div>

            <div className="space-y-8">
              {[
                "Rapid Lock Tech",
                "Individual Morsel Separation",
                "Molecular Nutrient Lockdown",
                "Anti-Viral Cold Chain"
              ].map((point, i) => (
                <div key={i} className="reveal flex items-center gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-xl font-heading font-bold text-foreground/80 uppercase tracking-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl-ambient">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
              <OrganicShape type="blob" color="bg-white" className="scale-150 rotate-90" />
            </div>

            <div className="relative z-10 max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-7xl font-heading font-black text-white leading-[0.95] uppercase">
                Ready to elevate <br /> your supplies?
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                AMR FROIZZ partners with retailers and distributors worldwide to deliver superior frozen goods. Revolutionizing the industry through precision and passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-surface-low px-12 rounded-full font-black uppercase tracking-widest h-16 shadow-xl border-none">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 rounded-full font-black uppercase tracking-widest h-16">
                  <Link href="/contact">Bulk Inquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
