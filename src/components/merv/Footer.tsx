"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer data-od-id="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand" onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", "/");
              }
            }}>
              <span className="brand-mark">
                <Image
                  src="/assets/logo.png"
                  alt="Merv"
                  width={80}
                  height={36}
                  className="object-contain"
                  style={{ height: '36px', width: 'auto' }}
                />
              </span>
              <span>Merv</span>
            </Link>
            <p style={{ marginTop: "18px" }}>
              Premium IQF frozen fruits and vegetable exporter rooted in Giza, Egypt. Partnering with 50+ farms and shipping to 40+ ports across 3 continents.{" "}
              <a className="inline-link" href="#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>Get in touch</a> for wholesale, private label, and bulk orders.
            </p>
          </div>
          <div className="foot-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/#products" onClick={(e) => handleLinkClick(e, "/#products")}>Strawberry</Link></li>
              <li><Link href="/#products" onClick={(e) => handleLinkClick(e, "/#products")}>Broccoli</Link></li>
              <li><Link href="/#products" onClick={(e) => handleLinkClick(e, "/#products")}>Artichoke</Link></li>
              <li><Link href="/#products" onClick={(e) => handleLinkClick(e, "/#products")}>Molokhia</Link></li>
              <li><Link href="/#products" onClick={(e) => handleLinkClick(e, "/#products")}>Full catalogue</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/#about" onClick={(e) => handleLinkClick(e, "/#about")}>About</Link></li>
              <li><Link href="/#quality" onClick={(e) => handleLinkClick(e, "/#quality")}>Quality</Link></li>
              <li><Link href="/#logistics" onClick={(e) => handleLinkClick(e, "/#logistics")}>Logistics</Link></li>
              <li><Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Certifications</h5>
            <ul>
              <li><Link href="/#quality" onClick={(e) => handleLinkClick(e, "/#quality")}>HACCP</Link></li>
              <li><Link href="/#quality" onClick={(e) => handleLinkClick(e, "/#quality")}>ISO 9001</Link></li>
              <li><Link href="/#quality" onClick={(e) => handleLinkClick(e, "/#quality")}>-40°C IQF</Link></li>
              <li><Link href="/#quality" onClick={(e) => handleLinkClick(e, "/#quality")}>Lab tested</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Global</h5>
            <ul>
              <li><Link href="/#logistics" onClick={(e) => handleLinkClick(e, "/#logistics")}>Rotterdam</Link></li>
              <li><Link href="/#logistics" onClick={(e) => handleLinkClick(e, "/#logistics")}>New Jersey</Link></li>
              <li><Link href="/#logistics" onClick={(e) => handleLinkClick(e, "/#logistics")}>Singapore</Link></li>
              <li><Link href="/#logistics" onClick={(e) => handleLinkClick(e, "/#logistics")}>Dubai</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            <span className="pulse"></span>● <b style={{ color: "var(--ink)" }}>Merv</b> · Premium IQF Exports · 2026 / Vol. 01 / Issue Nº 01
          </span>
          <span className="right">
            <span>Giza / Egypt / Global</span>
            <span>30.0° N · 31.2° E</span>
            <span style={{ color: "var(--coral)" }}>♥ MMXXVI</span>
          </span>
        </div>
        <div className="foot-mega">
          <div className="word" data-reveal="rise-lg">Merv.</div>
        </div>
      </div>
    </footer>
  );
};
