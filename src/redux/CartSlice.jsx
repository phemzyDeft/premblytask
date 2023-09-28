import { createSlice } from "@reduxjs/toolkit";
import  mockdata from "../mockdata.json"

const cartSlice = createSlice ({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(x =>x.id !== action.payload.id)
    },
  },
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions