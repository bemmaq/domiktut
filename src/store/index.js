import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/productSlice'
import { productsReducerInfo } from './slices/productInfoSlice'
// import { productsInfoReducer } from './slices/infoProducts'

const store = configureStore({
	reducer: {
		products: productsReducer,
		productsInfo: productsReducerInfo,
	},
})

export default store
