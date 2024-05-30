import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'patient list for reception',
    initialState:{
        value:{}
    },
    reducers:{
        updatePbyR:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { updatePbyR } = slice.actions
export default slice.reducer