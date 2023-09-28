import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Jsondata = createApi({
  reducerPath: "Alldata",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "/products",
    }),
    getSingleData: builder.query({
      query: (product) => `products/search?q=${product}`
    })
  })
})

export const { useGetAllDataQuery, useGetSingleDataQuery } = Jsondata;