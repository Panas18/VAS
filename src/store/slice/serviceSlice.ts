import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  singleVaccineServiceInterface,
  vaccineServiceListInterface,
} from "../sliceInterface/serviceInterface";

const initialState: vaccineServiceListInterface = {
  data: [],
};

export const serviceSlice = createSlice({
  name: "vaccineService",
  initialState,
  reducers: {
    addService: (
      state: vaccineServiceListInterface,
      action: PayloadAction<singleVaccineServiceInterface>,
    ) => {
      state.data.push(action.payload);
    },
  },
});

export const { addService } = serviceSlice.actions;
export default serviceSlice.reducer;
