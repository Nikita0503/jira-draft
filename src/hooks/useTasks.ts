import {
  createTaskAsyncAction,
  fetchTasksAsyncAction,
} from '@actions/tasksActions';
import { IStatus, ITask, IType, IUser } from '@interfaces';
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

  return { tasks, error, loading, fetchTasks, createTask };
};

export default useTasks;
