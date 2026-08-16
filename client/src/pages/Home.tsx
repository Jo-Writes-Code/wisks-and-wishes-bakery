/**
 * Design reminder: Playful Editorial Bake Shop — warm cream, bold condensed all-caps type,
 * candid bakery imagery, cocoa controls, and Candle Pink used solely for key order moments.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Menu, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { toast } from "sonner";

type Product = {
  id: number;
  name: string;
  note: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "MIDNIGHT CHUNK",
    note: "dark chocolate + sea salt",
    price: 4,
    image: "/manus-storage/crumb-candle-cookies_d4713f1f.jpg",
  },
  {
    id: 2,
    name: "SPRINKLE CAKE",
    note: "vanilla bean + strawberry jam",
    price: 38,
    image: "/manus-storage/crumb-candle-cake_a9d2c0a4.jpg",
  },
  {
    id: 3,
    name: "CARDAMOM BUN",
    note: "orange sugar + pearl sugar",
    price: 5,
    image: "/manus-storage/crumb-candle-buns_e1bdde8f.jpg",
  },
];

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

export default function Home() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const total = products.reduce((sum, product) => sum + product.price * (cart[product.id] ?? 0), 0);

  function updateCart(productId: number, nextQuantity: number) {
    setCart((current) => {
      const next = { ...current };
      if (nextQuantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = nextQuantity;
      }
      return next;
    });
  }

  function addProduct(product: Product) {
    updateCart(product.id, (cart[product.id] ?? 0) + 1);
    toast.success(`${product.name.toLowerCase()} added to your basket`);
  }

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

        <button className="cart-link" onClick={() => navigateTo("#pickup")} aria-label="View your order basket">
          <ShoppingBag size={18} strokeWidth={2.1} />
          <span className="cart-copy">BASKET</span>
          <span className="cart-count">{itemCount}</span>
        </button>

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
            <button className="round-cta" onClick={() => navigateTo("#buy")}>
              <span>SEE WHAT’S<br />FRESH</span>
              <ArrowUpRight size={24} strokeWidth={2.25} aria-hidden="true" />
            </button>
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
              <button className="text-cta" onClick={() => navigateTo("#buy")}>PICK YOUR TREATS <ArrowUpRight size={18} aria-hidden="true" /></button>
            </div>
          </div>
          <div className="about-rule" aria-hidden="true"><span /> <span /> <span /></div>
        </section>

        <section id="buy" className="shop-section section-pad">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">TODAY’S COUNTER</p>
              <h2>TAKE A<br />LITTLE JOY<br />WITH YOU.</h2>
            </div>
            <p className="section-side-note">EACH BATCH IS SMALL. WHEN IT’S GONE, IT’S GONE.</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => {
              const quantity = cart[product.id] ?? 0;
              return (
                <article className={`product-card product-card--${index + 1}`} key={product.id}>
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
                  {quantity === 0 ? (
                    <button className="add-button" onClick={() => addProduct(product)}>
                      <Plus size={17} strokeWidth={2.2} /> ADD TO BASKET
                    </button>
                  ) : (
                    <div className="quantity-control" aria-label={`${product.name} quantity controls`}>
                      <button onClick={() => updateCart(product.id, quantity - 1)} aria-label={`Remove one ${product.name}`}><Minus size={15} /></button>
                      <span>{quantity}</span>
                      <button onClick={() => updateCart(product.id, quantity + 1)} aria-label={`Add one ${product.name}`}><Plus size={15} /></button>
                    </div>
                  )}
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
              <span>YOUR BASKET</span>
              <strong>{itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}</strong>
            </div>
            <div className="order-lines">
              {itemCount === 0 ? (
                <p className="empty-basket">A very quiet basket. Pick something sweet above.</p>
              ) : (
                products.filter((product) => cart[product.id]).map((product) => (
                  <div className="order-line" key={product.id}>
                    <span>{cart[product.id]}× {product.name}</span>
                    <span>{money(product.price * (cart[product.id] ?? 0))}</span>
                  </div>
                ))
              )}
            </div>
            <div className="order-total"><span>TOTAL</span><strong>{money(total)}</strong></div>
            <button
              className="checkout-button"
              onClick={() => itemCount ? toast.success("Your demo order is ready for a real checkout connection.") : toast.message("Add a little something to your basket first.")}
            >
              PLACE DEMO ORDER <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <p className="demo-note">DEMO BASKET · NO PAYMENT IS TAKEN</p>
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
