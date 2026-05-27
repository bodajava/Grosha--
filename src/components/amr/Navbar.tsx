"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><b>AF / 2026</b> &nbsp;·&nbsp; Vol. 01 / Issue Nº 01</span>
          <span className="mid">
            <span>Filed under <b className="coral">Artisan IQF · Cold Chain</b></span>
            <span>Giza, Egypt · Global Delivery</span>
          </span>
          <span className="right">
            <Link className="topbar-link" href="/contact"><span className="pulse"></span>Export ready · v1.0</Link>
            <span><b>EN</b> · AR</span>
          </span>
        </div>
      </div>

      <header className={`nav ${isHidden ? "is-hidden" : ""}`}>
        <div className="container nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">
              <Image
                src="/assets/mpo90tsn-WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
                alt="GROSHA"
                width={80}
                height={36}
                className="object-contain"
                style={{ height: '36px', width: 'auto' }}
                priority
              />
            </span>
            <span>GROSHA</span>
            <span className="brand-meta"><b>Export Nº 01</b>Giza / Egypt / Global</span>
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#products">Products<span className="num">12</span></Link></li>
              <li><Link href="/#quality">Quality</Link></li>
              <li><Link href="/#logistics">Logistics</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="nav-side">
            <Link className="nav-cta ghost" href="/#products">Catalog</Link>
            <Link className="nav-cta" href="/contact">Get a Quote</Link>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden block p-2 text-ink" aria-label="Toggle Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <span className="status-dot" aria-hidden="true"></span>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[var(--paper)] z-[999] p-8 flex flex-col justify-between md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/" className="brand" onClick={() => setIsMenuOpen(false)}>
              <span className="brand-mark">
                <Image
                  src="/assets/mpo90tsn-WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
                  alt="GROSHA"
                  width={80}
                  height={36}
                  className="object-contain"
                  style={{ height: '36px', width: 'auto' }}
                />
              </span>
              <span>GROSHA</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-xl font-bold text-ink" aria-label="Close Menu">
              ×
            </button>
          </div>

          <nav className="my-10">
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold font-sans text-ink hover:text-coral transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#products" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold font-sans text-ink hover:text-coral transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#quality" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold font-sans text-ink hover:text-coral transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/#logistics" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold font-sans text-ink hover:text-coral transition-colors">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold font-sans text-ink hover:text-coral transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <Link href="/#products" onClick={() => setIsMenuOpen(false)} className="nav-cta ghost text-center py-4 block">
              Catalog
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="nav-cta text-center py-4 block">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

