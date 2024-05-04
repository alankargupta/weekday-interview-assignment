import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name:"filters",
    initialState:{
        companyName:[],
        role:[],
        location:[]
    },
    reducers:{
        addCompanyName:(state,action)=>{
             state.companyName=action.payload
            },
        addRole:(state,action)=>{
           state.role=action.payload

        },
        addLocation:(state,action)=>{
            state.location=action.payload
 
         }
        
    }
})

export default filtersSlice.reducer
export const {addCompanyName,addRole,addLocation}=filtersSlice.actions