import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { FluidArchDivider } from "@/components/amr/FluidArchDivider";
import { OrganicShape } from "@/components/amr/OrganicShape";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const titleParts = product.name.split(' ');
  const firstPart = titleParts[0];
  const otherParts = titleParts.slice(1).join(' ');

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/catalog" className="inline-flex items-center text-sm font-bold text-primary mb-12 hover:gap-2 transition-all">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Catalog
          </Link>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 relative w-full">
               <OrganicShape type="blob" color="bg-primary-container" className="top-[-50px] left-[-50px] w-full h-full opacity-10" />
               <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-ambient bg-surface-low">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover"
                    priority
                  />
               </div>
            </div>

            <div className="flex-1 w-full">
              <span className="bg-secondary/10 text-secondary text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 inline-block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-heading font-black tracking-tighter leading-tight mb-6 uppercase">
                {firstPart} <br />
                <span className="text-primary italic">{otherParts}</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-12">
                {product.fullDescription}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-surface-low p-8 rounded-3xl mb-12">
                {product.packingTypes.map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-1">Pack Size</p>
                    <p className="text-xl font-heading font-bold text-primary">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="flex-1 rounded-full uppercase font-black tracking-widest shadow-xl">Request Quote</Button>
                <Button variant="outline" size="lg" className="rounded-full uppercase font-black tracking-widest border-primary/20">Technical Sheet</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FluidArchDivider from="bg-background" to="bg-surface-low" />

      <section className="bg-surface-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Section 02 // Packing Options</span>
             <h2 className="text-4xl md:text-6xl font-heading font-black uppercase">Technical <span className="text-secondary italic">Excellence</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {product.packingTypes.map((type, i) => (
              <div key={i} className="bg-background p-12 rounded-[3rem] shadow-ambient hover:-translate-y-2 transition-all duration-500 border border-primary/5">
                <div className="w-14 h-14 rounded-2xl bg-surface-low flex items-center justify-center mb-8 text-secondary">
                   <CheckCircle2 size={24} />
                </div>
                <h4 className="text-2xl font-heading font-black text-primary mb-6 uppercase tracking-tight">
                  {type}
                </h4>
                <p className="text-sm text-foreground/50 leading-relaxed font-light">Premium IQF packaging maintaining -18°C cold chain integrity throughout distribution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="bg-primary rounded-[5rem] p-16 md:p-32 relative overflow-hidden text-center space-y-12">
              <OrganicShape type="blob" color="bg-white" className="absolute -top-48 -left-48 w-[40rem] h-[40rem] opacity-5" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                 <h2 className="text-4xl md:text-8xl font-heading font-black text-white leading-[0.9] uppercase">
                    Ready to expand <br /> <span className="text-secondary italic">your horizon?</span>
                 </h2>
                 <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                    Connect with our export logistics team today for a tailored quote and feasibility study for your region.
                 </p>
                 <div className="pt-8">
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-surface-low px-16 h-16 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl">
                       Request Logistics Study
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

