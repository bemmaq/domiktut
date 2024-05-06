import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct=createAsyncThunk("Domik/getProduct",async()=>{
    const {data}=await axios.get("https://65bc8f63b51f9b29e931b9bc.mockapi.io/domik");
    return data;
})



const productSlice=createSlice({
    name:'Domik',
    initialState:{
        shopData:[],
        isLoading:false,
        error:'',
        itemCart:[]
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.shopData = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message; 
            });
    }
});

export default productSlice.reducer;