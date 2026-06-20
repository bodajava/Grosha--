import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/merv/Navbar";
import { Footer } from "@/components/merv/Footer";
import { ProductProvider, ProductPills, ProductGrid } from "@/components/ProductCatalog";
import { RevealObserver } from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Merv | تصدير خضار وفواكه مجمدة IQF من مصر | Premium IQF Frozen Exports",
  description: "Merv هي الشركة الرائدة في مصر لتصدير الخضروات والفواكه المجمدة بتقنية IQF. نوفر فراولة مجمدة، بروكلي، أرتيشوك، مولخية، بطاطس مجمدة للتصدير حول العالم. Merv: Egypt's #1 IQF frozen fruits & vegetables exporter.",
  keywords: "تصدير خضار مجمدة, تصدير فواكه مجمدة, فراولة مجمدة للتصدير, بطاطس مجمدة, خضروات مجمدة مصر, شركة تصدير منتجات مجمدة, IQF Egypt, frozen vegetables exporter, frozen fruits export, merv iqf",
  openGraph: {
    title: "Merv | تصدير خضار وفواكه مجمدة IQF من مصر | Premium IQF Frozen Exports",
    description: "Merv هي الشركة الرائدة في مصر لتصدير الخضروات والفواكه المجمدة بتقنية IQF. نوفر فراولة مجمدة، بروكلي، أرتيشوك، مولخية للتصدير.",
    url: "https://merv-iqf.com",
    siteName: "Merv IQF",
    images: [{ url: "/assets/logo.png", width: 800, height: 600, alt: "Merv IQF Logo" }],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merv | Premium IQF Frozen Fruits & Vegetables Exporter",
    description: "Merv is Egypt's leading exporter of IQF frozen fruits and vegetables.",
    images: ["/assets/logo.png"],
  },
  alternates: { canonical: "https://merv-iqf.com" },
};

