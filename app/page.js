import Link from 'next/link';
import Image from 'next/image';
import { products } from '../lib/products';

const whatsappNumber = '917903062818';
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi')}`;

export default function HomePage() {
  return (
    <main>
      <section className="hero-wrap">
        <header className="site-header container">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="NH Decor logo" width={36} height={36} />
            <span>NH Decor</span>
          </Link>
          <nav className="main-nav">
            <ul className="nav-menu">
              <li>
                <a href="#our-products">Our Products</a>
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
                  src={product.image}
                  alt={`${product.name} image`}
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
    </main>
  );
}
