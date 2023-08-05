import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    },
    nextPage: (state) => {
      state.currentPage += 1
    }
  },
});

export const { searchJobs, addJobs, nextPage } = jobSlice.actions;
export default jobSlice.reducer;
