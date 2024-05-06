import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const loadProducts = createAsyncThunk("product/loadProducts", async() => {
	const { data } = await axios.get(
		'https://65bc8f63b51f9b29e931b9bc.mockapi.io/domik'
	)
   return data
 })

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
	},
	extraReducers: builder => {
		// builder.addCase(loadProducts.pending, () => {})
		builder.addCase(loadProducts.fulfilled, (state, {payload}) => {
			state.products = payload
		})
		// builder.addCase(loadProducts.rejected, () => {})
	},
})

export const productsReducer = productSlice.reducer
