"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-[4rem] border border-[#eae9db] overflow-hidden flex flex-col shadow-sm group-hover:shadow-ambient transition-all duration-500 h-full"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#fcf9ef] flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Branded Badge from Stitch */}
          <div className="absolute top-6 left-6 z-10">
             <div className="bg-[#38382f] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#ade2f4] animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">Premium IQF</span>
             </div>
          </div>

          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-10 flex flex-col justify-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9a5035]/60 mb-2">
            {product.category}
          </span>
          <h3 className="text-2xl font-heading font-black tracking-tighter group-hover:text-primary transition-colors uppercase leading-[0.9]">
            {product.name}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};
