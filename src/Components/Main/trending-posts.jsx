import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrendingPostsAction } from '../../Redux/store/slices/TrendingPostsSlice';

const TrendingPosts = () => {

    const TrendingPostsArr = useSelector((state)=>state = state.trendingPosts.TrendingPostsArr);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(TrendingPostsAction());
    },[dispatch])

    return (
        <div>
            {/* Post component here */}
            {TrendingPostsArr.map((item, index) => (
                    <div key={index} >
                        {item.content}
                        
                    </div>
                ))}
            
        </div>
    );
}

export default TrendingPosts;
