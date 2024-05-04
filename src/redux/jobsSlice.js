import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"jobs",
    initialState:{
        jobs:[]
    },
    reducers:{
        addJobs: (state,action)=>{
            state.jobs.push(...action.payload)
        }
    }
})

export default jobSlice.reducer
export const {addJobs}= jobSlice.actions