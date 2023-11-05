 import { createSlice } from "@reduxjs/toolkit";

 const HeaderShow = createSlice({
    name:"headerShow",
    initialState:{headerShow:false},
    reducers:{
        moveMainHeader(state){
            state.headerShow  = true
        }
    }
 })
export const HeaderActions = HeaderShow.actions

 export default HeaderShow;
 