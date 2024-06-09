import axios from 'axios';


  export const toggleLike = async (postId, id, posts, setPosts) => {
    const updatedPosts = [];
    
    for (const post of posts) {
      if (post._id === postId) {
        const updatedPost = { ...post, isLiked: !post.isLiked };
        if (!updatedPost.isLiked) {
          updatedPost.likes = updatedPost.likes.filter(userId => userId !== id);
          await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/unlike`, { id });
        } else {
          updatedPost.likes = [...updatedPost.likes, id]; 
          await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/like`, { likerId: id });
        }
        updatedPosts.push(updatedPost);
      } else {
        updatedPosts.push(post);
      }
    }
    
    setPosts(updatedPosts);
  };
  

export const isRetweeted = async (postId, id, posts, setPosts) => {
  const updatedPosts = posts.map(post => {
    if (post._id === postId && !post.isTweet) {
      const updatedPost = { ...post, isTweet: true };
      updatedPost.retweets.push(id);
      axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/retweet`, { retweeterId: id });
      return updatedPost;
    }
    return post;
  });
  setPosts(updatedPosts);
};
