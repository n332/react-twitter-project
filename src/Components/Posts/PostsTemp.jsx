import React, { useState } from 'react';
import style from "../../styles/post-temp.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRepeat } from '@fortawesome/free-solid-svg-icons'; 
import axios from 'axios';

const PostsTemp = (props) => {
    let {tweet} = props

    const [likedTweets, setLikedTweets] = useState({});
    const [post, setPost] = useState(tweet); // Add a state for the post

    const isRetweeted =()=>{
        console.log("isRetweeted invoked");
    }
    const handleToggleLike = async (id) => {
        const userId = '6643a278fdc6db9e29db2e81'; // Replace this with the actual user ID
        await toggleLike(id, userId, post, setPost);
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


const likePost = async (postId, userId, post, setPost) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/like`, { likerId: userId });
    if (response.status === 200) {
      const updatedPost = { ...post, isLiked: true, likes: post.likes.length + 1 };
      setPost(updatedPost);
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
};

const unlikePost = async (postId, userId, post, setPost) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/unlike`, { userId });
    if (response.status === 200) {
      const updatedPost = { ...post, isLiked: false, likes: post.likes.length - 1 };
      setPost(updatedPost);
    }
  } catch (error) {
    console.error('Error unliking post:', error);
  }
};

export const toggleLike = async (postId, userId, post, setPost) => {
  try {
    const isLiked = post.likes.includes(userId);
    if (isLiked) {
      await unlikePost(postId, userId, post, setPost);
    } else {
      await likePost(postId, userId, post, setPost);
    }
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};

