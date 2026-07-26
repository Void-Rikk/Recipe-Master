import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice.ts"


const loadStateFromLocalStorage = () => {
    const serializedUser = localStorage.getItem("user");

    if (!serializedUser) {
        return;
    }

    const user = JSON.parse(serializedUser);
    return { user: {
        user,
        isAuthenticated: true
    }};
}

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;