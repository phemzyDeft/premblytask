import { createSlice } from "@reduxjs/toolkit";
import { allData } from "../..";

const cartSlice = createSlice ({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    }
  }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions