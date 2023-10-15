// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productsSlice";
import thunkMiddleware from "redux-thunk"; // Import Redux Thunk

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [thunkMiddleware], // Add Redux Thunk middleware
});

export default store;
