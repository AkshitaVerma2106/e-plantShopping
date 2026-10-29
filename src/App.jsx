
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  const [page, setPage] = useState('home');

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {page === 'home' ? (
        <main className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p className="tagline">
              Bring nature home, one plant at a time.
            </p>
            <p>
              Discover beautiful indoor plants and create
              your own little green paradise.
            </p>
            <button
              className="primary-button"
              onClick={() => setPage('plants')}
            >
              Get Started
            </button>
            <button
              className="text-button"
              onClick={() => setPage('about')}
            >
              About Us
            </button>
          </div>
        </main>
      ) : (
        <>
          <nav className="navbar">
            <button
              className="brand"
              onClick={() => setPage('home')}
            >
              🌿 Paradise Nursery
            </button>

            <div className="nav-links">
              <button onClick={() => setPage('home')}>
                Home
              </button>
              <button onClick={() => setPage('plants')}>
                Plants
              </button>
              <button onClick={() => setPage('cart')}>
                🛒 Cart ({cartCount})
              </button>
            </div>
          </nav>

          {page === 'plants' && (
            <ProductList
              onContinueShopping={() => setPage('plants')}
            />
          )}

          {page === 'cart' && (
            <CartItem
              onContinueShopping={() => setPage('plants')}
            />
          )}

          {page === 'about' && (
            <AboutUs />
          )}
        </>
      )}
    </div>
  );
}

export default App;
