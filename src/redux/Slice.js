import { createSlice } from "@reduxjs/toolkit";

 const localvalues = JSON.parse(localStorage.getItem('userinformation'))

const initialState = {
     value : localvalues || {name:undefined,type:undefined,token:undefined,isLogin:false}
    
}
const slice = createSlice({
    name:"RegisterUser",
    initialState,
    reducers:{
        UserReducer:(state,action) =>{
            state.value = action.payload
             localStorage.setItem("userinformation",JSON.stringify(action.payload))
        }
    }
})
export const {UserReducer} = slice.actions
export default slice.reducer