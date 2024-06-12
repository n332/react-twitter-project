import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// Define async thunks for API calls
export const fetchBookmarks = createAsyncThunk(
  'bookmarks/fetchBookmarks',
  async (userId) => {
    console.log(`SLICE: `, userId);
    const response = await axios.get(
      `${API_BASE_URL}/api/tweets/bookmarks/${userId}`
    );
    return response.data;
  }
);

export const addBookmark = createAsyncThunk(
  'bookmarks/addBookmark',
  async ({ tweetId, userId }) => {
    await axios.post(`${API_BASE_URL}/api/tweets/tweet/${tweetId}/bookmark`, {
      userId,
    });
    return { tweetId, userId };
  }
);

export const removeBookmark = createAsyncThunk(
  'bookmarks/removeBookmark',
  async ({ tweetId, userId }) => {
    await axios.post(`${API_BASE_URL}/api/tweets/tweet/${tweetId}/unbookmark`, {
      userId,
    });
    return { tweetId, userId };
  }
);

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookmarks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookmarks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBookmarks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        state.items.push(action.payload.tweetId);
      })
      .addCase(removeBookmark.fulfilled, (state, action) => {
        state.items = state.items.filter((id) => id !== action.payload.tweetId);
      });
  },
});

export default bookmarksSlice.reducer;
