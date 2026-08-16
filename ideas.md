# Crumb & Candle Bakery — Reference-Led Design Direction

## Ground-Truth Reference

The user supplied **Bernice Bakery** as the visual reference. This build will mirror its design language rather than its content or full feature complexity: bold white condensed uppercase display type over a full-bleed, joyfully abundant bakery photograph; a lightweight uppercase navigation bar; energetic round call-to-action moments; and a colourful, editorial product grid. The implementation will remain a simplified single-page website with only the user-requested scrolling navigation and a lightweight local order basket.

## Chosen Design Philosophy — Playful Editorial Bake Shop

### Design Movement

Contemporary independent food-editorial design, informed by zine-like typography, candid overhead food photography, and the tactile immediacy of a neighborhood bakery counter.

### Core Principles

1. **Food leads every visual decision.** Photography is saturated, close, and plentiful; whitespace is used to frame appetite rather than make the page sterile.
2. **Big type, small interface.** Confident condensed headline typography provides impact while UI controls stay quiet and direct.
3. **Only useful interactions.** Navigation scrolls, product buttons add to a compact basket, and no secondary widgets compete for attention.
4. **Cheerful restraint.** A tight cream, cocoa, cherry, and pink palette keeps the page recognizable without excess decoration.

### Color Philosophy

The page sits on a **warm bakery-paper cream** base, allowing browned pastry tones and fruit-red images to remain the primary color story. Deep cocoa anchors text and small controls. **Bubblegum pink** is the singular attention color for the circular ordering call-to-action, echoing the playful bright accent seen in the reference while giving Crumb & Candle an ownable marker.

### Layout Paradigm

An editorial vertical story: full-bleed hero, a generous about split, a product shelf with varying card sizes, then a simple order/pickup strip and small footer. On desktop, the hero headline is deliberately placed low and left rather than centrally. The main navigation is a slim horizontal overlay that becomes an opaque cream bar after scrolling.

### Signature Elements

- Oversized, tightly tracked uppercase display headlines.
- A tilted circular pink action badge, used only for the core order action.
- Small hand-drawn-style rule marks and cocoa dot separators to divide content without adding visual noise.

### Interaction Philosophy

Links make a smooth, direct jump to their corresponding page sections. Adding a product visibly updates the compact basket count and total; checkout remains a transparent in-browser demo with a clear confirmation notice rather than pretending to process a real payment.

### Animation

Motion is short and physical: image cards rise 4px on hover, CTA circles rotate a few degrees, navigation gains an opaque background on scroll, and products fade upward on entry in small staggered groups. All motion uses opacity and transform, stays below 250ms, and respects reduced-motion preferences.

### Typography System

**Anton** carries the masthead and large editorial headings with deliberately compact all-caps letterforms. **DM Mono** is used for labels, prices, navigation, and product details, creating the friendly independent-store contrast visible in the reference. Paragraphs stay small-to-medium and wide enough to be comfortably read.

### Brand Essence

**Crumb & Candle is a small-batch neighborhood bake shop for people who want a bright, generous little ritual in their day.**

Personality: **playful, generous, unpretentious.**

### Brand Voice

Headlines are direct and appetite-forward; CTAs are compact and active; microcopy describes real bakery rhythms rather than generic marketing language.

> “SWEET THINGS, MADE DAILY.”

> “PICK YOUR TREATS — WE’LL PACK THE BOX.”

### Wordmark & Logo

The wordmark is set in compact editorial caps alongside a small **flame-shaped crumb** mark: a rounded, off-center wheat-gold flame/crumb silhouette with three tiny scored marks. The mark can stand alone as the favicon and header icon, while the wordmark appears only as accessible HTML type.

### Signature Brand Color

**Candle Pink — #F39BD5**

## Scope Guardrails

- Single scrolling page only: **Home, About, Buy, Pickup** navigation targets.
- Keep food imagery to a few high-impact uses; no galleries, social feeds, blogs, testimonials, or fake reviews.
- Keep the ordering interaction intentionally lightweight and clearly labelled as a demo basket.
- Do not copy Bernice Bakery’s wording, trademarks, product names, logos, or distinctive source photography.

## Validation Notes

The reference confirms that the strongest fidelity cues are a full-bleed overhead bake spread, huge low-left hero typography, a minimal slim navigation, and a lively circular order prompt. The implemented page preserves those cues while replacing all branding, copy, imagery, and products with original Crumb & Candle content.

The product controls are visually visible in the browser. Browser validation confirms that adding a product updates the compact header count, reveals quantity controls, recalculates the basket total, and emits a concise confirmation notice.
