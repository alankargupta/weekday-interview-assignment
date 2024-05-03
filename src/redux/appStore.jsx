import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobsSlice";


const appStore = configureStore({
    reducer:{
      jobs:jobsSlice
    }
})

export default appStore