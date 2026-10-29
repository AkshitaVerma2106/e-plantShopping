
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../redux/CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>There are plenty of beautiful plants waiting for you.</p>
          <button
            className="primary-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <p className="cart-summary">
            You have {totalItems} item(s) in your cart.
          </p>

          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
                  alt={item.name}
                />

                <div className="cart-product-details">
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price}</p>
                  <p>
                    Item total: ₹{item.price * item.quantity}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ₹{totalAmount}</h2>

            <div className="cart-actions">
              <button
                className="secondary-button"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>

              <button
                className="primary-button"
                onClick={() => setCheckoutMessage('Coming Soon!')}
              >
                Checkout
              </button>
            </div>

            {checkoutMessage && (
              <p className="checkout-message" role="status">
                {checkoutMessage}
              </p>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
