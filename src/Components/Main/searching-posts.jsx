import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchingAction } from '../../Redux/store/slices/SearchingPostsSlices';
import PostList from '../Posts/postsList';

const SearchingPosts = () => {

    const SearchPostsArr = useSelector((state)=>(state = state.search.SearchingArr));
    const dispatch = useDispatch();

    const [posts,setPosts]=useState([]);

    

    useEffect(()=>{
        dispatch(SearchingAction());
    },[dispatch])

    return (
        <div>
        {/* Post component here */}
        
        {SearchPostsArr ? (
            SearchPostsArr.length > 0 ? (
                SearchPostsArr.map(post => (
                    // import component
                    // pass the object
                    // handel in post component

                    <div key={post._id}>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts found :(</p>
            )
        ) : (
            <p>Loading...</p>
        )}

    </div>
    );
}

export default SearchingPosts;
