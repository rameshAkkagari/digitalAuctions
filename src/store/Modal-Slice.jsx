import { createSlice } from "@reduxjs/toolkit";

const ModalShow = createSlice({
    name:"modal",
    initialState:{modaltoggle:false},
    reducers:{
        toggle(state){
            state.modaltoggle = !state.modaltoggle
        }
    }
})
export const ModalActions = ModalShow.actions

export default ModalShow