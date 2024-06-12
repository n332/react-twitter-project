import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTweet } from '../../Redux/store/slices/tweetsSlice';
import imageCompression from 'browser-image-compression';
import './TweetBox.css';
import ReplyOptions from './ReplyOptions';
import useUserAuth from '../../Pages/Login/useUserAuth';

const TweetBox = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [replyText, setReplyText] = useState('Everyone can reply');
  const [image, setImage] = useState(null);
  const { user } = useUserAuth();
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setTweetContent(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 20 * 1024 * 1024) {
      // Limit file size to 2MB
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: 'image/jpeg', // Ensure the output is in JPEG format
        initialQuality: 0.8, // Adjust quality as needed
      };
      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error while compressing the image', error);
      }
    } else {
      alert('File size is too large. Please upload an image less than 2MB.');
    }
  };

  const postTweet = () => {
    const tweetData = {
      content: tweetContent,
      userId: user?.id, // Make sure this is the correct userId
      image: image || undefined, // Send image if available
    };
    dispatch(addTweet(tweetData));
    console.log(image);
    setTweetContent('');
    setImage(null);
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
      <img src={user?.profile.avatar} alt="Profile" className="user-img" />
      <div className="tweet-content-container">
        <textarea
          id="tweet-textarea"
          className="tweet-textarea"
          placeholder="What is happening?!"
          value={tweetContent}
          onChange={handleInput}
        ></textarea>
        {image && (
          <img src={image} alt="Tweet" className="tweet-image-preview" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="image-upload-input"
          id="image-upload-input"
        />
        <div id="reply-info" className="reply-info">
          <i className="material-icons reply-icon">public</i>
          <span className="reply-text" onClick={toggleReplyOptions}>
            {replyText}
          </span>
        </div>
        <hr className="separator" />
        <div className="tweet-actions">
          <div className="icons-container">
            <label htmlFor="image-upload-input">
              <i className="material-icons tweet-icon" title="Media">
                image
              </i>
            </label>
            <i className="material-icons tweet-icon" title="GIF">
              gif
            </i>
            <i className="material-icons tweet-icon" title="Poll">
              bar_chart
            </i>
            <i className="material-icons tweet-icon" title="Emoji">
              sentiment_satisfied_alt
            </i>
            <i className="material-icons tweet-icon" title="Schedule">
              event
            </i>
            <i className="material-icons tweet-icon disabled" title="Location">
              location_on
            </i>
          </div>
          <button
            id="post-button"
            className="post-button"
            onClick={postTweet}
            disabled={!tweetContent}
          >
            Post
          </button>
        </div>
      </div>
      <ReplyOptions
        showOptions={showOptions}
        replyText={replyText}
        selectReplyOption={selectReplyOption}
      />
    </div>
  );
};

export default TweetBox;
