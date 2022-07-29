import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: authReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
