import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/LandingHome";
import Menu from "./pages/Menu";
import Cart from "./pages/FoodCart";

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart – if item exists, increase quantity, else add new
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  // Update quantity of a cart item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;