import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})