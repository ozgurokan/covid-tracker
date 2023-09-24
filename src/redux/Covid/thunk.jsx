import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCovidData = createAsyncThunk("covid/fethCovidData", async (country) => {
    
    const response = await axios.get(`https://covid-api.com/api/reports/total?`,{
        params :{
            ...(country && {iso : country}),
        }
    }
    )
    const data = response.data;
    return data.data;
})

export const fetchRegionData = createAsyncThunk("covid/fetchRegionData", async () => {
    const response = await axios.get(`https://covid-api.com/api/regions?order=iso&sort=asc`);
    const data = response.data;
    return data.data;
})