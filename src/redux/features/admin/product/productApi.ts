import { TResponseRedux } from "../../../../types/global";
import { TProduct } from "../../../../types/product.type";
import { baseApi } from "../../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  // productApi.ts
getProducts: builder.query({
  query: (filters = {}) => {
    const queryParams = new URLSearchParams();

    if (filters.search) queryParams.append("search", filters.search);
    if (filters.brand) queryParams.append("brand", filters.brand);
    if (filters.type) queryParams.append("type", filters.type);
    if (filters.minPrice) queryParams.append("minPrice", filters.minPrice);
    if (filters.maxPrice) queryParams.append("maxPrice", filters.maxPrice);
    if (filters.model) queryParams.append("model", filters.model);
    if (filters.available) queryParams.append("available", filters.available);

    return { url: `/products?${queryParams.toString()}`, method: "GET" };
  },
  transformResponse: (response: TResponseRedux<TProduct[]>) => {
    return {
      data: response.data,
      meta: response.meta,
    };
  },
}),

    updateProducts: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
        invalidatesTags: ["Products"],
      }),
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        invalidatesTags: ["Products"],
      }),
    }),
  }),
});

export const { useAddProductsMutation, useGetProductsQuery, useUpdateProductsMutation, useDeleteProductsMutation } = productApi;

// Define a service using a base URL and expected endpoints
// export const productApi = createApi({
//   reducerPath: "products",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
//   tagTypes: ["product"],
//   endpoints: (builder) => ({
//     getAllProducts: builder.query({
//       query: () => `/products`,
//       providesTags: ["product"],
//     }),
//     addProducts: builder.mutation({
//       query: (body) => ({

//         url: `/products`,
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["product"],
//     }),
//     updateProducts: builder.mutation({
//       query: ({id,data},) => ({
//         url: `/products/${id}`,
//         method: "PATCH",
//         data,
//       }),
//     }),
//     deleteProducts: builder.mutation({
//       query: (id) => ({
//         url: `/products/${id}`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const { useGetAllQuizQuery,useAddQuizMutation } = quizApi;
