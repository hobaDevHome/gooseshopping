// @ts-nocheck

import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const getCartItems = createAsyncThunk(
  "cartitems/getCartItems",

  async () => {
    const response = await getDocs(collection(db, "cart"));
    return {
      list: response.docs.map((data) => {
        return { ...data.data(), id: data.id };
      }),
    };
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          imageSrc: newItem.imageSrc,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalAmount =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
      console.log(state.totalQuantity);
      console.log(newItem);
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.products;
export const selectStatus = (state) => state.cart.status;
export const selectError = (state) => state.cart.error;
