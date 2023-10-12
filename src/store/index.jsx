import { configureStore } from "@reduxjs/toolkit";
import HeaderShow from "./Header-Slice";
import ModalShow from "./Modal-Slice";
import UnPublishShow from "./UnPublish-slice";
const store = configureStore({
    reducer:{
        head:HeaderShow.reducer,
        modal:ModalShow.reducer,
        unpublish:UnPublishShow.reducer
    }
})
export default store