import { createSlice } from "@reduxjs/toolkit";
import { fetchRegionData } from "./thunk";


const regionSlice = createSlice({
    name : "region",
    initialState : {
        data : [],
        country : "",
        isLoading : true,
        error : null,
    },
    reducers :{
        changeCountry : (state,action) => {
            state.country = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchRegionData.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchRegionData.fulfilled ,(state,action) => {
            state.data = action.payload;
            state.isLoading = false;
        }),
        builder.addCase(fetchRegionData.rejected, (state,action) => {
            state.error = action.error.message;
            state.isLoading = false;
        })
    }
})
export const {changeCountry} = regionSlice.actions;
export default regionSlice.reducer;
