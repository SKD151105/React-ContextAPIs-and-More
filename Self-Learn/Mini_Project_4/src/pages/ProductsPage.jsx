import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function ProductsPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Products Route</p>
        <h2>Available Items</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
