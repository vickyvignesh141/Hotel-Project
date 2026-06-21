function FoodCard({ food, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={food.image} alt={food.name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.name}>{food.name}</h3>
        <p style={styles.price}>₹{food.price}</p>
        <button onClick={() => addToCart(food)} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "240px",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.2s",
    backgroundColor: "white",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  content: {
    padding: "1rem",
    textAlign: "center",
  },
  name: {
    margin: "0 0 0.5rem 0",
    fontSize: "1.2rem",
    color: "#2c3e50",
  },
  price: {
    margin: "0 0 1rem 0",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#27ae60",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
    width: "100%",
    ":hover": {
      backgroundColor: "#2980b9",
    },
  },
};

export default FoodCard;