import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { QuantityControl } from './QuantityControl';

export function Cart() {
  const { cartItems, cartItemCount, cartTotal, addToCart, removeFromCart } =
    useCart();

  return (
    <aside className="panel cart-panel">
      <div className="panel__header">
        <div>
          <p className="panel__eyebrow">Cart</p>
          <h2>Current Items</h2>
        </div>
        <span className="cart-count">{cartItemCount}</span>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-state">No items have been added yet.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {formatCurrency(item.price)} each
                  <span className="cart-item__subtotal">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </p>
              </div>

              <QuantityControl
                quantity={item.quantity}
                onDecrease={() => removeFromCart(item.id)}
                onIncrease={() => addToCart(item)}
              />
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <span>Total</span>
        <strong>{formatCurrency(cartTotal)}</strong>
      </div>
    </aside>
  );
}
