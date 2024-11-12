import { IComment } from '@interfaces';
import { createReducer } from '@reduxjs/toolkit';
import { ICommentsReducerState } from 'interfaces/reducers/commentsReducer';
import {
  addCommentAction,
  removeCommentAction,
  setCommentsAction,
  setErrorAction,
  setLoadingAction,
  updateCommentAction,
} from '../actions/commentsActions';

const initialState: ICommentsReducerState = {
  comments: [],
  error: undefined,
  loading: false,
};

const commentsReducer = createReducer<ICommentsReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setCommentsAction, (store, { payload: { comments } }) => ({
        ...store,
        comments: comments,
      }))
      .addCase(addCommentAction, (store, { payload: { comment } }) => ({
        ...store,
        tasks: [...store.comments, comment],
      }))
      .addCase(updateCommentAction, (store, { payload: { comment } }) => ({
        ...store,
        tasks: store.comments.map((currentComment: IComment) =>
          currentComment.id === comment.id ? comment : currentComment
        ),
      }))
      .addCase(removeCommentAction, (store, { payload: { comment } }) => ({
        ...store,
        tasks: store.comments.filter(
          (currentComment: IComment) => currentComment.id !== comment.id
        ),
      }))
      .addCase(setErrorAction, (store, { payload: { error } }) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
        ...store,
        loading: loading,
      }))
);

export default commentsReducer;
