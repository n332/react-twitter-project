//Get top 5 trends from API 
// put them in an array
// display them in Search component

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const TrendingListAction = createAsyncThunk(
    "posts/trendingList",
    async()=>{
        const response = await axios.get('http://localhost:3000/api/trends');
        return response.data
    }
)

const TrensingListSlices = createSlice({
    name:"TrendingListArr",
    initialState:{TrendingListArr:[]},
    extraReducers:(builder)=>{
        builder.addCase(TrendingListAction.fulfilled,(state,action)=>{
            state.TrendingListArr = action.payload;
        });
    }
})

export default TrensingListSlices.reducer;