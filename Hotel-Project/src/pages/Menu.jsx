import { useState } from "react";
import Navbar from "../components/Navbar1";
import FoodCard from "../components/FoodCard";
import foods from "../data/food";

function Menu({ addToCart, cart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar cart={cart} />

      <div style={styles.header}>
        <h1 style={styles.title}>Our Menu</h1>
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.search}
        />
      </div>

      {filteredFoods.length === 0 ? (
        <p style={styles.noResult}>No dishes found</p>
      ) : (
        <div style={styles.container}>
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "2rem 2rem 1rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "1rem",
  },
  search: {
    padding: "0.8rem 1.5rem",
    width: "300px",
    maxWidth: "80%",
    border: "1px solid #ddd",
    borderRadius: "50px",
    fontSize: "1rem",
    outline: "none",
    transition: "box-shadow 0.3s",
    ":focus": {
      boxShadow: "0 0 5px rgba(52,152,219,0.5)",
    },
  },
  container: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
  },
  noResult: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#7f8c8d",
    marginTop: "2rem",
  },
};

export default Menu;