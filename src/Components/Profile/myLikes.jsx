// MyLikesComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postsList';
import { toggleLike, isRetweeted } from './tweetActions';

const MyLikesComponent = ({ id }) => {
  const [posts, setPosts] = useState([]);
  const [likedTweets, setLikedTweets] = useState({}); 

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${id}`);
        const likedPosts = response.data.filter(post => post.likes && post.likes.includes(id));
        setPosts(likedPosts);

        // Initialize likedTweets state with all liked tweets
        const initialLikedTweets = likedPosts.reduce((acc, tweet) => {
          acc[tweet._id] = true;
          return acc;
        }, {});
        setLikedTweets(initialLikedTweets);
      } catch (error) {
        console.error('Error fetching liked posts:', error);
      }
    };

    fetchLikedPosts();
  }, [id]);

  return (
    <PostList 
      posts={posts} 
      toggleLike={(postId) => toggleLike(postId, posts, setPosts)} 
      isRetweeted={(postId) => isRetweeted(postId, id, posts, setPosts)} 
      likedTweets={likedTweets} 
    />
  );
};

export default MyLikesComponent;
