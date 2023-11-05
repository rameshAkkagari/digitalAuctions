import { createSlice } from "@reduxjs/toolkit";

const publishShow = createSlice({
    name:"modal",
    initialState:{modaltoggle:false},
    reducers:{
        toggle(state){
            state.modaltoggle = !state.modaltoggle
        }
    }
})
export const publishShowActions = publishShow.actions

export default publishShow