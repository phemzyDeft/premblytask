import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Apitest1 = createApi({
  reducerPath: "Apitest1",
  baseQuery: fetchBaseQuery({ baseUrl: "https://quotable.io" }),
  endpoints: (builder) => ({
    quote: builder.query({
      query: () => "/quotes?page=1",
    })
  })
})

export const { useQuoteQuery } = Apitest1;