"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/amr/Navbar";
import { Footer } from "@/components/amr/Footer";
import { ProductCard } from "@/components/amr/ProductCard";
import { products } from "@/lib/data";
import { Search } from "lucide-react";

const categories = [
  { id: "all", label: "All Products" },
  { id: "Fruits", label: "Berries & Fruits" },
  { id: "Vegetables", label: "IQF Vegetables" }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not([data-revealed])');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => {
        (el as HTMLElement).dataset.revealed = 'true';
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [activeCategory, searchQuery]);

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

  return (
    <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
      {/* Editorial side-rails */}
      <div className="side-rail right">
        <span className="rail-text">GROSHA — Vol. 01 · Issue Nº 01 · Product Catalog</span>
      </div>
      <div className="side-rail left">
        <span className="rail-text">IQF Fruits · IQF Vegetables · Non-GMO · Premium</span>
      </div>

      <div className="shell">
        <Navbar />

        {/* HERO SECTION */}
        <section className="hero" id="products-hero" style={{ paddingBottom: "60px" }}>
          <div className="container">
            <div className="sec-rule">
              <span className="roman">I.</span>
              <span className="meta-grp">
                <span>Products / Curated Inventory</span>
                <span className="dot-mark">•</span>
                <span>GROSHA / Volume 01</span>
              </span>
              <span>001 / 002</span>
            </div>
            
            <div className="hero-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div className="hero-copy" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                <span className="label" data-reveal>NATURE'S FINEST INVENTORY <span className="ix">· Nº 05</span></span>
                <h1 className="display" data-reveal style={{ fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 0.9 }}>
                  Artisan Frozen <span className="coral italic">Excellence</span><span className="dot">.</span>
                </h1>
                <p className="lead" data-reveal style={{ margin: "24px auto 0 auto", maxWidth: "700px" }}>
                  Preserving the vibrant integrity of nature's finest harvests through advanced cryogenic precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER & SEARCH BAR */}
        <section style={{ borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)", padding: "24px 0", background: "var(--bone)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="btn btn-ghost"
                    style={{
                      background: activeCategory === cat.id ? "var(--ink)" : "var(--paper)",
                      color: activeCategory === cat.id ? "var(--paper)" : "var(--ink)",
                      borderColor: "var(--line-soft)",
                      padding: "10px 24px",
                      fontSize: "10px"
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div style={{ position: "relative", width: "100%", maxWidth: "320px" }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catalog..."
                  style={{
                    width: "100%",
                    padding: "14px 20px 14px 44px",
                    borderRadius: "30px",
                    background: "var(--paper)",
                    border: "1px solid var(--line-soft)",
                    color: "var(--ink)",
                    fontSize: "13px",
                    outline: "none"
                  }}
                />
                <Search size={16} style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", color: "var(--ink-mute)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "100px 0" }} data-reveal>
                <h2 className="display" style={{ fontSize: "28px" }}>No products matched your search.</h2>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  style={{ marginTop: "24px", background: "none", border: "none", textDecoration: "underline", color: "var(--coral)", fontWeight: 900, cursor: "pointer", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                {/* Fruits Section */}
                {fruits.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                      <h2 className="display" style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>IQF <span className="coral italic">Fruits.</span></h2>
                      <div style={{ flex: 1, height: "1px", background: "var(--line-soft)" }} />
                    </div>
                    <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
                      {fruits.map((product) => (
                        <div key={product.id} data-reveal>
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vegetables Section */}
                {vegetables.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                      <h2 className="display" style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>IQF <span className="olive italic">Vegetables.</span></h2>
                      <div style={{ flex: 1, height: "1px", background: "var(--line-soft)" }} />
                    </div>
                    <div className="lab-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
                      {vegetables.map((product) => (
                        <div key={product.id} data-reveal>
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
