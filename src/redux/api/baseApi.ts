import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// const getBaseUrl = () => {
//   return import.meta.env.VITE_NODE_ENV === "production"
//     ? "https://bicycle-store-backend-murex.vercel.app/api"
//     : "http://localhost:5000/";
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bicycle-store-backend-murex.vercel.app/api",
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // ✅ Attach token
      }

      return headers;
    },
  }),
  endpoints: () => ({
   
  }),
});
//credentials: 'include',
