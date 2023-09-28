import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/CartSlice";
// import Mockdata from  "../mockdata.json"

export const Jsondata = createApi({
  reducerPath: "Alldata",
  baseQuery: fetchBaseQuery({ baseUrl: "../mockdata.json" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "/",
    }),
    getSingleData: builder.query({
      query: (product) => `products/search?q=${product}`
    })
  })
})


const store = configureStore({
  reducer: ({
    cart: CartSlice
  })
})

export const { useGetAllDataQuery, useGetSingleDataQuery } = Jsondata;
export default store