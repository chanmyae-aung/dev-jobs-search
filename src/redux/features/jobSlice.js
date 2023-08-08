import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  hero: true,
  jobs: null,
  moreJobs: [],
  currentPage: 1,
};

export const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    searchJobs: (state, { payload }) => {
      state.jobs = payload.jobs;
    },
    addJobs: (state, { payload }) => {
      const newJobs = Array.isArray(payload.moreJobs) ? payload.moreJobs : [];
      state.moreJobs.push(...newJobs)
      // state.moreJobs = payload.moreJobs
    },
    nextPage: (state) => {
      state.currentPage += 1
    },
    hideHero: (state) => {
      state.hero = false
    },
  },
});

export const { searchJobs, addJobs, nextPage, hideHero } = jobSlice.actions;
export default jobSlice.reducer;
