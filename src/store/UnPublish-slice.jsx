import { createSlice } from "@reduxjs/toolkit";

const UnPublishShow = createSlice({
    name:"unpublish",
    initialState:{unPublish:false},
    reducers:{
        toggleUnpublish(state){
            state.unPublish = !state.unPublish
        }
    }
})

export const  UnpublishActions = UnPublishShow.actions

export default UnPublishShow;