export default function Home() {
  const totalCount = 12;

  return (
    <RevealObserver>
      <div style={{ background: "var(--paper)", color: "var(--ink)", minHeight: "100vh" }}>
        <div className="side-rail right">
          <span className="rail-text">Merv — Vol. 01 · Issue Nº 01 · Premium Export</span>
        </div>
        <div className="side-rail left">
          <span className="rail-text">IQF · Cold Chain · Egypt · Global · 40+ Ports</span>
        </div>

        <div className="shell">
          <Navbar />

          {/* HERO SECTION */}
          <section className="hero pt-0" id="top">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">I.</span>
                <span className="meta-grp">
                  <span>Hero / Export Plate</span>
                  <span className="dot-mark">•</span>
                  <span>Merv / Volume 01</span>
                </span>
                <span>001 / 008</span>
              </div>
            </div>
            <div className="container hero-grid">
              <div className="hero-copy">
                <span className="label" data-reveal>Premium IQF Exports from Egypt <span className="ix">· Nº 01</span></span>
                <h1 className="display" data-reveal>
                  Premium IQF<br />
                  Frozen <em>fruits &</em><br />
                  <em>vegetables</em><span className="dot">.</span>
                </h1>
                <p className="lead" data-reveal>Preserving nature's finest flavours through advanced IQF freezing technology. From farm to the world.</p>
                <div className="hero-actions" data-reveal>
                  <a className="btn btn-primary" href="#products">
                    Explore our catalog
                    <span className="arrow">
                      <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                    </span>
                  </a>
                  <a className="btn btn-ghost" href="#contact">
                    Get a quote
                    <span className="arrow">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 8l4 4-4 4M8 12h8" /></svg>
                    </span>
                  </a>
                </div>
                <div className="hero-stats" data-reveal>
                  <div className="stat">
                    <span className="ring solid">40+</span>
                    <span className="stat-label"><b>Products</b>Varieties</span>
                  </div>
                  <div className="stat">
                    <span className="ring">15+</span>
                    <span className="stat-label"><b>Countries</b>Served</span>
                  </div>
                  <div className="stat">
                    <span className="ring coral">03</span>
                    <span className="stat-label"><b>Continents</b>Delivering</span>
                  </div>
                </div>
                <div className="hero-foot" data-reveal>
                  <span className="meta">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px', position: 'relative', top: '-1px' }}>
                      <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    30° 00′ N · 31° 12′ E &nbsp;·&nbsp; Giza, Egypt
                  </span>
                  <span className="coord">IQF · -18°C · Locked Fresh</span>
                </div>
              </div>
              <div className="hero-art" data-reveal="scale">
                <Image src="/assets/new image/hero_mockup.jpg" alt="Merv — Premium IQF Frozen Exports" width={1000} height={766} priority />
              </div>
            </div>
          </section>

          {/* TICKER / MARQUEE WIRE SECTION */}
          <section className="wire" aria-label="Global presence — hub cities">
            <div className="container wire-inner">
              <div className="wire-left">
                <span className="wire-mark" aria-hidden="true"><span className="wire-pulse"></span></span>
                <span className="wire-title">
                  <b>Global presence</b>
                  <span>15 hubs · 40+ ports · 3 continents</span>
                </span>
              </div>
              <div className="wire-rows">
                <div className="wire-row">
                  <div className="marquee-track" aria-hidden="true">
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">51.92°N</span><span className="wire-name">Rotterdam</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">40.71°N</span><span className="wire-name">New Jersey</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">1.35°N</span><span className="wire-name">Singapore</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">51.51°N</span><span className="wire-name">London</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">48.86°N</span><span className="wire-name">Paris</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">52.52°N</span><span className="wire-name">Berlin</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">25.20°N</span><span className="wire-name">Dubai</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">19.43°N</span><span className="wire-name">Mexico City</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">23.55°S</span><span className="wire-name">São Paulo</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">33.87°S</span><span className="wire-name">Sydney</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">40.42°N</span><span className="wire-name">Madrid</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">59.33°N</span><span className="wire-name">Stockholm</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">43.65°N</span><span className="wire-name">Toronto</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">39.90°N</span><span className="wire-name">Beijing</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">35.68°N</span><span className="wire-name">Tokyo</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">1.29°S</span><span className="wire-name">Nairobi</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">51.92°N</span><span className="wire-name">Rotterdam</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">40.71°N</span><span className="wire-name">New Jersey</span></span>
                    <span className="wire-item"><span className="wire-dot">·</span><span className="wire-coord">1.35°N</span><span className="wire-name">Singapore</span></span>
                  </div>
                </div>
                <div className="wire-row reverse">
                  <div className="marquee-track">
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Strawberry</span><span className="wire-role">berries</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Artichoke</span><span className="wire-role">vegetables</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Broccoli</span><span className="wire-role">green</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Molokhia</span><span className="wire-role">leafy</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Green Peas</span><span className="wire-role">legumes</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Pomegranate</span><span className="wire-role">fruit</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Colocasia</span><span className="wire-role">root</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Okra</span><span className="wire-role">pod</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Strawberry</span><span className="wire-role">berries</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Artichoke</span><span className="wire-role">vegetables</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Broccoli</span><span className="wire-role">green</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Molokhia</span><span className="wire-role">leafy</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Green Peas</span><span className="wire-role">legumes</span></a>
                    <a className="wire-item is-link" href="#products"><span className="wire-dot">·</span><span className="wire-handle">Pomegranate</span><span className="wire-role">fruit</span></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="about" id="about">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">II.</span>
                <span className="meta-grp">
                  <span>About / Company Profile</span>
                  <span className="dot-mark">•</span>
                  <span>Merv / Volume 01</span>
                </span>
                <span>002 / 008</span>
              </div>
              <div className="about-grid">
                <div className="about-copy" data-reveal>
                  <span className="label">About the company <span className="ix">· Nº 02</span></span>
                  <h2 className="display">Crafting <em>freshness</em> beyond <em>boundaries</em> from Egypt to the world<span className="dot">.</span></h2>
                  <p className="lead">Merv is a premium exporter of IQF frozen fruits and vegetables rooted in Giza, Egypt. We partner with 50+ regional farms, applying <code className="code-inline">Cryo-Fresh</code> technology and rigorous global standards to deliver produce that tastes as vital as the moment it was picked.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1.0fr 1.0fr", gap: "16px", marginBottom: "28px" }}>
                    <div style={{ padding: "16px", background: "var(--bone)", borderRadius: "12px" }}>
                      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "20px", color: "var(--coral)", display: "block", marginBottom: "4px" }}>01</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", display: "block" }}>Ethical Sourcing</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: "12px", color: "var(--ink-mute)" }}>Fair trade, farm-direct partnerships</span>
                    </div>
                    <div style={{ padding: "16px", background: "var(--bone)", borderRadius: "12px" }}>
                      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "20px", color: "var(--coral)", display: "block", marginBottom: "4px" }}>02</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", display: "block" }}>Cryo-Fresh Tech</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: "12px", color: "var(--ink-mute)" }}>-40°C flash freezing, zero ice crystals</span>
                    </div>
                    <div style={{ padding: "16px", background: "var(--bone)", borderRadius: "12px" }}>
                      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "20px", color: "var(--coral)", display: "block", marginBottom: "4px" }}>03</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", display: "block" }}>Global Standards</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: "12px", color: "var(--ink-mute)" }}>HACCP · ISO 9001 · BRC certified</span>
                    </div>
                    <div style={{ padding: "16px", background: "var(--bone)", borderRadius: "12px" }}>
                      <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "20px", color: "var(--coral)", display: "block", marginBottom: "4px" }}>04</span>
                      <span style={{ fontFamily: "var(--sans)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", display: "block" }}>Sustainable Harvest</span>
                      <span style={{ fontFamily: "var(--body)", fontSize: "12px", color: "var(--ink-mute)" }}>Regenerative farming, minimal waste</span>
                    </div>
                  </div>
                  <a className="btn btn-ghost" href="#products">
                    View our products
                    <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg></span>
                  </a>
                  <div className="footer-row">
                    <span className="mark">A</span>
                    <span>Sourcing · Freezing · Shipping · Repeat</span>
                    <span className="stamp">
                      <span>Partnering with</span>
                      <span style={{ color: "var(--ink)" }}>50+ Regional Farms</span>
                    </span>
                  </div>
                </div>
                <div className="about-art" data-reveal="right">
                  <Image src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80" alt="Farm fields and agriculture" width={800} height={533} />
                  <div className="about-side-note">
                    <b></b>
                    From Nile Delta<br />fields to global<br />cold-chain, we<br />control the full<br />export journey.
                  </div>
                  <div className="about-caption">
                    <b>Partnering with 50+ regional farms across Egypt.</b>
                    (Merv, MMXXVI)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CAPABILITIES SECTION */}
          <section className="capabilities" id="products-intro">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">III.</span>
                <span className="meta-grp">
                  <span>Product Categories · IQF Selection</span>
                  <span className="dot-mark">•</span>
                  <span>{totalCount} products / 2 categories</span>
                </span>
                <span>003 / 008</span>
              </div>
              <div className="capabilities-grid">
                <div className="capabilities-art" data-reveal="left">
                  <span className="corner tl"></span>
                  <span className="corner br"></span>
                  <Image src="/assets/new image/fruits_catalogue.jpg" alt="IQF frozen berries" width={1000} height={800} />
                  <div className="ribbon"><b>Merv</b> &nbsp;·&nbsp; PRODUCT CATALOGUE &nbsp;·&nbsp; AF/26</div>
                </div>
                <div className="capabilities-copy" data-reveal>
                  <span className="label">Product categories <span className="ix">· Nº 03</span></span>
                  <h2 className="display">Artisan <em>frozen</em> excellence from <em>Egypt's</em> finest fields<span className="dot">.</span></h2>
                  <p className="lead">Every Merv product is field-fresh within hours, IQF-blasted at -40°C, and packed under strict HACCP and ISO 9001 protocols.</p>
                  <div className="cards">
                    <div className="card" data-reveal>
                      <div className="num">01<span className="tag">Fruits</span></div>
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="9" cy="9" r="5" /><path d="M14 14l5 5" />
                      </svg>
                      <h3>Berries &amp;<br />Fruits</h3>
                      <p>Strawberry, pomegranate — whole, sliced, and diced. Premium IQF for desserts and smoothies.</p>
                      <a className="arrow-mark" href="#products" aria-label="View berries and fruits">
                        <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                      </a>
                    </div>
                    <div className="card" data-reveal>
                      <div className="num">02<span className="tag">Vegetables</span></div>
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3.5" y="3.5" width="8" height="8" /><rect x="12.5" y="3.5" width="8" height="8" />
                      </svg>
                      <h3>IQF<br />Vegetables</h3>
                      <p>Broccoli, artichokes, spinach, okra, green peas, cauliflower, mixed vegetables, cut green beans, broad beans, colocasia.</p>
                      <a className="arrow-mark" href="#products" aria-label="View IQF vegetables">
                        <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                      </a>
                    </div>
                    <div className="card" data-reveal>
                      <div className="num">03<span className="tag">Egyptian</span></div>
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3c-4.5 0-8 3.5-8 8 0 5 8 11 8 11s8-6 8-11c0-4.5-3.5-8-8-8z" />
                      </svg>
                      <h3>Egyptian<br />Specialties</h3>
                      <p>Molokhia, colocasia (taro) — traditional Egyptian produce exported to global markets with authentic quality.</p>
                      <a className="arrow-mark" href="#products" aria-label="View Egyptian specialties">
                        <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                      </a>
                    </div>
                    <div className="card" data-reveal>
                      <div className="num">04<span className="tag">Custom</span></div>
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 8h14v8H5z" /><path d="M9 12h6M12 9v6" />
                      </svg>
                      <h3>Custom<br />Packaging</h3>
                      <p>Private label, bulk, retail-ready, and food-service packaging. Your spec, our quality-assured produce.</p>
                      <a className="arrow-mark" href="#contact" aria-label="Inquire about custom packaging">
                        <svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DYNAMIC PRODUCT CATALOG / LABS SECTION */}
          <section className="labs" id="products">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">IV.</span>
                <span className="meta-grp">
                  <span>Product Catalog / IQF Selection</span>
                  <span className="dot-mark">•</span>
                  <span>{totalCount} products available</span>
                </span>
                <span>004 / 008</span>
              </div>
              <ProductProvider>
                <div className="labs-head">
                  <div data-reveal>
                    <span className="label">Our products <span className="ix">· Nº 04</span></span>
                    <h2 className="display" style={{ marginTop: "30px" }}>A curated selection of <em>premium</em> IQF frozen <em>produce</em><span className="dot">.</span></h2>
                  </div>
                  <ProductPills />
                </div>
                <ProductGrid />
              </ProductProvider>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} data-reveal>
                <a className="btn btn-primary" href="#contact">
                  Request full catalogue
                  <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg></span>
                </a>
              </div>
            </div>
          </section>

          {/* QUALITY ASSURANCE METHOD */}
          <section className="method" id="quality">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">V.</span>
                <span className="meta-grp">
                  <span>Quality / Assurance Protocol</span>
                  <span className="dot-mark">•</span>
                  <span>12 checks, certified</span>
                </span>
                <span>005 / 008</span>
              </div>
              <div className="method-head">
                <div data-reveal>
                  <span className="label">Quality assurance <span className="ix">· Nº 05</span></span>
                  <h2 className="display" style={{ marginTop: "30px" }}>Frozen at the <em>peak</em> of pure, every <em>batch</em> certified<span className="dot">.</span></h2>
                </div>
                <div className="right" data-reveal="right">
                  <span className="plus">+</span>
                  <p>HACCP certified · ISO 9001 · -40°C IQF technology · 12 internal quality checks per batch.</p>
                </div>
              </div>
              <div className="method-grid">
                <div className="method-step" data-reveal>
                  <div className="num">01</div>
                  <h4>Harvest <span className="arrow-r">→</span></h4>
                  <p>Sourced at peak ripeness from our network of 50+ Egyptian farms. Field-to-factory within 2 hours.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src="/assets/quality_harvest_step.jpg" alt="Harvest" width={1200} height={1200} className="object-cover" />
                  </div>
                </div>
                <div className="method-step" data-reveal>
                  <div className="num">02</div>
                  <h4>Blanching <span className="arrow-r">→</span></h4>
                  <p>Precision steam blanching to preserve colour, texture, and nutrients. Enzymatic activity halted at the molecular level.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src="/assets/quality_blanching_step.jpg" alt="Processing facility" width={1200} height={1200} className="object-cover" />
                  </div>
                </div>
                <div className="method-step" data-reveal>
                  <div className="num">03</div>
                  <h4>IQF Blast <span className="arrow-r">→</span></h4>
                  <p>-40°C individual quick freezing. Each morsel frozen separately — zero clumping, zero moisture loss, nutrient lock.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src="/assets/quality_iqf_blast_step.jpg" alt="IQF freezing facility" width={1200} height={1200} className="object-cover" />
                  </div>
                </div>
                <div className="method-step" data-reveal>
                  <div className="num">04</div>
                  <h4>Audit</h4>
                  <p>12 internal quality checks, laboratory pathogen testing, purity analysis at 99.9%. HACCP and ISO 9001 verified.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src="/assets/quality_audit_step.jpg" alt="Quality control lab" width={1200} height={1200} className="object-cover" />
                  </div>
                </div>
              </div>
              <div className="method-foot">
                <div className="left">
                  <span className="ring"></span>
                  <span>12 internal checks. Lab validated. Nutrient preserved.</span>
                </div>
                <div className="right"><b>HACCP · ISO 9001</b> &nbsp;·&nbsp; Certified</div>
              </div>
            </div>
          </section>

          {/* GLOBAL LOGISTICS SECTION */}
          <section className="tight" id="logistics">
            <div className="work">
              <div className="work-rule">
                <span className="roman">VI.</span>
                <span style={{ display: "inline-flex", gap: "24px" }}>
                  <span>Global Logistics · Cold Chain Network</span>
                  <span style={{ color: "var(--coral)" }}>•</span>
                  <span>3 Continents · 15 Hubs · 40+ Ports</span>
                </span>
                <span>006 / 008</span>
              </div>
              <div className="work-grid">
                <div className="work-copy" data-reveal>
                  <span className="label">Export reach</span>
                  <h2>Global <em>export</em> reach with <em>smart</em> cold chain logistics<span className="dot">.</span></h2>
                  <a className="work-link" href="#contact">Get a logistics consultation</a>
                </div>
                <a className="work-card" data-reveal href="#contact">
                  <div className="label-row">
                    <span className="small-label">Hub · Europe</span>
                    <span className="index">AF-101</span>
                  </div>
                  <h3>Rotterdam</h3>
                  <p>European distribution hub serving 20+ markets. Temperature-controlled warehousing at -24°C. Direct weekly consolidation.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}><Image src="/assets/logistics_rotterdam_hub.jpg" alt="Rotterdam logistics" width={1200} height={1200} className="object-cover" /></div>
                  <div className="meta-row">
                    <span className="year">EUROPE · HUB 01</span>
                    <span>AF/26</span>
                  </div>
                </a>
                <a className="work-card alt" data-reveal href="#contact">
                  <div className="label-row">
                    <span className="small-label">Hub · Americas</span>
                    <span className="index">AF-102</span>
                  </div>
                  <h3>New Jersey</h3>
                  <p>North American gateway. Cold storage at Newark, 24/7 IoT temperature monitoring. Distribution across US and Canada.</p>
                  <div className="img" style={{ position: "relative", width: "100%", height: "100%" }}><Image src="/assets/logistics_newjersey_hub.jpg" alt="New Jersey port" width={1200} height={1200} className="object-cover" /></div>
                  <div className="meta-row">
                    <span className="year">AMERICAS · HUB 02</span>
                    <span>AF/26</span>
                  </div>
                </a>
              </div>
              <div className="work-arrows">
                <button className="nav-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M14 6l-6 6 6 6" />
                  </svg>
                </button>
                <button className="nav-btn active">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M10 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* TESTIMONIAL / VISUAL SHOWCASE GALLERY */}
          <section className="testimonial">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">VII.</span>
                <span className="meta-grp">
                  <span>Gallery / Visual Showcase</span>
                  <span className="dot-mark">•</span>
                  <span>Farm to fork</span>
                </span>
                <span>007 / 008</span>
              </div>
              <div className="gallery-grid">
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_nile_delta_farms.jpg" alt="Egyptian farm landscape" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">01 · Nile Delta Farms</span>
                </div>
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_cold_storage.jpg" alt="Cold storage facility" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">02 · Cold Storage</span>
                </div>
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_iqf_processing.jpg" alt="IQF processing line" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">03 · IQF Processing</span>
                </div>
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_export_logistics.jpg" alt="Export logistics" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">04 · Export Logistics</span>
                </div>
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_quality_control.jpg" alt="Quality control lab" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">05 · Quality Control</span>
                </div>
                <div className="gallery-item" data-reveal>
                  <Image src="/assets/gallery_global_shipping.jpg" alt="Global shipping containers" width={1200} height={1200} className="object-cover" />
                  <span className="gloss">06 · Global Shipping</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA / CONTACT PARTNERSHIP SECTION */}
          <section className="cta" id="contact">
            <div className="container">
              <div className="sec-rule">
                <span className="roman">VIII.</span>
                <span className="meta-grp">
                  <span>Contact / Let's Connect</span>
                  <span className="dot-mark">•</span>
                  <span>Ready to elevate your supply</span>
                </span>
                <span>008 / 008</span>
              </div>
              <div className="cta-grid">
                <div data-reveal>
                  <span className="label">Get in touch <span className="ix">· Nº 06</span></span>
                  <h2 className="display">Ready to <em>elevate</em> your <em>supplies</em><span className="dot">?</span></h2>
                  <p className="lead">Merv partners with retailers and distributors worldwide to deliver superior frozen goods. Reach out for pricing, samples, and partnerships.</p>
                  <div style={{ marginBottom: "28px" }}>
                    <div style={{ fontFamily: "var(--sans)", fontSize: "13px", color: "var(--ink-soft)", marginBottom: "8px" }}>
                      <span style={{ color: "var(--ink-faint)", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10.5px" }}>Headquarters</span><br />
                      <b>Giza, Egypt</b>
                    </div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: "13px", color: "var(--ink-soft)", marginBottom: "8px" }}>
                      <span style={{ color: "var(--ink-faint)", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10.5px" }}>Phone</span><br />
                      <b>+20 100 977 8868</b>
                    </div>
                    <div style={{ fontFamily: "var(--sans)", fontSize: "13px", color: "var(--ink-soft)", marginBottom: "8px" }}>
                      <span style={{ color: "var(--ink-faint)", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10.5px" }}>Email</span><br />
                      <b><a href="mailto:SALES@GOLDENGRAINGLOBAL.COM" style={{ color: "var(--coral)", textDecoration: "none" }}>SALES@GOLDENGRAINGLOBAL.COM</a></b>
                    </div>
                  </div>
                  <div className="cta-actions">
                    <a className="btn btn-primary" href="mailto:SALES@GOLDENGRAINGLOBAL.COM">
                      Send an inquiry
                      <span className="arrow"><svg viewBox="0 0 24 24"><path d="M5 19L19 5M19 5H8M19 5v11" /></svg></span>
                    </a>
                    <a className="email-pill" href="mailto:SALES@GOLDENGRAINGLOBAL.COM">
                      SALES@GOLDENGRAINGLOBAL.COM
                      <span className="arrow-circle">→</span>
                    </a>
                  </div>
                  <div className="cta-foot">
                    <span className="stamp">● Export ready</span>
                    <span>v1.0 / Giza, Egypt</span>
                    <span style={{ marginLeft: "auto" }}>30.0° N · 31.2° E</span>
                  </div>
                </div>
                 <div className="cta-art" data-reveal="right">
                  <Image src="/assets/new image/export_shipping.jpg" alt="Global export shipping" width={1000} height={666} />
                  <div className="index">Nº 08</div>
                  <div className="ribbon">Merv &nbsp;·&nbsp; EXPORT</div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </RevealObserver>
  );
}
