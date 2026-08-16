/**
 * Design reminder: Cream + teal bakery editorial, solid white header, giant sans headlines,
 * rounded food imagery, a right-to-left product rail, and minimal pink WhatsApp call actions.
 */
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";

const whatsappNumber = "15551234567";
const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const railItems = [
  { image: "/manus-storage/crumb-candle-cookies_d4713f1f.jpg", alt: "A chocolate chunk cookie" },
  { image: "/manus-storage/crumb-candle-cake_a9d2c0a4.jpg", alt: "A slice of sprinkle cake" },
  { image: "/manus-storage/crumb-candle-buns_e1bdde8f.jpg", alt: "Cardamom buns on a tray" },
  { image: "/manus-storage/crumb-candle-hero_e9ad0c85.jpg", alt: "A colourful bakery spread" },
];

function scrollToSection(target: string) {
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  return (
    <div className="reference-page">
      <header className="reference-header">
        <a className="reference-brand" href="#home" onClick={(event) => { event.preventDefault(); scrollToSection("#home"); }}>
          CRUMB &amp; CANDLE
        </a>
        <nav className="reference-nav" aria-label="Primary navigation">
          {[
            ["HOME", "#home"],
            ["BAKES", "#bakes"],
            ["ABOUT", "#about"],
            ["PICKUP", "#pickup"],
          ].map(([label, target]) => (
            <a key={target} href={target} onClick={(event) => { event.preventDefault(); scrollToSection(target); }}>{label}</a>
          ))}
        </nav>
        <a className="header-whatsapp" href={whatsappUrl("Hi Crumb & Candle! I’d like to place an order.")} target="_blank" rel="noreferrer" aria-label="Order by WhatsApp">
          <MessageCircle size={25} strokeWidth={1.7} />
          <span>ORDER</span>
        </a>
      </header>

      <main>
        <section id="home" className="reference-hero">
          <div className="hero-cover" />
          <div className="hero-vignette" />
          <div className="hero-copy">
            <p>CRUMB &amp; CANDLE · SMALL-BATCH BAKERY</p>
            <h1>BAKED FOR<br />THE BIG<br />FEELINGS.</h1>
          </div>
          <a className="indulge-disc" href={whatsappUrl("Hi Crumb & Candle! What’s fresh today?")} target="_blank" rel="noreferrer">
            <span>CALL /<br />WHATSAPP</span>
            <Phone size={30} strokeWidth={2} />
          </a>
          <p className="hero-edge-note">TUE—SAT · 8—4 · PICKUP ONLY</p>
        </section>

        <section id="about" className="statement-section">
          <div className="statement-heading">
            <p className="section-label"><Sparkles size={14} /> THE DAILY GOOD STUFF</p>
            <h2>THE KIND OF<br />GOOD THAT<br />STICKS WITH<br />YOU.</h2>
          </div>
          <div className="statement-copy">
            <p>We bake the things that make an ordinary Tuesday feel more like a tiny celebration: thick cookies, layered cakes, warm buns, and something sweet for the walk home.</p>
            <a href={whatsappUrl("Hi Crumb & Candle! I’d like to know what’s fresh today.")} target="_blank" rel="noreferrer" className="underlined-link">
              ASK WHAT’S FRESH <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section id="bakes" className="rail-section">
          <div className="rail-title-row">
            <div>
              <p className="section-label"><Sparkles size={14} /> FROM TODAY’S COUNTER</p>
              <h2>LOOK WHAT<br />JUST CAME<br />OUT.</h2>
            </div>
            <a href={whatsappUrl("Hi Crumb & Candle! I’d like to order from today’s counter.")} target="_blank" rel="noreferrer" className="outlined-pill">WHATSAPP TO ORDER <MessageCircle size={17} /></a>
          </div>
          <div className="rail-window" aria-label="Continuously moving selection of bakery treats">
            <div className="rail-track">
              {[...railItems, ...railItems].map((item, index) => (
                <figure className="rail-card" key={`${item.alt}-${index}`}>
                  <img src={item.image} alt={index < railItems.length ? item.alt : ""} />
                </figure>
              ))}
            </div>
          </div>
          <div className="rail-meta">
            <p>THE COUNTER MOVES FAST. OUR MENU DOES TOO.</p>
            <a href={whatsappUrl("Hi Crumb & Candle! I’d like to check what’s available.")} target="_blank" rel="noreferrer">CHECK AVAILABILITY <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section id="pickup" className="call-section">
          <div className="call-visual" aria-hidden="true">
            <div className="call-image one"><img src="/manus-storage/crumb-candle-cookies_d4713f1f.jpg" alt="" /></div>
            <div className="call-image two"><img src="/manus-storage/crumb-candle-cake_a9d2c0a4.jpg" alt="" /></div>
            <div className="call-sticker">PICKUP<br />IS A<br />LOVE NOTE.</div>
          </div>
          <div className="call-copy">
            <p className="section-label"><Sparkles size={14} /> PICKUP, NOT CHECKOUT</p>
            <h2>WE’LL KEEP<br />YOUR BOX<br />BY THE OVEN.</h2>
            <p>Message us your order, and we’ll reply with what’s available and the next pickup window. No cart, no fuss, just treats.</p>
            <a className="call-button" href={whatsappUrl("Hi Crumb & Candle! I’d like to place an order for pickup.")} target="_blank" rel="noreferrer">
              WHATSAPP US <MessageCircle size={21} />
            </a>
            <div className="call-details">
              <span><MapPin size={16} /> 28 SUGAR LANE · EASTSIDE</span>
              <span><Phone size={16} /> +1 (555) 123-4567</span>
            </div>
            <p className="placeholder-note">PLACEHOLDER NUMBER · REPLACE BEFORE LAUNCH</p>
          </div>
        </section>
      </main>

      <footer className="reference-footer">
        <span>CRUMB &amp; CANDLE</span>
        <p>BAKED IN SMALL BATCHES · MADE FOR BIG MOMENTS</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
      </footer>
    </div>
  );
}
