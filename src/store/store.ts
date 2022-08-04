import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slice/authSlice";
import patientFormReucers from "./slice/patientRecordSlide";
import serviceReducers from "./slice/serviceSlice";
import appointmentReducers from "./slice/appointmentSlice";
export const store = configureStore({
  reducer: {
    isLoggedIn: authReducers,
    patientRecord: patientFormReucers,
    serviceRecord: serviceReducers,
    appointmentRecord: appointmentReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
