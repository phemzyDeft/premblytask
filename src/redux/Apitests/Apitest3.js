import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Apitest3 = createApi({
  reducerPath: "Apitest3",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me" }),
  endpoints: (builder) => ({
    user: builder.query({
      query: () => "/api",
    })
  })
})

export const { useUserQuery } = Apitest3;