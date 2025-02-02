import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
      providesTags: ["product"],
    }),
    addProducts: builder.mutation({
      query: (body) => ({
    
        url: `/products`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),
    updateProducts: builder.mutation({
      query: ({id,data},) => ({
        url: `/products/${id}`,
        method: "PATCH",
        data,
      }),
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllQuizQuery,useAddQuizMutation } = quizApi;