import {
  createCommentAsyncAction,
  deleteCommentAsyncAction,
  fetchCommentsAsyncAction,
  updateCommentAsyncAction,
} from '@actions/commentsActions';
import { IComment, IFile } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useComments = (projectId: number, taskId: number) => {
  const dispatch = useDispatch<TAppDispatch>();

  const comments = useSelector<TRootState, IComment[]>(
    (state: TRootState) => state.comments.comments
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.comments.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.comments.loading
  );

  const fetchComments = React.useCallback(() => {
    dispatch(
      fetchCommentsAsyncAction({ projectId: projectId, taskId: taskId })
    );
  }, [projectId, taskId]);

  const createComment = React.useCallback(
    (message: string, files: File[], onSuccess?: () => void) => {
      dispatch(
        createCommentAsyncAction({
          projectId: projectId,
          taskId: taskId,
          message: message,
          files: files,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId, taskId]
  );

  const updateComment = React.useCallback(
    (
      commentId: number,
      message: string,
      files: File[],
      oldFiles: IFile[],
      onSuccess?: () => void
    ) => {
      dispatch(
        updateCommentAsyncAction({
          projectId: projectId,
          taskId: taskId,
          commentId: commentId,
          message: message,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId, taskId]
  );

  const deleteComment = React.useCallback(
    (commentId: number, onSuccess?: () => void) => {
      dispatch(
        deleteCommentAsyncAction({
          projectId: projectId,
          taskId: taskId,
          commentId: commentId,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId, taskId]
  );

  return {
    comments,
    error,
    loading,
    fetchComments,
    createComment,
    updateComment,
    deleteComment,
  };
};

export default useComments;
