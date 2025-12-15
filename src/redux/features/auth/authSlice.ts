import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { JwtPayload } from "jsonwebtoken";

// Full TUser interface matching your backend response
export interface TUser extends JwtPayload {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  role: "admin" | "user";
  status?: "active" | "in-progress" | "blocked";
  createdAt?: string;
  updatedAt?: string;
}

type TAuthState = {
  user: TUser | null;
  token: string | null;
  isLoading: boolean; // To handle initial load after refresh
};

const initialState: TAuthState = {
  user: null,
  token: null,
  isLoading: true, // Start as loading until auth check completes
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
    },
  },
});

export const { setUser, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;