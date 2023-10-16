// @ts-nocheck
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { products } from "./data/data";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectStatus,
  selectError,
} from "./redux/slice/productsSlice";

import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const productsList = useSelector(selectProducts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route index element={<Home products={productsList} />} />

        <Route
          path="/Bags"
          element={<Category category="bags" products={productsList} />}
        />
        <Route
          path="/Belts"
          element={<Category category="belts" products={productsList} />}
        />
        <Route
          path="/Sneakers"
          element={<Category category="sneakers" products={productsList} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/products/:id"
          element={<ProductDetails products={productsList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
