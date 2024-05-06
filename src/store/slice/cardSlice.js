import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCard = createAsyncThunk("card/getCard", async () => {
  return await  axios.get("https://65bc8f63b51f9b29e931b9bc.mockapi.io/domik")
});

const cardSlice = createSlice({
  name: "card",
  initialState: {
    dataCard: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCard.fulfilled, (state, action) => {
      state.dataCard = action.payload.data
      });
  },
});


export default cardSlice.reducer
