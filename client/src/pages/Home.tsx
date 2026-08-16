/**
 * Design reminder: Playful Editorial Bake Shop — warm cream, bold condensed all-caps type,
 * candid bakery imagery, cocoa controls, and Candle Pink used solely for key order moments.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Menu, MessageCircle, PhoneCall, X } from "lucide-react";

type Product = {
  name: string;
  note: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: "MIDNIGHT CHUNK",
    note: "dark chocolate + sea salt",
    price: 4,
    image: "/manus-storage/crumb-candle-cookies_d4713f1f.jpg",
  },
  {
    name: "SPRINKLE CAKE",
    note: "vanilla bean + strawberry jam",
    price: 38,
    image: "/manus-storage/crumb-candle-cake_a9d2c0a4.jpg",
  },
  {
    name: "CARDAMOM BUN",
    note: "orange sugar + pearl sugar",
    price: 5,
    image: "/manus-storage/crumb-candle-buns_e1bdde8f.jpg",
  },
];

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

const whatsappNumber = "15551234567";
const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 28);
      document.documentElement.style.setProperty("--hero-shift", `${Math.min(scrollPosition * 0.14, 128)}px`);
      document.documentElement.style.setProperty("--hero-copy-shift", `${Math.min(scrollPosition * -0.07, 58)}px`);
      document.documentElement.style.setProperty("--shelf-shift", `${Math.min(scrollPosition * 0.025, 38)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navigateTo(target: string) {
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={(event) => { event.preventDefault(); navigateTo("#home"); }}>
          <img src="/manus-storage/crumb-candle-mark_d6125250.png" alt="" className="brand-mark" />
          <span>CRUMB<br />&amp; CANDLE</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {[
            ["HOME", "#home"],
            ["ABOUT", "#about"],
            ["BUY", "#buy"],
            ["PICKUP", "#pickup"],
          ].map(([label, target]) => (
            <a key={target} href={target} onClick={(event) => { event.preventDefault(); navigateTo(target); }}>
              {label}
            </a>
          ))}
        </nav>

        <a className="order-link" href={whatsappLink("Hi Crumb & Candle! I’d like to order some treats.")} target="_blank" rel="noreferrer">
          <MessageCircle size={18} strokeWidth={2.1} />
          <span>WHATSAPP TO ORDER</span>
        </a>

        <button
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={26} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-hidden={!menuOpen}>
        {[
          ["HOME", "#home"],
          ["ABOUT", "#about"],
          ["BUY", "#buy"],
          ["PICKUP", "#pickup"],
        ].map(([label, target]) => (
          <button key={target} onClick={() => navigateTo(target)}>{label}</button>
        ))}
      </div>

      <main>
        <section id="home" className="hero-section" aria-label="Crumb and Candle Bakery introduction">
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow eyebrow--light">NEIGHBORHOOD BAKESHOP · EST. 2026</p>
            <h1>SWEET<br />THINGS,<br />MADE DAILY.</h1>
            <a className="round-cta" href={whatsappLink("Hi Crumb & Candle! I’d like to order some treats.")} target="_blank" rel="noreferrer">
              <span>CALL /<br />WHATSAPP</span>
              <PhoneCall size={24} strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-bottom-note">COUNTER OPEN · TUESDAY — SATURDAY · 8–4</div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="about-kicker"><span className="dot" /> SMALL-BATCH, EVERY MORNING</div>
          <div className="about-layout">
            <h2>THE GOOD<br />KIND OF<br />DAILY.</h2>
            <div className="about-copy">
              <p>Crumb &amp; Candle is a tiny corner bakery for cookies with crisp edges, soft-centered buns, and cakes that show up well to the party.</p>
              <p>We mix slowly, bake early, and save the best bit for the walk home.</p>
              <a className="text-cta" href={whatsappLink("Hi Crumb & Candle! I’d like to hear what’s fresh today.")} target="_blank" rel="noreferrer">ASK WHAT’S FRESH <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="about-rule" aria-hidden="true"><span /> <span /> <span /></div>
        </section>

        <section id="buy" className="shop-section section-pad">
          <div className="diagonal-ticker diagonal-ticker--front" aria-hidden="true">
            <div className="ticker-track">
              {["BAKED DAILY", "CALL TO ORDER", "PICKUP TREATS", "BAKED DAILY", "CALL TO ORDER", "PICKUP TREATS", "BAKED DAILY", "CALL TO ORDER"].map((item, index) => <span key={index}>{item} <b>✦</b></span>)}
            </div>
          </div>
          <div className="diagonal-ticker diagonal-ticker--back" aria-hidden="true">
            <div className="ticker-track ticker-track--reverse">
              {["WARM FROM THE OVEN", "SOMETHING SWEET", "WHATSAPP US", "WARM FROM THE OVEN", "SOMETHING SWEET", "WHATSAPP US", "WARM FROM THE OVEN"].map((item, index) => <span key={index}>{item} <b>✦</b></span>)}
            </div>
          </div>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">TODAY’S COUNTER</p>
              <h2>TAKE A<br />LITTLE JOY<br />WITH YOU.</h2>
            </div>
            <p className="section-side-note">EACH BATCH IS SMALL. WHEN IT’S GONE, IT’S GONE.</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => {
              return (
                <article className={`product-card product-card--${index + 1}`} key={product.name}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name.toLowerCase()} className="product-image" />
                    <span className="image-number">0{index + 1}</span>
                  </div>
                  <div className="product-info">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.note}</p>
                    </div>
                    <strong>{money(product.price)}</strong>
                  </div>
                  <a className="add-button" href={whatsappLink(`Hi Crumb & Candle! I’d like to order the ${product.name}. Is it available?`)} target="_blank" rel="noreferrer">
                    ASK ABOUT THIS <ArrowUpRight size={17} strokeWidth={2.2} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="pickup" className="pickup-section section-pad">
          <div className="pickup-copy">
            <p className="eyebrow eyebrow--light">READY WHEN YOU ARE</p>
            <h2>COME GET<br />THE GOOD<br />STUFF.</h2>
            <p>Order before noon for next-day pickup. We’ll tie up your box and keep it by the oven.</p>
          </div>
          <div className="order-panel">
            <div className="order-panel-heading">
              <span>CALL-FIRST ORDERS</span>
              <strong>TUE–SAT</strong>
            </div>
            <div className="order-lines order-steps">
              <p><span>01</span> Pick a treat from the counter.</p>
              <p><span>02</span> Message us on WhatsApp.</p>
              <p><span>03</span> We’ll confirm your pickup time.</p>
            </div>
            <a className="checkout-button" href={whatsappLink("Hi Crumb & Candle! I’d like to place an order for pickup.")} target="_blank" rel="noreferrer">
              WHATSAPP US TO ORDER <MessageCircle size={18} aria-hidden="true" />
            </a>
            <a className="call-number" href="tel:+15551234567"><PhoneCall size={16} aria-hidden="true" /> OR CALL +1 (555) 123-4567</a>
            <p className="demo-note">PLACEHOLDER NUMBER · REPLACE BEFORE LAUNCH</p>
          </div>
          <div className="pickup-details">
            <p><MapPin size={17} aria-hidden="true" /> 28 SUGAR LANE · EASTSIDE</p>
            <p><Clock3 size={17} aria-hidden="true" /> TUE–SAT · 8AM–4PM</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src="/manus-storage/crumb-candle-mark_d6125250.png" alt="" /> <span>CRUMB &amp; CANDLE</span></div>
        <p>BAKED IN SMALL BATCHES · MADE FOR BIG MOMENTS</p>
        <a href="#home" onClick={(event) => { event.preventDefault(); navigateTo("#home"); }}>BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
