import {
  createCommentApi,
  deleteCommentApi,
  fetchCommentsApi,
  updateCommentApi,
} from '@api/commentsApi';
import { deleteFileApi } from '@api/filesApi';
import { IComment } from '@interfaces';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { commentInfoSelector } from '@selectors/commentSelectors';
import { TRootState } from '@store';
import { handleErrorResponse } from '@utils/errorHandlers';
import {
  IAddCommentAction,
  ICreateCommentAsyncAction,
  IDeleteCommentAsyncAction,
  IFetchCommentsAsyncAction,
  IRemoveCommentAction,
  ISetCommentsAction,
  IUpdateCommentAction,
  IUpdateCommentAsyncAction,
} from 'interfaces/actions/commentsActions';
import {
  ISetError,
  ISetLoadingAction,
} from '../../interfaces/actions/tasksActions';

export const setCommentsAction = createAction<ISetCommentsAction>(
  'comments/setCommentsAction'
);

export const addCommentAction = createAction<IAddCommentAction>(
  'comments/addCommentAction'
);

export const updateCommentAction = createAction<IUpdateCommentAction>(
  'comments/updateCommentAction'
);

export const removeCommentAction = createAction<IRemoveCommentAction>(
  'comments/removeCommentAction'
);

export const setErrorAction = createAction<ISetError>(
  'comments/setErrorAction'
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'comments/setLoadingAction'
);

export const fetchCommentsAsyncAction = createAsyncThunk<
  void,
  IFetchCommentsAsyncAction
>(
  'comments/fetchCommentsAsyncAction',
  async (
    { projectId, taskId }: IFetchCommentsAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCommentsApi(projectId, taskId);
      const comments = res.comments.reverse();
      dispatch(setCommentsAction({ comments: comments }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('commentsActions::fetchCommentsAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const createCommentAsyncAction = createAsyncThunk<
  void,
  ICreateCommentAsyncAction
>(
  'comments/createCommentAsyncAction',
  async (
    { projectId, taskId, message, files, onSuccess }: ICreateCommentAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await createCommentApi(projectId, taskId, message, files);
      console.log('Created Comment: ', res);
      dispatch(
        fetchCommentsAsyncAction({ projectId: projectId, taskId: taskId })
      );
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('commentsActions::createCommentAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateCommentAsyncAction = createAsyncThunk<
  void,
  IUpdateCommentAsyncAction
>(
  'comments/updateCommentAsyncAction',
  async (
    {
      projectId,
      taskId,
      commentId,
      message,
      files,
      oldFiles,
      onSuccess,
    }: IUpdateCommentAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const state: TRootState = getState() as TRootState;
      const commentInfo: IComment | undefined =
        commentInfoSelector(commentId)(state);
      if (commentInfo) {
        const deletedFiles = commentInfo.files.filter(
          (file) => !oldFiles.some((oldFile) => oldFile.name === file.name)
        );
        for (let i = 0; i < deletedFiles.length; i++) {
          await deleteFileApi(deletedFiles[i].id);
        }
      }
      const res = await updateCommentApi(
        projectId,
        taskId,
        commentId,
        message,
        files
      );
      console.log('Updated Comment: ', res);
      dispatch(
        fetchCommentsAsyncAction({ projectId: projectId, taskId: taskId })
      );
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('commentsActions::updateCommentAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const deleteCommentAsyncAction = createAsyncThunk<
  void,
  IDeleteCommentAsyncAction
>(
  'comments/deleteCommentAsyncAction',
  async (
    { projectId, taskId, commentId, onSuccess }: IDeleteCommentAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await deleteCommentApi(projectId, taskId, commentId);
      console.log('Deleted Comment: ', res);
      dispatch(
        fetchCommentsAsyncAction({ projectId: projectId, taskId: taskId })
      );
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('commentsActions::deleteCommentAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
