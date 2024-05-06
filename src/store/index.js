import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./ProductSlices";
import cardSlice from "./slice/cardSlice";


const store = configureStore({
    reducer:{
        shop:ProductSlices,
        card:cardSlice
    }
})
<<<<<<< HEAD
=======

export default store



>>>>>>> 9b30b72886ec166d250cce87c23518233b1a095c
export default store

