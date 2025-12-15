import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../features/auth/authSlice";

// const getBaseUrl = () => {
//   return import.meta.env.VITE_NODE_ENV === "production"
//     ? "https://bicycle-store-backend-murex.vercel.app/api"
//     : "http://localhost:5000/";
// };
//https://bicycle-store-backend-murex.vercel.app

//https://bicycle-store-backend-murex.vercel.app/api
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/",
  credentials: "include", 
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

   
    console.log("RTK Query Token:", token);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  // eslint-disable-next-line prefer-const
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log("Token expired or invalid → logging out");
    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth, 
  tagTypes: ["User", "Users", "Bikes"],
  endpoints: () => ({}),
});