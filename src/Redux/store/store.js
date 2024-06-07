import { configureStore } from "@reduxjs/toolkit";
import SearchingReducer from "./slices/SearchingPostsSlices"


const store = configureStore({

    reducer:{
        search: SearchingReducer
    }

})

export default store;