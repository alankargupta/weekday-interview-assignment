import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    companyName: [],
    role: [],
    location: [],
    remote: [],
    exp: [],
    minSalary: [],
  },
  reducers: {
    addCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addRemote: (state, action) => {
      state.remote = action.payload;
    },
    addExp: (state, action) => {
      state.exp = action.payload;
    },
    addMinSalary: (state, action) => {
      state.minSalary = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  addCompanyName,
  addRole,
  addLocation,
  addRemote,
  addExp,
  addMinSalary,
} = filtersSlice.actions;
