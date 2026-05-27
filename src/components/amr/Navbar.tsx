"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "About",     href: "/#about" },
  { label: "Products",  href: "/#products", num: "12" },
  { label: "Quality",   href: "/#quality" },
  { label: "Logistics", href: "/#logistics" },
  { label: "Contact",   href: "/contact" },
];

export const Navbar = () => {
  const [isHidden, setIsHidden]   = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen]       = useState(false);
  const [animating, setAnimating] = useState(false);

  /* ─── refs for GSAP targets ─── */
  const overlayRef  = useRef<HTMLDivElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const lineRefs    = useRef<(HTMLSpanElement | null)[]>([]);
  const itemRefs    = useRef<(HTMLLIElement | null)[]>([]);
  const footerRef   = useRef<HTMLDivElement>(null);
  const rulerRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const burgerRef   = useRef<HTMLButtonElement>(null);

  /* ─── scroll hide / show ─── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > 120 && y > lastScrollY);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  /* ─── lock body scroll when menu is open ─── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ─── OPEN animation ─── */
  const openMenu = () => {
    if (animating) return;
    setAnimating(true);
    setIsOpen(true);

    const tl = gsap.timeline({ onComplete: () => setAnimating(false) });

    /* overlay fade */
    tl.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );

    /* panel slides in from right */
    tl.fromTo(panelRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.55, ease: "expo.out" },
      "<"
    );

    /* burger lines morph → X */
    if (burgerRef.current) {
      const lines = burgerRef.current.querySelectorAll(".burger-line");
      tl.to(lines[0], { y: 7, rotate: 45, duration: 0.3, ease: "power3.out" }, "<0.15");
      tl.to(lines[1], { opacity: 0, scaleX: 0, duration: 0.2, ease: "power2.in" }, "<");
      tl.to(lines[2], { y: -7, rotate: -45, duration: 0.3, ease: "power3.out" }, "<");
    }

    /* decorative rulers */
    rulerRefs.current.forEach((el, i) => {
      tl.fromTo(el,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: "power3.out", transformOrigin: "left" },
        `<${i * 0.04}`
      );
    });

    /* nav items stagger */
    tl.fromTo(itemRefs.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "expo.out" },
      "<0.05"
    );

    /* footer CTA */
    tl.fromTo(footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      "<0.2"
    );
  };

  /* ─── CLOSE animation ─── */
  const closeMenu = () => {
    if (animating || !isOpen) return;
    setAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setAnimating(false);
      }
    });

    tl.to(itemRefs.current, { opacity: 0, x: 30, duration: 0.25, stagger: 0.04, ease: "power2.in" });
    tl.to(footerRef.current, { opacity: 0, y: 10, duration: 0.2, ease: "power2.in" }, "<");
    tl.to(panelRef.current, { x: "100%", duration: 0.45, ease: "expo.in" }, "<0.1");
    tl.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" }, "<0.1");

    /* burger X → lines */
    if (burgerRef.current) {
      const lines = burgerRef.current.querySelectorAll(".burger-line");
      tl.to(lines[0], { y: 0, rotate: 0, duration: 0.3, ease: "power3.out" }, "<");
      tl.to(lines[1], { opacity: 1, scaleX: 1, duration: 0.25, ease: "power2.out" }, "<");
      tl.to(lines[2], { y: 0, rotate: 0, duration: 0.3, ease: "power3.out" }, "<");
    }
  };

  const handleLinkClick = () => closeMenu();

  return (
    <>
      {/* ── Topbar ── */}
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

      {/* ── Sticky Nav ── */}
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
                style={{ height: "36px", width: "auto" }}
                priority
              />
            </span>
            <span>GROSHA</span>
            <span className="brand-meta"><b>Export Nº 01</b>Giza / Egypt / Global</span>
          </Link>

          <nav>
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    {l.label}
                    {l.num && <span className="num">{l.num}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-side">
            <Link className="nav-cta ghost" href="/#products">Catalog</Link>
            <Link className="nav-cta"       href="/contact">Get a Quote</Link>

            {/* Animated burger — mobile only */}
            <button
              ref={burgerRef}
              onClick={openMenu}
              className="mob-burger"
              aria-label="Open Menu"
              aria-expanded={isOpen}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>

            <span className="status-dot" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen drawer (GSAP) ── */}
      {isOpen && (
        <>
          {/* Dim overlay */}
          <div
            ref={overlayRef}
            onClick={closeMenu}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(21,20,15,0.55)",
              zIndex: 9998,
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Side panel */}
          <div
            ref={panelRef}
            style={{
              position: "fixed",
              top: 0, right: 0, bottom: 0,
              width: "min(420px, 100vw)",
              background: "var(--ink)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* ── Panel header ── */}
            <div style={{
              padding: "28px 32px 24px",
              borderBottom: "1px solid rgba(239,231,210,0.10)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <Link href="/" onClick={handleLinkClick} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                <Image
                  src="/assets/mpo90tsn-WhatsApp_Image_2026-04-14_at_23.57.31-removebg-preview.png"
                  alt="GROSHA"
                  width={80} height={36}
                  style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)" }}
                />
                <span style={{ color: "var(--bone)", fontFamily: "var(--sans)", fontWeight: 900, fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  GROSHA
                </span>
              </Link>

              {/* X close button */}
              <button
                onClick={closeMenu}
                aria-label="Close Menu"
                style={{
                  width: "40px", height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(239,231,210,0.18)",
                  background: "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--bone)",
                  fontSize: "18px",
                  lineHeight: 1,
                  transition: "all 200ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--coral)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(239,231,210,0.18)")}
              >
                ×
              </button>
            </div>

            {/* ── Nav links ── */}
            <nav style={{ flex: 1, padding: "40px 32px 32px" }}>
              {/* Decorative label */}
              <span ref={el => { rulerRefs.current[0] = el; }} style={{
                display: "block",
                fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(239,231,210,0.35)",
                marginBottom: "28px",
              }}>
                Navigation
              </span>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                {NAV_LINKS.map((link, i) => (
                  <li
                    key={link.href}
                    ref={el => { itemRefs.current[i] = el; }}
                    style={{ borderBottom: "1px solid rgba(239,231,210,0.08)" }}
                  >
                    {/* ruler line */}
                    <span
                      ref={el => { rulerRefs.current[i + 1] = el; }}
                      style={{
                        display: "block", height: "1px",
                        background: "rgba(239,231,210,0.08)",
                        transformOrigin: "left",
                      }}
                    />
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "22px 0",
                        textDecoration: "none",
                        color: "var(--bone)",
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontSize: "clamp(28px, 7vw, 40px)",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                        transition: "color 200ms ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--coral)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--bone)")}
                    >
                      <span>{link.label}</span>
                      <span style={{
                        fontFamily: "var(--mono)",
                        fontStyle: "normal",
                        fontSize: "11px",
                        color: "rgba(239,231,210,0.3)",
                        letterSpacing: "0.1em",
                      }}>
                        {link.num ? `(${link.num})` : "→"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Footer CTA ── */}
            <div
              ref={footerRef}
              style={{
                padding: "28px 32px",
                borderTop: "1px solid rgba(239,231,210,0.10)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link
                href="/#products"
                onClick={handleLinkClick}
                style={{
                  display: "block", textAlign: "center",
                  padding: "14px 24px", borderRadius: "100px",
                  border: "1px solid rgba(239,231,210,0.22)",
                  color: "var(--bone)",
                  fontFamily: "var(--sans)",
                  fontWeight: 800, fontSize: "11px",
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(239,231,210,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(239,231,210,0.22)"; }}
              >
                Full Catalog
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                style={{
                  display: "block", textAlign: "center",
                  padding: "14px 24px", borderRadius: "100px",
                  background: "var(--coral)",
                  color: "#fff",
                  fontFamily: "var(--sans)",
                  fontWeight: 800, fontSize: "11px",
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 200ms ease",
                  boxShadow: "0 8px 24px -6px rgba(237,111,92,0.5)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d45a47"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--coral)"; }}
              >
                Get a Quote
              </Link>

              {/* Small location line */}
              <p style={{
                textAlign: "center", margin: "8px 0 0",
                fontFamily: "var(--mono)", fontSize: "9px",
                color: "rgba(239,231,210,0.25)",
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>
                Giza, Egypt · 30°00′N 31°12′E
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
