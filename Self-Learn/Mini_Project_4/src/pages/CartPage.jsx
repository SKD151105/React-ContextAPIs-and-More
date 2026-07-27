import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from '../features/cart/cartSlice';
import { formatCurrency } from '../utils/formatCurrency';
import { QuantityControl } from '../components/QuantityControl';

export function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Cart Route</p>
        <h2>Current Cart Items</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="panel">
          <p className="empty-state">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{formatCurrency(item.price)} each</p>
                  <p className="cart-item__subtotal">
                    Subtotal: {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>

                <div className="cart-item__actions">
                  <QuantityControl
                    quantity={item.quantity}
                    onDecrease={() => dispatch(decreaseQuantity(item.id))}
                    onIncrease={() => dispatch(addToCart(item))}
                  />

                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="panel cart-summary">
            <p className="section-heading__eyebrow">Summary</p>
            <div className="summary-row">
              <span>Items</span>
              <strong>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </strong>
            </div>
            <div className="summary-row">
              <span>Total</span>
              <strong>{formatCurrency(cartTotal)}</strong>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
