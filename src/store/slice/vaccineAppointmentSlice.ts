import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  singleVaccineAppointmentInterface,
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
      action: PayloadAction<singleVaccineAppointmentInterface>,
    ) => {
      state.data.push(action.payload);
    },
  },
});

export const { addVaccineAppointment } = vaccineAppointmentSlice.actions;
export default vaccineAppointmentSlice.reducer;
