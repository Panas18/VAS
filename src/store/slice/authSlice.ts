import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

interface state {
  isAuth: boolean;
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state: state) => {
      console.log("loginaction");

      state.isAuth = true;
    },
    logoutAction: (state: state) => {
      state.isAuth = false;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
