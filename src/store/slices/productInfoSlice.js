// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const loadProductsInfo = createAsyncThunk(
// 	'productInfo/loadProductsInfo',
// 	async (id) => {
// 		const { data } = await axios.get(
// 			`https://65bc8f63b51f9b29e931b9bc.mockapi.io/domik${id}`
// 		)
// 		return data
// 	}
// )

// const productSliceInfo = createSlice({
// 	name: 'productInfo',
// 	initialState: {
// 		productsInfo: [],
// 	},
// 	extraReducers: builder => {
// 		// builder.addCase(loadProducts.pending, () => {})
// 		builder.addCase(loadProductsInfo.fulfilled, (state, { payload }) => {
// 			state.productsInfo = payload
// 		})
// 		// builder.addCase(loadProducts.rejected, () => {})
// 	},
// })

// export const productsReducerInfo = productSliceInfo.reducer


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const loadProductsInfo = createAsyncThunk(
	'productInfo/loadProductsInfo',
	async (id) => {
		const {data} = await axios.get(
			`https://65bc8f63b51f9b29e931b9bc.mockapi.io/domik/${id}`
		)
		return data
          
	}
)

const productSliceInfo = createSlice({
	name: 'productInfo',
	initialState: {
		productsInfo: [],
	},
	extraReducers: builder => {
		// builder.addCase(loadProducts.pending, () => {})
		builder.addCase(loadProductsInfo.fulfilled, (state, { payload }) => {
			state.productsInfo = payload
		})
		// builder.addCase(loadProducts.rejected, () => {})
	},
})

export const productsReducerInfo = productSliceInfo.reducer
