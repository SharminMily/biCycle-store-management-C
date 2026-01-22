import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    createOrder: builder.mutation({
  query: (userInfo) => ({
    url: "/orders",
    method: "POST",
    body: userInfo,
  }),
  // Optional: better error shape
  transformErrorResponse: (response) => {
    if (typeof response.data === 'string' && response.data.includes('Not Found')) {
      return { message: 'Order endpoint not found (404) – check baseUrl or route' };
    }
    return response.data;
  },
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