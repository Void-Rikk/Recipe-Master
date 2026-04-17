import type { User } from "../../utils/types.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type UserState = User;

const initialState: UserState = {
    id: -1,
    first_name: "",
    last_name: "",
    bio: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.bio = action.payload.bio;
        }
    }
});

export const { set } = userSlice.actions;

export default userSlice.reducer;