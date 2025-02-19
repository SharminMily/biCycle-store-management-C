import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (userInfo) => ({
          url: "/orders",
          method: "POST",
          body: userInfo,
        }),
      }),
      getOrders: builder.query({
        query: () => "/orders",
      }),
      verifyOrder: builder.query({
        query: (order_id) => ({
          url: "/orders/verify",
          params: {  sp_trxn_id: order_id },
          method: "GET",
        }),
      }),
      deleteOrder: builder.mutation({
        query: (id) => ({
          url: `/orders/${id}`,
          method: "DELETE",
          invalidatesTags: ["orders"],
        }),
      }),
    }),
  });

export const { useCreateOrderMutation, useGetOrdersQuery, useVerifyOrderQuery, useDeleteOrderMutation } = orderApi;