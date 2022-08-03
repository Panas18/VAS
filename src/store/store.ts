import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./slice/authSlice";
import patientFormReucers from "./slice/patientRecordSlide";
import vaccineAppointmentReducers from "./slice/vaccineAppointmentSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: authReducers,
    patientRecord: patientFormReucers,
    vaccineAppointment: vaccineAppointmentReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
