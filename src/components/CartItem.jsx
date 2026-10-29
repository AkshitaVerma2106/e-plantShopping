
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleContinueShopping = () => {
    onNavigate("plants");
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="nav-links">
          <button onClick={() => onNavigate("home")}>Home</button>
          <button onClick={handleContinueShopping}>Plants</button>
          <button onClick={() => onNavigate("cart")}>
            🛒 Cart (
            {cartItems.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-container">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id || item.name}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>
                    Item Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.name))}
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-total">
              <h2>Total: ${totalAmount.toFixed(2)}</h2>

              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon!")}
              >
                Checkout
              </button>

              <button
                className="get-started-button"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
