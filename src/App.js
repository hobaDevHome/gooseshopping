import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route path="/Bags" exact element={<Bags />} />
        <Route path="/Belts" exact element={<Belts />} />
        <Route path="/Sneakers" exact element={<Sneakers />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
