import { configureStore } from "@reduxjs/toolkit";
import HeaderShow from "./Header-Slice";
import publishShow from "./publish-Slice";
import UnPublishShow from "./UnPublish-slice";
import Register from "./Register-slice";
import CurrentPage from "./CurrentPage-slice";
const store = configureStore({
    reducer:{
        head:HeaderShow.reducer,
        publish:publishShow.reducer,
        unpublish:UnPublishShow.reducer,
        register:Register.reducer,
        pagination:CurrentPage.reducer
    }
})
export default store