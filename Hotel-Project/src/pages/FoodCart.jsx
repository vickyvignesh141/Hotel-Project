import Navbar from "../components/Navbar1";

function Cart({ cart }) {
  return (
    <div>
      <Navbar />

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;