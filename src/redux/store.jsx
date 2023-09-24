import { configureStore } from "@reduxjs/toolkit";
import covidSlices from "./Covid/covidSlices";
import regionSlice from "./Covid/regionSlice";



export const store = configureStore({
    reducer:{
        covid : covidSlices,
        region : regionSlice,
    }
})