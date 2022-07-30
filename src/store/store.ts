import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slice/authSlice";
import patientFormReucers from "./slice/patientRecordSlide";

export const store = configureStore({
  reducer: {
    isLoggedIn: authReducers,
    patientRecord: patientFormReucers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
