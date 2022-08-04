import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appointmentInterface } from "../sliceInterface/appointmentInterface";

const initialAppointmentState: appointmentInterface = {
  patientId: "",
  siteLocation: "",
  serviceType: "",
  confirmationCode: "",
};

export const appointmentSlice = createSlice({
  name: "vaccineAppointment",
  initialState: {
    data: initialAppointmentState,
  },
  reducers: {
    addAppointment: (state:any, action: PayloadAction<appointmentInterface>) => {
      state.data = action.payload;
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
