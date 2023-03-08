import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import postReducer from '../features/post/postSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
  },
});
