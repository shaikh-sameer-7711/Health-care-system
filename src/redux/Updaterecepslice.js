import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'update Reception',
    initialState:{
        value:{}
    },
    reducers:{
        Updatereception:(state,action)=>{
            state.value = action.payload
        },
        UpdatePatient:(state,action)=>{
            state.value = action.payload
        }
    }
    
})

export const {Updatereception,UpdatePatient} = slice.actions
export default slice.reducer