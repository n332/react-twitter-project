// PostList.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons';
import style from '../../styles/postList.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const PostList = ({ posts, toggleLike, isRetweeted }) => {
  if (!posts || posts.length === 0) {
    return <div className={style["no-post"]}>No posts found.</div>;
  }

  return (
    <div className={style["posts-container"]}>
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
              <ChatBubbleOutlineIcon /> {tweet.comments.length}
            </span>
            <span className={style["tweet-action"]}>
              <FontAwesomeIcon
                icon={faRepeat}
                className={`${style["retweet-icon"]} ${tweet.isRetweeted ? style["retweet-green"] : ''}`}
                onClick={() => isRetweeted(tweet._id)}
              />
              {tweet.retweets.length}
            </span>
            <span className={style["tweet-action"]}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: tweet.isLiked ? 'red' : 'white' }}
                onClick={() => toggleLike(tweet._id)}
              />
              {tweet.likes.length}

            </span>
            <span className={style["tweet-action"]}>
              <VisibilityIcon /> {tweet.views}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
