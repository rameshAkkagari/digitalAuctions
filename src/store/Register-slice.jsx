import { createSlice } from "@reduxjs/toolkit";

const Register  = createSlice({
    name:"register",
    initialState:{ resitertoggle:true},
    reducers:{
        registerToggle(state){
            state.resitertoggle = !state.resitertoggle
        }
    }
})

export const RegisterActions = Register.actions

export default Register