import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice";
import ReceptionDetail from "./receptionslice";
import Updatereception from "./Updaterecepslice";
import PlistforRecep from "./PdforRslice";
import  updatePbyR  from "./PdforRslice";
import  UpdatePatient  from "./Updaterecepslice";

const Store = configureStore({
    reducer:{
        UserInfo : SliceReducer,
        RecepInfo : ReceptionDetail,
        UpdateRecep : Updatereception,
        PatlistforR : PlistforRecep,
        updateP : updatePbyR,
        EditP : UpdatePatient,
    }
}) 
export default Store