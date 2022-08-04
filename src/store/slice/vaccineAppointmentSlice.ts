import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  singleVaccineServiceInterface,
  vaccineAppointmentListInterface,
} from "../sliceInterface/vaccineAppointmentInterface";

const initialState: vaccineAppointmentListInterface = {
  data: [],
};

export const vaccineAppointmentSlice = createSlice({
  name: "vaccineAppointment",
  initialState,
  reducers: {
    addVaccineAppointment: (
      state: vaccineAppointmentListInterface,
      action: PayloadAction<singleVaccineServiceInterface>,
    ) => {
      state.data.push(action.payload);
    },
  },
});

export const { addVaccineAppointment } = vaccineAppointmentSlice.actions;
export default vaccineAppointmentSlice.reducer;
