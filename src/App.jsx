
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === "plants") {
    return <ProductList onNavigate={handleNavigate} />;
  }

  if (currentPage === "cart") {
    return <CartItem onNavigate={handleNavigate} />;
  }

  if (currentPage === "about") {
    return (
      <div>
        <nav className="navbar">
          <h2>Paradise Nursery</h2>
          <div className="nav-links">
            <button onClick={() => handleNavigate("home")}>Home</button>
            <button onClick={() => handleNavigate("plants")}>Plants</button>
            <button onClick={() => handleNavigate("cart")}>Cart</button>
          </div>
        </nav>
        <AboutUs />
      </div>
    );
  }

  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Bring nature home with our beautiful collection of indoor plants.
          Discover plants that brighten your space and make every corner feel
          alive.
        </p>

        <button
          className="get-started-button"
          onClick={() => handleNavigate("plants")}
        >
          Get Started
        </button>

        <button
          className="about-button"
          onClick={() => handleNavigate("about")}
        >
          About Us
        </button>
      </div>
    </main>
  );
}

export default App;
