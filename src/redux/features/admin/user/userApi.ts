import { TResponseRedux } from "../../../../types/global";
import { TUser } from "../../../../types/userManagement.type";
import { baseApi } from "../../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
     getUsers: builder.query({
      query: () => {
        return { url: "/users", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
        invalidatesTags: ["Users"],
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/Users/${id}`,
        method: "DELETE",
        invalidatesTags: ["Users"],
      }),
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation  } = usersApi;