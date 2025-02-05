import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auuthSlice";

const store=configureStore({
    reducer:{
        auth:authReducer
    }
})

export default store;