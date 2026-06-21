import Navbar from "../components/Navbar1";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // import the CSS module

function Home({ cart }) {
  const featuredDishes = [
    {
      id: 1,
      name: "Burger",
      price: 120,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
    },
    {
      id: 3,
      name: "Fried Rice",
      price: 180,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
    },
    {
    id: 7,
    name: "Noodles",
    price: 160,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    id: 8,
    name: "Chicken Biryani",
    price: 220,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
  },
  ];

  return (
    <div>
      <Navbar cart={cart} />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Royal Hotel</h1>
          <p className={styles.subtitle}>Experience the finest dining in town</p>
          <Link to="/menu">
            <button className={styles.ctaButton}>View Menu</button>
          </Link>
        </div>
      </div>

      <div className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Dishes</h2>
        <div className={styles.featuredGrid}>
          {featuredDishes.map((dish) => (
            <div key={dish.id} className={styles.featuredCard}>
              <img src={dish.image} alt={dish.name} className={styles.featuredImage} />
              <h3>{dish.name}</h3>
              <p>₹{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;