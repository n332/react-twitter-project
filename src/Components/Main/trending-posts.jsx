import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrendingPostsAction } from '../../Redux/store/slices/TrendingPostsSlice';
import style from "../../styles/postList.module.css";
import PostsTemp from '../Posts/PostsTemp';
import { Helmet } from 'react-helmet';

const TrendingPosts = () => {

    const TrendingPostsArr = useSelector((state)=>state = state.trendingPosts.TrendingPostsArr);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(TrendingPostsAction());
    },[dispatch])

    return (
        <div>
            {/* Post component here */}
            {TrendingPostsArr.map((tweet) => {
                    return (
                        <div className={style["posts-container"]}>
                        <Helmet>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                        </Helmet>
                        <PostsTemp key = {tweet.id} tweet={tweet} ></PostsTemp>
                        </div>
                    )
                }                
                )}
            
        </div>
    );
}

export default TrendingPosts;
