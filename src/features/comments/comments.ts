/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from '../../types/Comment';

type CommentsState = {
  comments: Comment[] | null;
  loaded: boolean;
  hasError: boolean;
};

const initialState: CommentsState = {
  comments: [],
  loaded: false,
  hasError: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[] | null>) => {
      state.comments = action.payload;
    },

    addComments: (state, action: PayloadAction<Comment>) => {
      state.comments?.push(action.payload);
    },

    removeComment: (state, action: PayloadAction<number>) => {
      if (state.comments) {
        state.comments = state.comments.filter(
          comment => comment.id !== action.payload,
        );
      }
    },

    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.loaded = action.payload;
    },

    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
});

export default commentsSlice.reducer;
export const { setComments, setLoaded, setError, addComments, removeComment } =
  commentsSlice.actions;
