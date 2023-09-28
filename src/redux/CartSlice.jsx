import { createSlice } from "@reduxjs/toolkit";
import  mockdata from "../mockdata.json"

const cartSlice = createSlice ({
  name: "cart",
  initialState: mockdata,
  reducers: {
    addToCart: (state, action) => {
      
    },
    removeFromCart: (state, action) => {
      const { itemId } = action.payload;
      if (state[itemId] > 0) {
        state[itemId] -= 1;
      }
    },
    updateCartAmount: (state, action) => {
      const { itemId, newAmount } = action.payload;
      state[itemId] = newAmount;
    },
  },
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, updateCartAmount} = cartSlice.actions