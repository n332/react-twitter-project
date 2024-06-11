import React, { useState } from 'react';
import style from "../../styles/postList.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons'; 

const PostsTemp = (props) => {
    let {tweet} = props

    const [likedTweets, setLikedTweets] = useState({});

    const isRetweeted =()=>{
        console.log("isRetweeted invoked");
    }
    const handleToggleLike=()=>{
        console.log("handleToggleLike invoked");
    }
    
    // console.log(tweet);
    return (
        <div key={tweet._id} className={style["tweet"]}>
          <div className={style["tweet-header"]}>
            <div className={style["tweet-user-info"]}>
              <div>
                <div className={style.info}>
                  <img src={tweet.author?.profile?.avatar || ''} alt="Profile Avatar" />
                  <span className={style["tweet-user-name"]}>{tweet.author.profile?.name}  <span className={style["tweet-simple"]}>@twitter</span></span> 
                </div>
              </div>
            </div>
          </div>
          <div className={style[".tweet-content"]}>
            <h3> {tweet.content}</h3>
          </div>
          <div className={style["tweet-actions"]}>
            <span className={style["tweet-action"]}>
              <i className="material-icons">chat_bubble_outline</i> {tweet.comments.length}
            </span>
            <span className={style["tweet-action"]}>
              <FontAwesomeIcon icon={faRepeat} className="p-6" onClick={() => isRetweeted(tweet._id)} /> {tweet.retweets.length}
            </span>
            <span className={style["tweet-action"]}>
              <FontAwesomeIcon icon={faHeart} style={{ color: likedTweets[tweet._id] ? 'red' : 'white' }} onClick={() => handleToggleLike(tweet._id)} /> {tweet.likes.length}
            </span>
            <span className={style["tweet-action"]}>
              <i className="material-icons">visibility</i> {tweet.views}
            </span>
          </div>
        </div>
    );
}

export default PostsTemp;
