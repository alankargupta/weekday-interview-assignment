import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name:"filters",
    initialState:{
        companyName:[],
        role:[]
    },
    reducers:{
        addCompanyName:(state,action)=>{
             state.companyName=action.payload
            },
        addRole:(state,action)=>{
           state.role=action.payload

        }
        
    }
})

export default filtersSlice.reducer
export const {addCompanyName,addRole}=filtersSlice.actions