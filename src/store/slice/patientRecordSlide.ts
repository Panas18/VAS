import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  patientInterface,
  singlePatientInterface,
} from "../sliceInterface/patientInformationInterface";

const initialState: patientInterface = {
  data: [],
};

export const patientInformationSlice = createSlice({
  name: "patientInformation",
  initialState,
  reducers: {
    addPatientDetails: (
      state: patientInterface,
      action: PayloadAction<singlePatientInterface>,
    ) => {
      state.data.push(action.payload);
    },
  },
});

export const { addPatientDetails } = patientInformationSlice.actions;
export default patientInformationSlice.reducer;
