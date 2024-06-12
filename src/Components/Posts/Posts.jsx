import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTweets, toggleLike } from '../../Redux/store/slices/tweetsSlice';
import {
  addBookmark,
  removeBookmark,
} from '../../Redux/store/slices/bookmarksSlice';
import './Posts.css';
import useUserAuth from '../../Pages/Login/useUserAuth';

const Posts = () => {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.tweets);
  const { items: bookmarks } = useSelector((state) => state.bookmarks);
  const { user } = useUserAuth();
  const userId = user?.id;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTweets());
    }
  }, [status, dispatch]);

  const handleLike = (id) => {
    dispatch(toggleLike({ id, userId }));
  };

  const handleBookmark = (tweetId) => {
    if (bookmarks.includes(tweetId)) {
      dispatch(removeBookmark({ tweetId, userId }));
    } else {
      dispatch(addBookmark({ tweetId, userId }));
    }
  };

  const formatTimestamp = (timestamp) => {
    const tweetDate = new Date(timestamp);
    const now = new Date();
    const diffInMs = now - tweetDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInHours < 24) {
      if (diffInHours < 1) {
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        return `${diffInMinutes}m`; // Minutes ago
      }
      return `${diffInHours}h`; // Hours ago
    }

    return tweetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="posts-container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {posts.map((tweet) => (
        <div key={tweet._id} className="tweet">
          <div className="tweet-header">
            <img
              src={tweet.author.profile.avatar}
              className="profile-img"
              alt="Profile"
            />
            <div className="tweet-user-info">
              <div className="user-details">
                <span className="tweet-user-name">
                  {tweet.author.profile.name}
                </span>
                {tweet.author.profile.verified && (
                  <span className="verified-icon">
                    <img src="/Assets/verified.png" alt="Verified" />
                  </span>
                )}
                <span className="tweet-user-handle">
                  @{tweet.author.username}
                </span>
                <span className="tweet-timestamp">
                  · {formatTimestamp(tweet.createdAt)}
                </span>
              </div>
            </div>
            <div className="tweet-options">
              <i className="material-icons">more_horiz</i>
            </div>
          </div>
          <div className="tweet-content">
            <p>{tweet.content}</p>
            {tweet.image && (
              <div className="tweet-image-container">
                <img src={tweet.image} alt="Tweet" className="tweet-image" />
              </div>
            )}
          </div>
          <div className="tweet-actions">
            <span className="tweet-action" title="Reply">
              <i className="material-icons">chat_bubble_outline</i>{' '}
              {tweet.comments.length}
            </span>
            <span className="tweet-action" title="Retweet">
              <i className="material-icons">repeat</i> {tweet.retweets.length}
            </span>
            <span className="tweet-action" title="Like">
              <i
                className={`material-icons ${
                  tweet.likes.includes(userId) ? 'liked' : ''
                }`}
                onClick={() => handleLike(tweet._id)}
              >
                favorite
              </i>{' '}
              {tweet.likes.length}
            </span>
            <span className="tweet-action" title="Bookmark">
              <i
                className="material-icons"
                onClick={() => handleBookmark(tweet._id)}
              >
                {bookmarks.includes(tweet._id) ? 'bookmark' : 'bookmark_border'}
              </i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
