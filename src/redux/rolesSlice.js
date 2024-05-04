import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
    name:"roles",
    initialState:{
        roles:[]
    },
    reducers:{
        addRoles:(state,action)=>{
            for(let val of action.payload){
                if(!state.roles.includes(val))
                state.roles.push(val)
            }
        }
    }
})

export default rolesSlice.reducer
export const {addRoles}=rolesSlice.actions