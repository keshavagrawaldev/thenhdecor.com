import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '../../../lib/products';

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-detail-page">
      <section className="product-hero container">
        <p className="eyebrow">Our Product</p>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-page-actions">
          <Link href="/" className="cta-outline">
            Back to Home
          </Link>
          <a href="#preview" className="cta-solid">
            Jump to Preview
          </a>
        </div>
      </section>

      <section className="product-preview container" id="preview">
        <article className="preview-card">
          <h2>Preview</h2>
          <p>{product.preview}</p>
        </article>
        <article className="preview-card">
          <h2>Best Use Cases</h2>
          <ul>
            {product.useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
