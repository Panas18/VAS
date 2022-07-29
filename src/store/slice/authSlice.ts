import { createSlice } from "@reduxjs/toolkit";

const getInitialState = (): boolean => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const initialState = {
  isAuth: getInitialState(),
};

interface state {
  isAuth: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state: state) => {
      state.isAuth = true;
    },
    logoutAction: (state: state) => {
      state.isAuth = false;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
