import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity } from '../features/cart/cartSlice';
import { formatCurrency } from '../utils/formatCurrency';
import { QuantityControl } from './QuantityControl';

export function ProductCard({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    const cartItem = state.cart.items.find((item) => item.id === product.id);
    return cartItem?.quantity ?? 0;
  });

  return (
    <article className="product-card">
      <div className="product-card__content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-card__footer">
        <span>{formatCurrency(product.price)}</span>

        {quantity > 0 ? (
          <QuantityControl
            quantity={quantity}
            onDecrease={() => dispatch(decreaseQuantity(product.id))}
            onIncrease={() => dispatch(addToCart(product))}
          />
        ) : (
          <button type="button" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}
