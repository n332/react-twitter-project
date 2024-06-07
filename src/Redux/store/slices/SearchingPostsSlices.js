import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchingAction = createAsyncThunk(
    'posts/search',
    async(keyword)=>{
        const response = await axios.get(`http://localhost:3000/api/tweets/search?q=${keyword}`);
        return response.data;
    }
)

const SearchingSlice = createSlice({
    name:"SearchingArr",
    initialState:{SearchingArr:[]},
    extraReducers:(builder)=>{
        builder.addCase(SearchingAction.fulfilled,(state,action)=>{
            state.SearchingArr = [];
            action.payload.forEach((item) =>{
                state.SearchingArr.push(item);
            });


        })
    }
})

export default SearchingSlice.reducer;