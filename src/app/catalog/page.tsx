"use client";

import React, { useRef } from "react";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { ProductCard } from "@/components/amr/ProductCard";
import { FluidArchDivider } from "@/components/amr/FluidArchDivider";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { products } from "@/lib/data";

export default function CatalogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".product-item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#366b7a]/10 text-[#366b7a] text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full mb-12 inline-block">
            Product Catalog // 2026
          </span>
          <h1 className="text-6xl md:text-[8.5rem] font-heading font-black tracking-tighter leading-[0.85] text-left uppercase max-w-4xl">
              NATURE'S <br /> <span className="text-[#9a5035] italic">FINEST</span> INVENTORY
          </h1>
          <p className="text-xl text-[#65655a] leading-relaxed max-w-2xl font-light mt-12">
            Sustainably sourced, flash-frozen at the peak of ripeness. Explore our curated selection of IQF ingredients handled with artisanal precision in a temperature-controlled flow.
          </p>
        </div>
      </section>

      <FluidArchDivider to="bg-[#fcf9ef]" />

      {/* Product Grid */}
      <section className="bg-[#fcf9ef] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-20">
             {[ "All Products", "Fruits", "Vegetables", "Berries", "Packaging" ].map((cat) => {
               const isActive = cat === "All Products";
               return (
                 <Button 
                   key={cat} 
                   className={`px-8 h-12 rounded-full font-bold transition-all duration-300 ${isActive ? "bg-[#f8d472] text-[#463600] shadow-md hover:scale-105" : "bg-white text-[#65655a] shadow-sm hover:bg-[#eae9db] hover:text-[#38382f]"}`}
                 >
                    {cat}
                 </Button>
               );
             })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {products.map((product, i) => (
              <div 
                key={product.id} 
                className="product-item"
                style={{ 
                  marginTop: i % 3 === 1 ? '4rem' : i % 3 === 2 ? '8rem' : '0' 
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
