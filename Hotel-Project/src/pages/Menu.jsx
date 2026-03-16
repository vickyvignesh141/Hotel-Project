import { useState } from "react";
import Navbar from "../components/Navbar1";
import FoodCard from "../components/FoodCard";
import foods from "../data/food";
import styles from "./Menu.module.css";

function Menu({ addToCart, cart }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [popup, setPopup] = useState("");

  const handleAddToCart = (food) => {
    addToCart(food);
    setPopup(`${food.name} added to cart`);

    setTimeout(() => {
      setPopup("");
    }, 2000);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar cart={cart} />

      {popup && <div className={styles.popup}>{popup}</div>}

      <div className={styles.header}>
        <h1 className={styles.title}>Our Menu</h1>

        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.search}
        />
      </div>

      {filteredFoods.length === 0 ? (
        <p className={styles.noResult}>No dishes found</p>
      ) : (
        <div className={styles.container}>
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={() => handleAddToCart(food)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;