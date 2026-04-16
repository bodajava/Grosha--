"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/curved-menu";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/quality", label: "Quality" },
    { href: "/logistics", label: "Export" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "100%",
          top: isScrolled ? 20 : 0,
          borderRadius: isScrolled ? "100px" : "0px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.7)" : "rgba(253, 255, 216, 0.8)",
          boxShadow: isScrolled 
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.4)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className={cn(
          "pointer-events-auto backdrop-blur-2xl border-b border-[#eae9db]/50 relative transition-colors duration-500",
          isScrolled && "border border-white/40"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500",
          isScrolled ? "h-[70px]" : "h-[90px]"
        )}>
          <Link
            href="/"
            className="relative w-32 h-10 hover:scale-105 transition-transform flex items-center shrink-0"
          >
            <img
              src="/assets/frouts/WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
              alt="grosha"
              className="object-contain object-left w-[80px]"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-heading font-black tracking-[0.2em] text-[9px] uppercase transition-all duration-300 relative group py-2",
                      isActive ? "text-[#366b7a]" : "text-[#38382f]/50 hover:text-[#366b7a]"
                    )}
                  >
                    {link.label}
                    <motion.span 
                      layoutId="navUnderline"
                      className={cn(
                        "absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#366b7a] transition-transform duration-300 origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )} 
                    />
                  </Link>
                );
              })}
            </div>

            <Button
              asChild
              className={cn(
                "px-10 shadow-xl text-[9px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500",
                isScrolled ? "h-10 bg-[#38382f] text-white" : "h-12 bg-primary-gradient text-white"
              )}
            >
              <Link href="/contact">Inquiry</Link>
            </Button>
          </div>

          {/* Advanced Curved Menu (Mobile Overlay) */}
          <div className="md:hidden">
            <Header />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
