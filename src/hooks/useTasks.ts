import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  fetchTasksAsyncAction,
  updateTaskAsyncAction,
} from '@actions/tasksActions';
import { IFile, IStatus, ITask, IType, IUser } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTasks = (projectId: number) => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.tasks.tasks
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.tasks.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.loading
  );

  const fetchTasks = React.useCallback(() => {
    dispatch(fetchTasksAsyncAction({ projectId: projectId }));
  }, [projectId]);

  const createTask = React.useCallback(
    (
      title: string,
      description: string,
      status: IStatus,
      type: IType,
      user: IUser,
      timeAllotted: number,
      files: File[],
      onSuccess?: () => void
    ) => {
      dispatch(
        createTaskAsyncAction({
          projectId: projectId,
          title: title,
          description: description,
          status: status,
          type: type,
          user: user,
          timeAllotted: timeAllotted,
          files: files,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId]
  );

  const updateTask = React.useCallback(
    (
      taskId: number,
      title: string,
      description: string,
      status: IStatus,
      type: IType,
      user: IUser,
      timeAllotted: number,
      files: File[],
      oldFiles: IFile[],
      onSuccess?: () => void
    ) => {
      dispatch(
        updateTaskAsyncAction({
          projectId: projectId,
          taskId: taskId,
          title: title,
          description: description,
          status: status,
          type: type,
          user: user,
          timeAllotted: timeAllotted,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId]
  );

  const deleteTask = React.useCallback(
    (taskId: number, onSuccess?: () => void) => {
      dispatch(
        deleteTaskAsyncAction({
          projectId: projectId,
          taskId: taskId,
          onSuccess: onSuccess,
        })
      );
    },
    [projectId]
  );

  return {
    tasks,
    error,
    loading,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
