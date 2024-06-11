import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchingAction } from '../../Redux/store/slices/SearchingPostsSlices';
import style from "../../styles/postList.module.css";
import PostsTemp from '../Posts/PostsTemp';
import { Helmet } from 'react-helmet';

const SearchingPosts = () => {
    const SearchPostsArr = useSelector((state)=>(state = state.search.SearchingArr));
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(()=>{
        dispatch(SearchingAction()).then(() => setLoading(false)); // Update loading state when dispatch is finished
    },[dispatch])

    // loading = true
    // check if dispatch finished (loading = false)
        // T => check if the  SearchPostsArr>0
                // T => display the data
                //F => display not found
        // F=> loading

    

    return (
        <div>        
        {loading=== false && SearchPostsArr? ( //check if dispatch finished (loading = false) & array found
            SearchPostsArr.length > 0 ? ( //check if the  SearchPostsArr>0
                SearchPostsArr.map((tweet) => { //display the data
                    return (
                        <div className={style["posts-container"]}>
                        <Helmet>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        </Helmet>
                        <PostsTemp key = {tweet.id} tweet={tweet} ></PostsTemp>
                        </div>
                    )
                }                
                )
            ) : (
                <p>No posts found :(</p> //display not found
            )
        ) : ( //loading
            <p>Loading...</p>
        )}

        {console.log(loading)}
        {console.log(SearchPostsArr)}

    </div>
    );
}

export default SearchingPosts;