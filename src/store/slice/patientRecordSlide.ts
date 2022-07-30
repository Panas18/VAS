import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patientInformationInterface } from "../sliceInterface/patientInformationInterface";

const initialPatientDetails: patientInformationInterface = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  ethinicity: "",
  address: {
    street: "",
    state: "",
    city: "",
  },
  payment: {
    insuranceId: "",
    memberId: "",
    insuranceProvider: "",
  },
};

export const patientInformationSlice = createSlice({
  name: "patientInformation",
  initialState: {
    data: initialPatientDetails,
  },
  reducers: {
    addPatientDetails: (
      state,
      action: PayloadAction<patientInformationInterface>,
    ) => {
      state.data = action.payload;
    },
  },
});

export const { addPatientDetails } = patientInformationSlice.actions;
export default patientInformationSlice.reducer;
