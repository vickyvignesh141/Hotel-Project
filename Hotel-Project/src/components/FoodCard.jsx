function FoodCard({ food, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={food.image} alt={food.name} style={styles.image} />

      <h3>{food.name}</h3>
      <p>₹{food.price}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
    textAlign: "center",
    borderRadius: "10px"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
};

export default FoodCard;