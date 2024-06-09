import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postsList';
import { toggleLike, isRetweeted } from './tweetActions';

const MyLikesComponent = ({ id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const fetchLikedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${id}`);
        
        const likedPosts = response.data.filter(post => post.likes && post.likes.includes(id));
        setPosts(likedPosts);
      } catch (error) {
        console.error('Error fetching liked posts:', error);
      }
    };
    fetchLikedPosts();
  }, [id]);


  return <PostList posts={posts} toggleLike={(postId) => toggleLike(postId, id, posts, setPosts)} isRetweeted={(postId) => isRetweeted(postId, id, posts, setPosts)} />;
};

export default MyLikesComponent;
