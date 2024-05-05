import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    jdUids: {},
  },
  reducers: {
    addJobs: (state, action) => {
      for (let val of action.payload) {
        if (!(val.jdUid in state.jdUids)) state.jobs.push(val);
      }
    },
    addJdUids: (state, action) => {
      for (let val of action.payload) {
        state.jdUids[val] = true;
      }
    },
  },
});

export default jobSlice.reducer;
export const { addJobs, addJdUids } = jobSlice.actions;
