"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { products } from "@/lib/data";

type Category = "All" | "Fruits" | "Vegetables";

interface FilterState {
  activeCategory: Category;
  setActiveCategory: (c: Category) => void;
  fruitCount: number;
  vegCount: number;
  totalCount: number;
  filteredProducts: typeof products;
}

const FilterContext = createContext<FilterState | null>(null);

function useFilterState(): FilterState {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilterState must be used within ProductProvider");
  return ctx;
}

export function ProductProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

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
  }, [activeCategory]);

  const fruitCount = products.filter(p => p.category === "Fruits").length;
  const vegCount = products.filter(p => p.category === "Vegetables").length;
  const totalCount = products.length;

  const filteredProducts = products.filter(p => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  const value: FilterState = { activeCategory, setActiveCategory, fruitCount, vegCount, totalCount, filteredProducts };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export function ProductPills() {
  const { activeCategory, setActiveCategory, fruitCount, vegCount, totalCount } = useFilterState();

  return (
    <div className="pills" data-reveal="right">
      <button
        onClick={() => setActiveCategory("All")}
        className={`pill ${activeCategory === "All" ? "active" : ""}`}
      >
        All<span className="count">{totalCount}</span>
      </button>
      <button
        onClick={() => setActiveCategory("Fruits")}
        className={`pill ${activeCategory === "Fruits" ? "active" : ""}`}
      >
        Fruits<span className="count">{fruitCount}</span>
      </button>
      <button
        onClick={() => setActiveCategory("Vegetables")}
        className={`pill ${activeCategory === "Vegetables" ? "active" : ""}`}
      >
        Vegetables<span className="count">{vegCount}</span>
      </button>
    </div>
  );
}

export function ProductGrid() {
  const { filteredProducts } = useFilterState();

  return (
    <div className="labs-grid">
      {filteredProducts.map((product, index) => {
        const codeNum = `AF-${(index + 1).toString().padStart(3, "0")}`;
        return (
          <Link key={product.id} href={`/products/${product.id}`} className="lab" data-reveal style={{ textDecoration: 'none' }}>
            <div className="lab-img">
              <span className="badge">{product.category === "Fruits" ? "Fruit" : "Vegetable"}</span>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="num-row">
              <span>{codeNum}</span>
              <span>IQF</span>
            </div>
            <h4>{product.name}</h4>
            <p>{product.shortDescription}</p>
            <div className="arrow-mark" aria-label={`Inquire about ${product.name}`}>
              <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
