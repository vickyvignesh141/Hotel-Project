import Navbar from "../components/Navbar1";
import FoodCard from "../components/FoodCard";
import foods from "../data/food";

function Menu({ addToCart }) {
  return (
    <div>
      <Navbar />

      <h1>Our Menu</h1>

      <div style={styles.container}>
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px"
  }
};

export default Menu;