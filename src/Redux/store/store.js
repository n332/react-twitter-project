import { configureStore } from "@reduxjs/toolkit";
import SearchingReducer from "./slices/SearchingPostsSlices"
import TrendingListReducer from "./slices/TrendingListSlice"
import TrendingPostsReducer from "./slices/TrendingPostsSlice"


const store = configureStore({

    reducer:{
        search: SearchingReducer,
        trendingList:TrendingListReducer,
        trendingPosts:TrendingPostsReducer
    }

})

export default store;