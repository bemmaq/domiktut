import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./ProductSlices";
import cardSlice from "./slice/cardSlice";


const store = configureStore({
    reducer:{
        shop:ProductSlices,
        card:cardSlice
    }
})
export default store