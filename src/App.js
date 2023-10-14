import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bags from "./pages/Bags";
import Belts from "./pages/Belts";
import Sneakers from "./pages/Sneakers";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />

        <Route path="/Bags" element={<Category category="bags" />} />
        <Route path="/Belts" element={<Category category="belts" />} />
        <Route path="/Sneakers" element={<Category category="sneakers" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
