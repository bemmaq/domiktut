import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./ProductSlices";


const store = configureStore({
    reducer:{
        shop:ProductSlices,
    }
})
export default store