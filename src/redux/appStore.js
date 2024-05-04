import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobsSlice";
import companyNamesSlice from "./companyNamesSlice";
import filtersSlice from "./filtersSlice";
import rolesSlice from "./rolesSlice";


const appStore = configureStore({
    reducer:{
      jobs:jobsSlice,
      companies:companyNamesSlice,
      roles:rolesSlice,
      filters:filtersSlice
    }
})

export default appStore