import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/cardSlice";






const store=configureStore({
    reducer:{
        card:cardSlice
    }
})


export default store