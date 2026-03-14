import { Link } from "react-router-dom";

function Navbar({ cart }) {
  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Royal Hotel</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/menu" style={styles.link}>Menu</Link>
        <Link to="/cart" style={styles.link}>
          Cart 🛒
          {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#2c3e50",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background 0.3s",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#e74c3c",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
};

export default Navbar;