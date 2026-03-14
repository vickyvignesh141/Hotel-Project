import Navbar from "../components/Navbar1";
import { Link } from "react-router-dom";

function Home({ cart }) {
  return (
    <div>
      <Navbar cart={cart} />

      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Welcome to Royal Hotel</h1>
          <p style={styles.subtitle}>Experience the finest dining in town</p>
          <Link to="/menu">
            <button style={styles.ctaButton}>View Menu</button>
          </Link>
        </div>
      </div>

      <div style={styles.featured}>
        <h2 style={styles.sectionTitle}>Featured Dishes</h2>
        <div style={styles.featuredGrid}>
          {featuredDishes.map((dish) => (
            <div key={dish.id} style={styles.featuredCard}>
              <img src={dish.image} alt={dish.name} style={styles.featuredImage} />
              <h3>{dish.name}</h3>
              <p>₹{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample featured dishes – you can replace with actual data
const featuredDishes = [
  { id: 1, name: "Margherita Pizza", price: 299, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Grilled Sandwich", price: 199, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Pasta Alfredo", price: 249, image: "https://via.placeholder.com/150" },
];

const styles = {
  hero: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/1200x400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  },
  heroContent: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  ctaButton: {
    backgroundColor: "#e67e22",
    color: "white",
    border: "none",
    padding: "0.8rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background 0.3s",
    ":hover": {
      backgroundColor: "#d35400",
    },
  },
  featured: {
    padding: "3rem 2rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#2c3e50",
  },
  featuredGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  featuredCard: {
    width: "200px",
    padding: "1rem",
    border: "1px solid #eee",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  featuredImage: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "4px",
  },
};

export default Home;