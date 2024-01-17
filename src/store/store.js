import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice,
        product : productSlice,
        todo : todoSlice,
    }
})

export default store;