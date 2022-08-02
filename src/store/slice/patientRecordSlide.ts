import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  patientListInterface,
  singlePatientInterface,
} from "../sliceInterface/patientInformationInterface";

const initialState: patientListInterface = {
  data: [],
};

export const patientInformationSlice = createSlice({
  name: "patientInformation",
  initialState,
  reducers: {
    addPatientDetails: (
      state: patientListInterface,
      action: PayloadAction<singlePatientInterface>,
    ) => {
      state.data.push(action.payload);
    },
  },
});

export const { addPatientDetails } = patientInformationSlice.actions;
export default patientInformationSlice.reducer;
