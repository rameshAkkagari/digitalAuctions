import { createSlice } from "@reduxjs/toolkit";

const CurrentPage = createSlice({
    name:"pagination",
    initialState:{
        currentPage: 1 ,
    },
    reducers:{
        handlerIncreament(state){
            state.currentPage = state.currentPage + 1
        },
        handlerDecrement(state){
            state.currentPage = state.currentPage -1
        }
    }
})

export const CurrentpageAuctions = CurrentPage.actions

export default CurrentPage;