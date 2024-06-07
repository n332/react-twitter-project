import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchingAction } from '../../Redux/store/slices/SearchingPostsSlices';

const SearchingPosts = () => {

    const SearchPostsArr = useSelector((state)=>(state = state.search.SearchingArr));
    const dispatch = useDispatch();

    

    useEffect(()=>{
        dispatch(SearchingAction());
    },[dispatch])

    return (
        <div>
        
        {SearchPostsArr ? (
            SearchPostsArr.length > 0 ? (
                SearchPostsArr.map(post => (
                    <div key={post._id}>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )
        ) : (
            <p>Loading...</p>
        )}

    </div>
    );
}

export default SearchingPosts;