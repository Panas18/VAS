import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPatient from "../sliceInterface/patient";

interface state {
  data: IPatient[];
}

export const patientSlice = createSlice({
  name: "patientInformation",
  initialState: {
    data: [] as IPatient[],
  },
  reducers: {
    addPatientsList: (state: state, action: PayloadAction<IPatient[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addPatientsList } = patientSlice.actions;
export default patientSlice.reducer;
