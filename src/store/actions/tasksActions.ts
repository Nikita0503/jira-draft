import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createTaskApi, fetchTasksApi } from 'api/tasksApi';
import {
  IAddTaskAction,
  ICreateTaskAsyncAction,
  IFetchTasksAsyncAction,
  IRemoveTaskAction,
  ISetError,
  ISetLoadingAction,
  ISetTasksAction,
  IUpdateTaskAction,
} from '../../interfaces/actions/tasksActions';

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction'
);

export const addTaskAction = createAction<IAddTaskAction>(
  'tasks/addTaskAction'
);

export const updateTaskAction = createAction<IUpdateTaskAction>(
  'tasks/updateTaskAction'
);

export const removeTaskAction = createAction<IRemoveTaskAction>(
  'tasks/removeTaskAction'
);

export const setErrorAction = createAction<ISetError>('tasks/setErrorAction');

export const setLoadingAction = createAction<ISetLoadingAction>(
  'tasks/setLoadingAction'
);

export const fetchTasksAsyncAction = createAsyncThunk<
  void,
  IFetchTasksAsyncAction
>(
  'tasks/fetchTasksAsyncAction',
  async ({ projectId }: IFetchTasksAsyncAction, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchTasksApi(projectId);
      const tasks = res.tasks.reverse();
      dispatch(setTasksAction({ tasks: tasks }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('tasksActions::fetchTasksAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const createTaskAsyncAction = createAsyncThunk<
  void,
  ICreateTaskAsyncAction
>(
  'tasks/createTaskAsyncAction',
  async (
    {
      projectId,
      title,
      description,
      status,
      type,
      user,
      timeAllotted,
      files,
      onSuccess,
    }: ICreateTaskAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await createTaskApi(
        projectId,
        title,
        description,
        status.id,
        type.id,
        user.id,
        timeAllotted,
        files
      );
      console.log('Created Task: ', res);
      dispatch(fetchTasksAsyncAction({ projectId: projectId }));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::createTaskAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
