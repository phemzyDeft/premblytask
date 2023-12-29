import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Apitest2 = createApi({
  reducerPath: "Apitest2",
  baseQuery: fetchBaseQuery({ baseUrl: "https://covid19.mathdro.id/api" }),
  endpoints: (builder) => ({
    covid: builder.query({
      query: () => "/",
    })
  })
})

export const { useCovidQuery } = Apitest2;