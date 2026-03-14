import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Home from "./pages/LandingHome"
import Cart from "./pages/FoodCart"
import Menu from "./pages/Menu"

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App