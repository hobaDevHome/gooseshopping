// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";
import thunkMiddleware from "redux-thunk"; // Import Redux Thunk

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
  middleware: [thunkMiddleware], // Add Redux Thunk middleware
});

export default store;
