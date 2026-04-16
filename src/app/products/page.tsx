"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { ProductCard } from "@/components/amr/ProductCard";
import { products } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const categories = [
  { id: "all", label: "All Product" },
  { id: "Fruits", label: "Berries & Fruits" },
  { id: "Vegetables", label: "IQF Vegetables" },
  { id: "custom", label: "Custom Packaging" }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const q = searchQuery.toLowerCase().trim();
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = q === "" || 
                          p.name.toLowerCase().includes(q) || 
                          p.shortDescription.toLowerCase().includes(q) ||
                          p.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const fruits = filteredProducts.filter(p => p.category === "Fruits");
  const vegetables = filteredProducts.filter(p => p.category === "Vegetables");

  const hasResults = filteredProducts.length > 0;

  return (
    <main className="relative min-h-screen bg-[#fdffd8] text-[#38382f] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 px-6 md:px-12 bg-[#fdffd8]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[10rem] font-heading font-black tracking-tighter leading-[0.8] uppercase"
          >
            Artisan Frozen <br /> <span className="text-[#f8d472] italic underline decoration-wavy decoration-1 underline-offset-8">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#65655a] max-w-3xl mx-auto font-medium"
          >
            Preserving the vibrant integrity of nature's finest harvests through advanced cryogenic precision.
          </motion.p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-20 z-40 bg-[#fdffd8]/80 backdrop-blur-xl border-y border-[#eae9db] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeCategory === cat.id
                    ? "bg-[#38382f] text-white shadow-lg"
                    : "bg-white text-[#38382f] border border-[#eae9db] hover:bg-[#fcf9ef]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full bg-white rounded-full py-4 pl-12 pr-6 text-xs font-medium border border-[#eae9db] focus:outline-none focus:ring-2 focus:ring-[#366b7a]/20 transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#828176]" />
          </div>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">

          {!hasResults ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center"
            >
              <h2 className="text-4xl font-heading font-black uppercase text-[#828176]/40">No products found match your search.</h2>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                className="mt-8 text-xs font-black uppercase tracking-widest text-[#366b7a] underline"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <div className="space-y-32">
              {/* IQF Fruits Section */}
              {fruits.length > 0 && (
                <div className="space-y-16">
                  <div className="flex items-center gap-8 px-4">
                    <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter shrink-0">IQF <span className="text-[#9a5035] italic">Fruits.</span></h2>
                    <div className="h-px flex-1 bg-[#eae9db]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {fruits.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {/* IQF Vegetables Section */}
              {vegetables.length > 0 && (
                <div className="space-y-16">
                  <div className="flex items-center gap-8 px-4">
                    <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter shrink-0">IQF <span className="text-[#366b7a] italic">Vegetables.</span></h2>
                    <div className="h-px flex-1 bg-[#eae9db]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                    {vegetables.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
