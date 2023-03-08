import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import postReducer from '../features/post/postSlice';
import likesReducer from '../features/tags/likesSlice';
import newPostsReducer from '../features/newest/newPostsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    likes: likesReducer,
    newPosts: newPostsReducer,
  },
});
