// MyLikesComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postsList';
import style from '../../styles/postList.module.css';
import { toggleLike, isRetweeted } from './tweetActions';

const MyLikesComponent = ({ userId }) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${userId}`);
        const likedPosts = response.data.filter(post => post.likes.includes(userId));
        const updatedLikedPosts = likedPosts.map(post => ({
          ...post,
          isLiked: true
        }));
        setLikedPosts(updatedLikedPosts);
      } catch (error) {
        console.error('Error fetching liked posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedPosts();
  }, [userId]);

  if (loading) {
    return <div className={style["no-post"]}>Loading...</div>;
  }

  return (
    <PostList
      posts={likedPosts}
      toggleLike={(postId) => toggleLike(postId, userId, likedPosts, setLikedPosts)}
      isRetweeted={(postId) => isRetweeted(postId, userId, likedPosts, setLikedPosts)}
      isLiked={true}
    />
  );
};

export default MyLikesComponent;
