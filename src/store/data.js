// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/CartSlice'; // Import your cart slice
import { Jsondata } from '../redux/Jsondata'; // Import your data slice
import { Apitest1 } from '../redux/Apitests/Apitest1';
import { Apitest2 } from '../redux/Apitests/Apitest2';
import { Apitest3 } from '../redux/Apitests/Apitest3';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cartReducer to the store
    [Jsondata.reducerPath]: Jsondata.reducer, // Add data slice reducer
    [Apitest1.reducerPath]: Apitest1.reducer, // Add data slice reducer
    [Apitest2.reducerPath]: Apitest2.reducer, // Add data slice reducer
    [Apitest3.reducerPath]: Apitest3.reducer, // Add data slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Jsondata.middleware, Apitest1.middleware, Apitest2.middleware, Apitest3.middleware),
});

export default store;