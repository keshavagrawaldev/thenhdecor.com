import Link from 'next/link';
import Image from 'next/image';
import { products } from '../lib/products';

const whatsappNumber = '917903062818';
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi')}`;

const navItems = products.map((product) => product.name);
const primaryNavItems = navItems.slice(0, 7);
const moreNavItems = navItems.slice(7);

const collections = [
  {
    title: 'Sofa Fabrics',
    copy: 'Durable textures and designer weaves for daily-use luxury seating.',
    badge: 'Top Seller'
  },
  {
    title: 'Curtain Studio',
    copy: 'Sheers, blackout, and statement drapes curated for every light mood.',
    badge: 'New Range'
  },
  {
    title: 'Upholstery',
    copy: 'Easy-clean performance fabric for living rooms, lobbies, and offices.',
    badge: 'Commercial'
  },
  {
    title: 'Mattress Fabrics',
    copy: 'Comfort-first knitted and woven mattress covers with modern finishes.',
    badge: 'Bulk Ready'
  },
  {
    title: 'Bags & Footwear Textiles',
    copy: 'Contemporary laminates and textured bases for fashion and utility lines.',
    badge: 'Industry Use'
  },
  {
    title: 'Wall & Blind Solutions',
    copy: 'Roller blinds, panel blinds, and wall textures to frame any interior.',
    badge: 'Expert Fit'
  }
];

const process = [
  {
    step: '01',
    title: 'Material Mapping',
    text: 'We shortlist textures, colors, and technical specs based on your use-case and budget.'
  },
  {
    step: '02',
    title: 'Design Pairing',
    text: 'Our team builds combinations for curtains, upholstery, and accessories in one proposal.'
  },
  {
    step: '03',
    title: 'Supply & Execution',
    text: 'From retail pieces to wholesale lots, you get consistent quality with fast dispatch.'
  }
];

const testimonials = [
  {
    quote:
      'NH Decor helps us close projects faster because clients can visualize complete furnishing looks instantly.',
    author: 'Interior Studio, Noida'
  },
  {
    quote:
      'The wholesale coordination is smooth. We source curtain and upholstery lines together without quality mismatch.',
    author: 'Dealer Partner, Delhi NCR'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-wrap">
        <header className="site-header container">
          <div className="logo">NH Decor</div>
          <nav className="main-nav">
            <ul className="nav-menu">
              {primaryNavItems.map((item) => (
                <li key={item}>
                  <a href="#our-products">{item}</a>
                </li>
              ))}
              <li className="nav-more">
                <details>
                  <summary>More</summary>
                  <ul className="dropdown-menu">
                    {moreNavItems.map((item) => (
                      <li key={item}>
                        <a href="#our-products">{item}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
          <a href={whatsappHref} className="cta-outline" target="_blank" rel="noreferrer">
            <span className="whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M12 2C6.49 2 2 6.38 2 11.78c0 1.9.56 3.72 1.62 5.29L2 22l5.06-1.57a10.2 10.2 0 0 0 4.94 1.27c5.51 0 10-4.39 10-9.79S17.51 2 12 2Zm0 17.9c-1.5 0-2.97-.4-4.24-1.17l-.3-.18-3 .93.97-2.9-.2-.3a7.84 7.84 0 0 1-1.2-4.2c0-4.34 3.6-7.86 8.03-7.86 4.42 0 8.02 3.52 8.02 7.86 0 4.34-3.6 7.86-8.02 7.86Zm4.4-5.97c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.91-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.18 7.2 7.2 0 0 1-1.35-1.66c-.14-.24 0-.38.1-.5.1-.1.24-.26.36-.38.12-.12.16-.2.24-.34.08-.14.04-.26-.02-.38-.06-.12-.54-1.28-.74-1.76-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.64 4.12 3.69.58.25 1.02.4 1.37.5.58.18 1.1.15 1.5.1.46-.06 1.4-.56 1.6-1.1.2-.54.2-1 .14-1.1-.06-.1-.22-.16-.46-.28Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Get in Touch
          </a>
        </header>
      </section>

      <section className="products-section container" id="our-products">
        <div className="section-heading products-heading">
          <h2 className="products-title">Our Products</h2>
        </div>
        <div className="product-tile-grid">
          {products.map((product) => (
            <article key={product.slug} className="product-tile">
              <div className="product-thumb">
                <Image
                  src="/images/product-placeholder.svg"
                  alt={`${product.name} placeholder image`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
              </div>
              <h3>{product.name}</h3>
              <p>{product.preview}</p>
              <div className="tile-actions">
                <Link href={`/products/${product.slug}`} className="tile-button details">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="collection-section container">
        <div className="section-heading">
          <p className="eyebrow">Featured Categories</p>
          <h2>Everything You Need to Furnish One Space or One Hundred</h2>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <article key={item.title} className="collection-card">
              <span>{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href="#">View Options</a>
            </article>
          ))}
        </div>
      </section>

      <section className="split-panel container">
        <article className="panel intro">
          <p className="eyebrow">Why NH Decor</p>
          <h2>Traditional Variety + Modern Presentation + Faster Turnaround.</h2>
          <p>
            We combine broad furnishing inventory with design-led curation, transparent pricing flow, and project
            coordination support. This creates a cleaner buying journey for homeowners, architects, retailers, and
            bulk buyers.
          </p>
          <a href="#" className="cta-solid">
            Start a Project
          </a>
        </article>
        <article className="panel checklist">
          <h3>Built for Performance</h3>
          <ul>
            <li>Dedicated support for retail and wholesale orders</li>
            <li>Unified sampling for curtain + sofa + upholstery combinations</li>
            <li>Quality checks for color consistency and fabric strength</li>
            <li>Delivery planning aligned with project deadlines</li>
          </ul>
        </article>
      </section>

      <section className="process container">
        <div className="section-heading">
          <p className="eyebrow">How We Work</p>
          <h2>From Fabric Selection to Final Dispatch</h2>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials container">
        {testimonials.map((item) => (
          <article key={item.author}>
            <p>{item.quote}</p>
            <h3>{item.author}</h3>
          </article>
        ))}
      </section>

      <section className="contact-band container">
        <div>
          <p className="eyebrow">Let&apos;s Build Your Furnishing Plan</p>
          <h2>Share your requirement and receive a curated quotation with matched collections.</h2>
        </div>
        <a href="#" className="cta-solid">
          Contact NH Decor
        </a>
      </section>
    </main>
  );
}
