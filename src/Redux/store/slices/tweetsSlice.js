import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://localhost:3000';

// Define async thunks for API calls
export const fetchTweets = createAsyncThunk('tweets/fetchTweets', async () => {
  const response = await axios.get(`${API_BASE_URL}/api/tweets/all`);
  return response.data;
});

export const addTweet = createAsyncThunk('tweets/addTweet', async (tweetData) => {
  const response = await axios.post(`${API_BASE_URL}/api/tweets`, tweetData);
  return response.data;
});

export const toggleLike = createAsyncThunk('tweets/toggleLike', async ({ id, userId }) => {
  const response = await axios.post(`${API_BASE_URL}/api/tweets/tweet/${id}/like`, { userId });
  return { id, likes: response.data.likes };
});

// Create slice
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTweets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const { id, likes } = action.payload;
        const existingTweet = state.items.find((tweet) => tweet._id === id);
        if (existingTweet) {
          existingTweet.likes = likes;
        }
      });
  },
});

export default tweetsSlice.reducer;
