import axios from 'axios';

export const toggleLike = async (postId, posts, setPosts, userId) => {
  try {
    const updatedPosts = posts.map(post => {
      if (post._id === postId) {
        const newIsLiked = !post.isLiked;
        const userLikedThePostIndex = post.likes.indexOf(userId);

        if (newIsLiked) {
          if (userLikedThePostIndex === -1) {

            post.likes.push(userId);
          }
        } else {
          if (userLikedThePostIndex !== -1) {
            post.likes.splice(userLikedThePostIndex, 1);
          }
        }

        return {
          ...post,
          isLiked: newIsLiked,
        };
      }
      return post;
    });

    setPosts(updatedPosts);

    const liked = updatedPosts.find(post => post._id === postId).isLiked;
    await axios.post(`http://localhost:3000/api/tweets/tweet/${postId}/${liked ? 'like' : 'unlike'}`, { likerId: userId });
    console.log(liked ? 'Liked successfully' : 'Unliked successfully');
  } catch (error) {
    console.error('Error toggling like:', error);
  }
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
