import { createSlice } from "@reduxjs/toolkit";

const filterOptionsSlice = createSlice({
  name: "filterOptions",
  initialState: {
    companies: [],
    roles: [],
    locations: [],
    yearsOfExp: [],
    minSalaries: [],
  },
  reducers: {
    addCompanies: (state, action) => {
      for (let val of action.payload) {
        if (!state.companies.includes(val)) state.companies.push(val);
      }
    },
    addRoles: (state, action) => {
      for (let val of action.payload) {
        if (!state.roles.includes(val)) state.roles.push(val);
      }
    },
    addLocations: (state, action) => {
      for (let val of action.payload) {
        if (!state.locations.includes(val)) state.locations.push(val);
      }
    },
    addYearsOfExp: (state, action) => {
      for (let val of action.payload) {
        if (!state.yearsOfExp.includes(val)) state.yearsOfExp.push(val);
      }
    },
    addminSalaries: (state, action) => {
      for (let val of action.payload) {
        if (!state.minSalaries.includes(val)) state.minSalaries.push(val);
      }
    },
  },
});

export default filterOptionsSlice.reducer;
export const {
  addCompanies,
  addRoles,
  addLocations,
  addYearsOfExp,
  addminSalaries,
} = filterOptionsSlice.actions;
