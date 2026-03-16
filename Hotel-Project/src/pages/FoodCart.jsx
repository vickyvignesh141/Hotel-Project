import Navbar from "../components/Navbar1";
import styles from "./Cart.module.css"; // import the CSS module

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar cart={cart} />

      <div className={styles.container}>
        <h1 className={styles.title}>Your Cart</h1>

        {cart.length === 0 ? (
          <p className={styles.empty}>Your cart is empty</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemInfo}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={styles.qtyBtn}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className={styles.qty}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.totalSection}>
              <h2>Total: ₹{totalPrice}</h2>

              <button
                className={styles.checkoutBtn}
                onClick={() =>
                  alert(`🍽️ Thank you for choosing our restaurant!\n\nYour delicious order worth ₹${totalPrice} is ready to proceed to checkout.\n\nLet's complete your order and enjoy the meal! 😋`)
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;