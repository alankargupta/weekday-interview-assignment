import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobsSlice";
import filtersSlice from "./filtersSlice";
import filterOptionsSlice from "./filterOptionsSlice";


const appStore = configureStore({
    reducer:{
      jobs:jobsSlice,
      filterOptions:filterOptionsSlice,
      filters:filtersSlice
    }
})

export default appStore