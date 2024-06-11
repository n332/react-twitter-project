// MyPostsComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './postsList';
import style from '../../styles/postList.module.css';
import { toggleLike, isRetweeted } from './tweetActions';

const MyPostsComponent = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${userId}`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user posts:', error);
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tweets/user/${userId}`);
        const likedPosts = response.data.map(post => ({
          ...post,
          isLiked: post.likes.includes(userId)
        }));
        setPosts(likedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching liked posts:', error);
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
      posts={posts}
      toggleLike={(postId) => toggleLike(postId, userId, posts, setPosts)}
      isRetweeted={(postId) => isRetweeted(postId, userId, posts, setPosts)}
    />
  );
};

export default MyPostsComponent;
