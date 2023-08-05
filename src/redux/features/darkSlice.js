import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useEffect } from "react";

const initialState = {
  dark: false,
};

export const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    switchMode: (state) => {
      state.dark = !state.dark;
        // Cookies.set("dark", state.dark);
      Cookies.set("dark", state.dark )
    },
  },
});

export const { switchMode } = darkSlice.actions;
export default darkSlice.reducer;
