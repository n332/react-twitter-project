import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTweets, toggleLike } from '../../Redux/store/slices/tweetsSlice';
import './Posts.css';

const Posts = () => {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.tweets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTweets());
    }
  }, [status, dispatch]);

  const handleLike = (id) => {
    const userId = 'currentUserId'; // Replace with the actual user ID
    dispatch(toggleLike({ id, userId }));
  };

  return (
    <div className="posts-container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {posts.map((tweet) => (
        <div key={tweet._id} className="tweet">
          <div className="tweet-header">
            <img src={tweet.author.profile.avatar} className="profile-img" alt="Profile Image" />
            <div className="tweet-user-info">
              <div>
                <span className="tweet-user-name">{tweet.author.profile.name}</span>
                <span className="tweet-user-handle">@{tweet.author.username}</span>
              </div>
              <span className="tweet-timestamp">{new Date(tweet.createdAt).toLocaleString()}</span>
            </div>
          </div>
          <div className="tweet-content">
            <p>{tweet.content}</p>
          </div>
          <div className="tweet-actions">
            <span className="tweet-action" title="Reply">
              <i className="material-icons">chat_bubble_outline</i> {tweet.comments.length}
            </span>
            <span className="tweet-action" title="Retweet">
              <i className="material-icons">repeat</i> {tweet.retweets.length}
            </span>
            <span className="tweet-action" title="Like">
              <i className={`material-icons ${tweet.likes.includes('currentUserId') ? 'liked' : ''}`} onClick={() => handleLike(tweet._id)}>favorite</i> {tweet.likes.length}
            </span>
            <span className="tweet-action" title="Views">
              <i className="material-icons">visibility</i> {tweet.views || 0}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
