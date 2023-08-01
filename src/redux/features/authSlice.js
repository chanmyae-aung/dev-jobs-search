import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  forgotEmail: null,
  forgotCode: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.user = Cookies.set("user", JSON.stringify(state.user));
      state.token = Cookies.set("token", state.token);
    },
    removeUser: (state) => {
      (state.user = null), (state.token = null);
      Cookies.remove("user"), Cookies.remove("token");
    },
    addForgotData: (state, { payload }) => {
      state.forgotEmail = payload.forgotEmail;
      state.forgotCode = payload.forgotCode;
      Cookies.set("forgotEmail", (state.forgotEmail));
      Cookies.set("forgotCode", (state.forgotCode));
    },
  },
});

export const { addUser, removeUser, addForgotData } = authSlice.actions;
export default authSlice.reducer;