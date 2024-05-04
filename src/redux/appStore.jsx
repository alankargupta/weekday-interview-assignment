import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobsSlice";
import companyNamesSlice from "./companyNamesSlice";
import filtersSlice from "./filtersSlice";


const appStore = configureStore({
    reducer:{
      jobs:jobsSlice,
      companies:companyNamesSlice,
      filters:filtersSlice
    }
})

export default appStore