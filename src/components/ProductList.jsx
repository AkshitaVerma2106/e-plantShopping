
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b5c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 22,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 20,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 16,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Monstera",
    price: 25,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Calathea",
    price: 24,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1597055181300-df0c6f0d9e3b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Dracaena",
    price: 19,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "ZZ Plant",
    price: 21,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Pothos",
    price: 14,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 11,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 13,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Barrel Cactus",
    price: 12,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Haworthia",
    price: 14,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "String of Pearls",
    price: 17,
    category: "Succulents and Cacti",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addedToCart = {};
  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const categories = [
    "Air Purifying Plants",
    "Decorative Plants",
    "Succulents and Cacti",
  ];

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="nav-links">
          <button onClick={() => onNavigate("home")}>Home</button>
          <button onClick={() => onNavigate("plants")}>Plants</button>
          <button onClick={() => onNavigate("cart")}>
            🛒 Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </nav>

      <main className="product-page">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category} className="plant-category">
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price.toFixed(2)}</p>

                    <button
                      className="add-to-cart-button"
                      disabled={addedToCart[plant.name]}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
