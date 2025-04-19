import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { JwtPayload } from "jsonwebtoken";  // Ensure you import this

export interface TUser extends JwtPayload {
  id: string;
  email: string;
  role: "admin" | "user";  
}
 
type TAuthState = {
    user: null | object;
    token: null | string;
}

const initialState: TAuthState = {
    user: null,
    token: null
}

const authSlices = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
           // const {user, token} = action.payload;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout : (state) => {
            state.user = null;
            state.token = null;
        },
    },
})

export const {setUser, logout} = authSlices.actions;
export default authSlices.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;