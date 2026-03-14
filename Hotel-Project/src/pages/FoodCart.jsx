import Navbar from "../components/Navbar1";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar cart={cart} />

      <div style={styles.container}>
        <h1 style={styles.title}>Your Cart</h1>

        {cart.length === 0 ? (
          <p style={styles.empty}>Your cart is empty</p>
        ) : (
          <>
            <div style={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div style={styles.itemInfo}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <div style={styles.quantityControl}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={styles.qtyBtn}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span style={styles.qty}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.totalSection}>
              <h2>Total: ₹{totalPrice}</h2>
              <button style={styles.checkoutBtn} onClick={() => alert("Proceed to checkout")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "2rem",
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#7f8c8d",
  },
  cartItems: {
    marginBottom: "2rem",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    borderBottom: "1px solid #eee",
  },
  itemImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemInfo: {
    flex: 1,
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  qtyBtn: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1.2rem",
    ":disabled": {
      backgroundColor: "#bdc3c7",
      cursor: "not-allowed",
    },
  },
  qty: {
    minWidth: "30px",
    textAlign: "center",
    fontSize: "1.1rem",
  },
  removeBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "0.3rem 0.8rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  totalSection: {
    textAlign: "right",
    borderTop: "2px solid #333",
    paddingTop: "1rem",
  },
  checkoutBtn: {
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    padding: "0.8rem 2rem",
    fontSize: "1.1rem",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default Cart;