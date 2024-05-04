import { createSlice } from "@reduxjs/toolkit";

const filterOptionsSlice = createSlice({
    name:"filterOptions",
    initialState:{
        companies:[],
        roles:[],
        locations:[],

    },
    reducers:{
        addCompanies:(state,action)=>{
            for(let val of action.payload){
                if(!state.companies.includes(val))
                state.companies.push(val)
            }
        },
        addRoles:(state,action)=>{
            for(let val of action.payload){
                if(!state.roles.includes(val))
                state.roles.push(val)
            }
        },
        addLocations:(state,action)=>{
            for(let val of action.payload){
                if(!state.locations.includes(val))
                state.locations.push(val)
            }
        }
    }
})

export default filterOptionsSlice.reducer
export const {addCompanies,addRoles,addLocations}=filterOptionsSlice.actions

