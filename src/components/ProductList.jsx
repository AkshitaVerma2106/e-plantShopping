
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 299,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'A hardy plant that adds a fresh touch to your home.',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 399,
    image: 'photo-1593691509543-c55fb32e5cee',
    description: 'An elegant plant with beautiful green foliage.',
  },
  {
    id: 3,
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 249,
    image: 'photo-1459156212016-c812468e2115',
    description: 'A cheerful plant suitable for bright indoor spaces.',
  },
  {
    id: 4,
    name: 'Areca Palm',
    category: 'Air Purifying Plants',
    price: 499,
    image: 'photo-1512428813834-c702c7702b78',
    description: 'Bring a tropical feel to your living room.',
  },
  {
    id: 5,
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 349,
    image: 'photo-1497250681960-ef046c08a56e',
    description: 'Lush foliage for a refreshing indoor corner.',
  },
  {
    id: 6,
    name: 'Rubber Plant',
    category: 'Air Purifying Plants',
    price: 449,
    image: 'photo-1509423350716-97f9360b4e09',
    description: 'Glossy leaves make this plant a striking choice.',
  },
  {
    id: 7,
    name: 'Monstera',
    category: 'Decorative Plants',
    price: 599,
    image: 'photo-1614594975525-e45190c55d0b',
    description: 'Iconic split leaves for a modern interior.',
  },
  {
    id: 8,
    name: 'Calathea',
    category: 'Decorative Plants',
    price: 449,
    image: 'photo-1509423350716-97f9360b4e09',
    description: 'Decorative foliage that adds visual interest.',
  },
  {
    id: 9,
    name: 'Fiddle Leaf Fig',
    category: 'Decorative Plants',
    price: 799,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'A bold statement plant for larger rooms.',
  },
  {
    id: 10,
    name: 'Philodendron',
    category: 'Decorative Plants',
    price: 349,
    image: 'photo-1497250681960-ef046c08a56e',
    description: 'Beautiful trailing foliage for shelves.',
  },
  {
    id: 11,
    name: 'Chinese Money Plant',
    category: 'Decorative Plants',
    price: 399,
    image: 'photo-1485955900006-10f4d324d411',
    description: 'Distinctive round leaves with a playful look.',
  },
  {
    id: 12,
    name: 'Bird of Paradise',
    category: 'Decorative Plants',
    price: 899,
    image: 'photo-1518531933037-91b2f5f229cc',
    description: 'A tropical focal point with dramatic leaves.',
  },
  {
    id: 13,
    name: 'Aloe Vera',
    category: 'Succulents and Cacti',
    price: 199,
    image: 'photo-1509423350716-97f9360b4e09',
    description: 'A low-maintenance succulent for sunny spaces.',
  },
  {
    id: 14,
    name: 'Jade Plant',
    category: 'Succulents and Cacti',
    price: 249,
    image: 'photo-1485955900006-10f4d324d411',
    description: 'A compact succulent with thick rounded leaves.',
  },
  {
    id: 15,
    name: 'Echeveria',
    category: 'Succulents and Cacti',
    price: 179,
    image: 'photo-1459411552884-841db9b3cc2a',
    description: 'A rosette-shaped succulent for small spaces.',
  },
  {
    id: 16,
    name: 'Haworthia',
    category: 'Succulents and Cacti',
    price: 199,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'A small succulent with striking patterned leaves.',
  },
  {
    id: 17,
    name: 'Golden Barrel Cactus',
    category: 'Succulents and Cacti',
    price: 299,
    image: 'photo-1459411552884-841db9b3cc2a',
    description: 'A sculptural cactus that suits sunny windowsills.',
  },
  {
    id: 18,
    name: 'String of Pearls',
    category: 'Succulents and Cacti',
    price: 329,
    image: 'photo-1497250681960-ef046c08a56e',
    description: 'Trailing bead-like foliage for hanging planters.',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main className="products-page">
      <header className="page-heading">
        <h1>Our Plants</h1>
        <p>Find the perfect green companion for your space.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={plant.name}
                    />

                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <strong>₹{plant.price}</strong>

                      <button
                        className="primary-button add-button"
                        disabled={isAdded}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
