import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name:"filters",
    initialState:{
        companyName:[],
    },
    reducers:{
        addCompanyName:(state,action)=>{
             state.companyName=action.payload
            }
        
    }
})

export default filtersSlice.reducer
export const {addCompanyName}=filtersSlice.actions