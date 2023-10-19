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
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    decreaseItemQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((e) => e.id === item.id);

      if (item.quantity > 1) {
        state.totalQuantity--;
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(item.price);
      } else {
        state.cartItems = state.cartItems.filter((e) => e.id !== item.id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
