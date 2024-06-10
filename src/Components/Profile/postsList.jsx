// PostList.jsx
import React, { useState } from 'react';
import style from '../../styles/postList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons'; 
import { Helmet } from 'react-helmet';

const PostList = ({ posts, toggleLike, isRetweeted }) => {
  const [likedTweets, setLikedTweets] = useState({});

  const handleToggleLike = async (postId) => {
    await toggleLike(postId);
    
    setLikedTweets(prevState => ({
      ...prevState,
      [postId]: !prevState[postId] 
    }));
  };

  if (!posts) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={style["posts-container"]}>
      <Helmet>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Helmet>
      {posts.map((tweet) => (
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
      ))}
    </div>
  );
};

export default PostList;
