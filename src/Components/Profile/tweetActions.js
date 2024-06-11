// tweetActions.js
import axios from 'axios';
const likePost = async (postId, userId, posts, setPosts) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/like`, { likerId: userId });
    if (response.status === 200) {
      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return { ...post, isLiked: true, likes: post.likes.length + 1 }; 
        }
        return post;
      });
      setPosts(updatedPosts); 
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
};

const unlikePost = async (postId, userId, posts, setPosts) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/unlike`, { userId });
    if (response.status === 200) {
      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return { ...post, isLiked: false, likes: post.likes.length - 1 }; 
        }
        return post;
      });
      setPosts(updatedPosts); 
    }
  } catch (error) {
    console.error('Error unliking post:', error);
  }
};

export const toggleLike = async (postId, userId, posts, setPosts) => {
  try {
    const postIndex = posts.findIndex(post => post._id === postId);
    const updatedPosts = [...posts];
    if (postIndex !== -1) {
      const post = updatedPosts[postIndex];
      const isLiked = post.likes.includes(userId);
      if (isLiked) {
        await unlikePost(postId, userId);
        updatedPosts[postIndex] = { ...post, isLiked: false, likes: post.likes.filter(id => id !== userId) };
      } else {
        await likePost(postId, userId);
        updatedPosts[postIndex] = { ...post, isLiked: true, likes: [...post.likes, userId] };
      }
      setPosts(updatedPosts);
    }
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};

export const isRetweeted = async (postId, userId, posts, setPosts) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/retweet`, { retweeterId: userId });

    if (response.status === 200) {
      const updatedPosts = posts.map(post => {
        if (post._id === postId) {
          return { ...post, isRetweeted: !post.isRetweeted, retweets: post.retweets + (post.isRetweeted ? -1 : 1) };
        }
        return post;
      });
      setPosts(updatedPosts);
    } else {
      console.log('retweet Data :', response.data);
    }
  } catch (error) {
    console.error('Error toggling retweet:', error);
  }
};
















