import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTweet } from '../../Redux/store/slices/tweetsSlice';
import './TweetBox.css';
import ReplyOptions from './ReplyOptions';

const TweetBox = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [replyText, setReplyText] = useState('Everyone can reply');
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setTweetContent(event.target.value);
  };

  const postTweet = () => {
    dispatch(addTweet(tweetContent));
    setTweetContent('');
  };

  const toggleReplyOptions = () => {
    setShowOptions(!showOptions);
  };

  const selectReplyOption = (option) => {
    setReplyText(option);
    setShowOptions(false);
  };

  return (
    <div className="tweet-box">
      <img src="/assets/person1.jpeg" alt="Profile Photo" className="user-img" />
      <div className="tweet-content-container">
        <textarea
          id="tweet-textarea"
          className="tweet-textarea"
          placeholder="What's happening?!"
          value={tweetContent}
          onChange={handleInput}
        ></textarea>
        <div id="reply-info" className="reply-info">
          <i className="material-icons reply-icon">public</i>
          <span className="reply-text" onClick={toggleReplyOptions}>
            {replyText}
          </span>
        </div>
        <hr className="separator" />
        <div className="tweet-actions">
          <div className="icons-container">
            <i className="material-icons tweet-icon" title="Media">image</i>
            <i className="material-icons tweet-icon" title="GIF">gif</i>
            <i className="material-icons tweet-icon" title="Poll">bar_chart</i>
            <i className="material-icons tweet-icon" title="Emoji">sentiment_satisfied_alt</i>
            <i className="material-icons tweet-icon" title="Schedule">event</i>
            <i className="material-icons tweet-icon disabled" title="Location">location_on</i>
          </div>
          <button id="post-button" className="post-button" onClick={postTweet} disabled={!tweetContent}>
            Post
          </button>
        </div>
      </div>
      <ReplyOptions showOptions={showOptions} replyText={replyText} selectReplyOption={selectReplyOption} />
    </div>
  );
};

export default TweetBox;
