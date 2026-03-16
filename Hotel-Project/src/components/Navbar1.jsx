import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css"; // import the CSS module

function Navbar({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Royal Hotel</h2>

      <div className={styles.links}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/menu" className={styles.link}>Menu</Link>
        <Link to="/cart" className={styles.link}>
          <ShoppingCart size={20} />
          Cart
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;