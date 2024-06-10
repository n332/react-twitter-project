import { configureStore } from "@reduxjs/toolkit";
import SearchingReducer from "./slices/SearchingPostsSlices"
import TrendingListReducer from "./slices/TrendingListSlice"
import TrendingPostsReducer from "./slices/TrendingPostsSlice"
import tweetsSlice from "./slices/tweetsSlice";

const store = configureStore({

    reducer:{
        search: SearchingReducer,
        trendingList:TrendingListReducer,
        trendingPosts:TrendingPostsReducer,
        tweets: tweetsSlice
    }

})

export default store;