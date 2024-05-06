
import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/productSlice'
import { productsReducerInfo } from './slices/productInfoSlice'


const store = configureStore({
	reducer: {
		products: productsReducer,
		productsInfo: productsReducerInfo,
	},
})

export default store

import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slice/cardSlice";






const store=configureStore({
    reducer:{
        card:cardSlice
    }
})


export default store

