import React, { useEffect } from 'react';
import styles from "../../styles/trending.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { TrendingListAction } from '../../Redux/store/slices/TrendingListSlice';
import { TrendingPostsAction } from '../../Redux/store/slices/TrendingPostsSlice';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
    const TrendingList = useSelector((state) => state = state.trendingList.TrendingListArr);
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
        
    useEffect(()=>{
        dispatch(TrendingListAction());
    },[dispatch])

    const performAction = (hashtag) => {
        dispatch(TrendingPostsAction(hashtag));
        navigate(`trending-posts/${hashtag}`);
    }



    const handelClick = (hashtag)=>{
        performAction (hashtag);
        performAction (hashtag);
        

    }


    return (
        <div className={styles.TrendingContainer}>
            <div className={styles.Header}>
                <h4 style={{marginTop: '10px', marginBottom: '10px'}}>What's happening</h4>
            </div>
            <div className={styles.containerItems}>
                {TrendingList.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <li>
                            <button className={styles.Hashtag} onClick={()=>handelClick(item.hashtag)}>#{item.hashtag}</button>
                        </li>
                        <span className={styles.HashTagCount}>{item.count} Posts</span><br/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trending;
