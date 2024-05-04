import { createSlice } from "@reduxjs/toolkit";

const companyNames = createSlice({
    name:'companies',
    initialState:{
        companies:[]
    },
    reducers:{
        addCompanies:(state,action)=>{
            for(let val of action.payload){
                if(!state.companies.includes(val))
                state.companies.push(val)
            }
        }
    }
})
export default companyNames.reducer
export const {addCompanies}=companyNames.actions