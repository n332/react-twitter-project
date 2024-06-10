// Get the hashtag from Trending component
// get posts by hashtag from API
// display it in TrendingPosts component

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const TrendingPostsAction = createAsyncThunk(
    "posts/trendingPosts",
    async(hashtag)=>{
        const response = await axios.get(`http://localhost:3000/api/trends/${hashtag}`);
        return response.data;
    }
)


const TrensingSlices = createSlice({
    name:"TrendingPostsArr",
    initialState:{TrendingPostsArr:[]},
    extraReducers:(builder)=>{
        builder.addCase(TrendingPostsAction.fulfilled,(state,action)=>{
            state.TrendingPostsArr = action.payload;
        })
    }
})


export default TrensingSlices.reducer;

