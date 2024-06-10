// MyPostsComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postsList';
import { toggleLike, isRetweeted } from './tweetActions';

const MyPostsComponent = ({ id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${id}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchUserPosts();
  }, [id]);

  return <PostList posts={posts} toggleLike={(postId) => toggleLike(postId, posts, setPosts)} isRetweeted={(postId) => isRetweeted(postId, id, posts, setPosts)} />;
};

export default MyPostsComponent;
