import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { products } from "./data/data";

import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home products={products} />} />

        <Route
          path="/Bags"
          element={<Category category="bags" products={products} />}
        />
        <Route
          path="/Belts"
          element={<Category category="belts" products={products} />}
        />
        <Route
          path="/Sneakers"
          element={<Category category="sneakers" products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
