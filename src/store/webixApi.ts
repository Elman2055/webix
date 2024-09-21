import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://logohub.kz/api";

export const webixApi = createApi({
  reducerPath: "webixApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (buider) => ({
    getProducts: buider.mutation({
      query: (body: string) => ({
        url: "/products/products",
        method: "POST",
        body: { category: body },
      }),
    }),
  }),
});

export const { useGetProductsMutation } = webixApi;
