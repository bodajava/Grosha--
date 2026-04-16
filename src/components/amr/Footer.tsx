import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Local SVG replacements for missing social icons in old lucide-react version
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export const Footer = () => {
  return (
    <footer className="bg-surface-high pt-20 md:pt-32 pb-12 px-6 md:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-10">
            <Link href="/" className="relative w-40 h-16 block hover:scale-105 transition-transform">
              <Image
                src="/assets/frouts/WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
                alt="AMR Footer Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-xs">
              Revolutionizing the frozen food industry with precision, passion, and premium quality since 2024.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: TwitterIcon, label: "Twitter" },
                { Icon: LinkedinIcon, label: "Linkedin" }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary/40 hover:text-primary hover:bg-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
            <h5 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Quick Links</h5>
            <ul className="space-y-6">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Quality Assurance", href: "/quality" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations */}
          <div className="space-y-10">
            <h5 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Operations</h5>
            <ul className="space-y-6">
              {[
                { label: "Logistics", href: "/logistics" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors flex items-center gap-3">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="space-y-10">
            <h5 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Stay Connected</h5>
            <div className="space-y-6">
              <p className="text-sm text-foreground/60 leading-relaxed font-light">
                Subscribe for industry news and harvest updates.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-background border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
                />
                <Button className="absolute right-2 top-2 rounded-xl bg-primary text-white px-6 h-10 text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-foreground/30">
            <Link href="/" className="relative w-24 h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                fill
                src="/assets/frouts/WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
                alt="AMR Footer Logo"
                className="object-contain"
              />
            </Link>
            <span className="hidden md:block w-1 h-1 rounded-full bg-foreground/10" />
            <span>All rights reserved &copy; 2024</span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Crafted with care</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform">
              ✨
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
