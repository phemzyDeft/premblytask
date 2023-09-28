// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/CartSlice'; // Import your cart slice
import { Jsondata } from '../redux/Jsondata'; // Import your data slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cartReducer to the store
    [Jsondata.reducerPath]: Jsondata.reducer, // Add data slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Jsondata.middleware),
});

export default store;