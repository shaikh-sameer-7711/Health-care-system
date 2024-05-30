import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'Reception Details',
    initialState:{
        value:[]
    },
    reducers:{
        ReceptionD:(state,action)=>{
            state.value = action.payload
        },
        deleteRec:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const { ReceptionD , deleteRec} = Slice.actions
export default Slice.reducer