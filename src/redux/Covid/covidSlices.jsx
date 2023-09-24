import { createSlice } from "@reduxjs/toolkit";
import { fetchCovidData } from "./thunk";


const covidSlice = createSlice({
    name : "covid",
    initialState : {
        data : {},
        isLoading : true,
        error : null,
    }, 
    extraReducers : (builder) => {
        builder.addCase(fetchCovidData.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchCovidData.fulfilled ,(state,action) => {
            state.data = action.payload;
            state.isLoading = false;
        }),
        builder.addCase(fetchCovidData.rejected, (state,action) => {
            state.error = action.error.message;
            state.isLoading = false;
        })
    }
})


export default covidSlice.reducer;