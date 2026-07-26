import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { QuantityControl } from './QuantityControl';

export function ProductList() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="panel__eyebrow">Products</p>
          <h2>Available Items</h2>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem?.quantity ?? 0;

          return (
            <article className="product-card" key={product.id}>
              <div className="product-card__content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-card__footer">
                <span>{formatCurrency(product.price)}</span>
                {quantity > 0 ? (
                  <QuantityControl
                    quantity={quantity}
                    onDecrease={() => removeFromCart(product.id)}
                    onIncrease={() => addToCart(product)}
                  />
                ) : (
                  <button type="button" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
