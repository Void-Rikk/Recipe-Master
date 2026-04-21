import type { User } from "../../utils/types.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    user: User | null,
    isAuthenticated: boolean,
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;