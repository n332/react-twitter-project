import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookmarks, removeBookmark } from '../../Redux/store/slices/bookmarksSlice';
import './Bookmarks.css';

const Bookmarks = () => {
  const dispatch = useDispatch();
  const { items: bookmarks, status, error } = useSelector((state) => state.bookmarks);
  const userId = '6643a278fdc6db9e29db2e81';
  const username = 'Abdullah2019032'; // Replace with the actual username

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBookmarks(userId));
    }
  }, [status, dispatch, userId]);

  const handleRemoveBookmark = (tweetId) => {
    dispatch(removeBookmark({ tweetId, userId }));
  };

  return (
    <div className="bookmarks-container">
      <header className="bookmarks-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Bookmarks</h1>
            <p>@{username}</p>
          </div>
          <div className="header-options">
            <i className="material-icons">more_horiz</i>
          </div>
        </div>
      </header>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {bookmarks.map((tweet) => {
        const commentsLength = tweet.comments ? tweet.comments.length : 0;
        const retweetsLength = tweet.retweets ? tweet.retweets.length : 0;
        const likesLength = tweet.likes ? tweet.likes.length : 0;
        const authorProfile = tweet.author?.profile || {};
        const authorName = authorProfile.name || 'Unknown';
        const authorUsername = tweet.author?.username || 'unknown';
        const createdAt = tweet.createdAt ? new Date(tweet.createdAt).toLocaleString() : 'Invalid Date';

        return (
          <div key={tweet._id} className="tweet">
            <div className="tweet-header">
              {authorProfile.avatar && (
                <img src={authorProfile.avatar} className="profile-img" alt="Profile" />
              )}
              <div className="tweet-user-info">
                <div>
                  <span className="tweet-user-name">{authorName}</span>
                  <span className="tweet-user-handle">@{authorUsername}</span>
                </div>
                <span className="tweet-timestamp">{createdAt}</span>
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
                <i className="material-icons">chat_bubble_outline</i> {commentsLength}
              </span>
              <span className="tweet-action" title="Retweet">
                <i className="material-icons">repeat</i> {retweetsLength}
              </span>
              <span className="tweet-action" title="Like">
                <i className={`material-icons ${tweet.likes?.includes(userId) ? 'liked' : ''}`}>favorite</i> {likesLength}
              </span>
              <span className="tweet-action" title="Bookmark">
                <i className="material-icons" onClick={() => handleRemoveBookmark(tweet._id)}>
                  bookmark
                </i>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmarks;
