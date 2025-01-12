import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchingAction = createAsyncThunk(
    'posts/search',
    async(keyword)=>{
        const response = await axios.get(`http://localhost:3000/api/tweets/search?q=${keyword}`);
        // navigate('/searching-posts');  
        return response.data;
    }
)

const SearchingSlice = createSlice({
    name:"SearchingArr",
    initialState:{SearchingArr:[]},
    extraReducers:(builder)=>{
        builder.addCase(SearchingAction.fulfilled,(state,action)=>{
            state.SearchingArr = []
            state.SearchingArr = action.payload

        })

    }
})

export default SearchingSlice.reducer;