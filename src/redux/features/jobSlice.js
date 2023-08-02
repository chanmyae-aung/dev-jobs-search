import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: null
}

export const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {
        searchJobs: (state, {payload}) => {
            state.jobs = payload.jobs
        }
    }
})

export const {searchJobs} = jobSlice.actions;
export default jobSlice.reducer;