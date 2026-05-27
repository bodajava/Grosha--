import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer data-od-id="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
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
            <p style={{ marginTop: "18px" }}>
              Premium IQF frozen fruits and vegetable exporter rooted in Giza, Egypt. Partnering with 50+ farms and shipping to 40+ ports across 3 continents.{" "}
              <a className="inline-link" href="#contact">Get in touch</a> for wholesale, private label, and bulk orders.
            </p>
          </div>
          <div className="foot-col">
            <h5>Products</h5>
            <ul>
              <li><Link href="/#products">Strawberry</Link></li>
              <li><Link href="/#products">Broccoli</Link></li>
              <li><Link href="/#products">Artichoke</Link></li>
              <li><Link href="/#products">Molokhia</Link></li>
              <li><Link href="/#products">Full catalogue</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#quality">Quality</Link></li>
              <li><Link href="/#logistics">Logistics</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Certifications</h5>
            <ul>
              <li><Link href="/#quality">HACCP</Link></li>
              <li><Link href="/#quality">ISO 9001</Link></li>
              <li><Link href="/#quality">-40°C IQF</Link></li>
              <li><Link href="/#quality">Lab tested</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Global</h5>
            <ul>
              <li><Link href="/#logistics">Rotterdam</Link></li>
              <li><Link href="/#logistics">New Jersey</Link></li>
              <li><Link href="/#logistics">Singapore</Link></li>
              <li><Link href="/#logistics">Dubai</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            <span className="pulse"></span>● <b style={{ color: "var(--ink)" }}>GROSHA</b> · Premium IQF Exports · 2026 / Vol. 01 / Issue Nº 01
          </span>
          <span className="right">
            <span>Giza / Egypt / Global</span>
            <span>30.0° N · 31.2° E</span>
            <span style={{ color: "var(--coral)" }}>♥ MMXXVI</span>
          </span>
        </div>
        <div className="foot-mega">
          <div className="word" data-reveal="rise-lg">GROSHA.</div>
        </div>
      </div>
    </footer>
  );
};
