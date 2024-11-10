import { deleteFileApi } from '@api/filesApi';
import { createTaskApi, fetchTasksApi, updateTaskApi } from '@api/tasksApi';
import { ITask } from '@interfaces';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { taskInfoSelector } from '@selectors/taskSelectors';
import { TRootState } from '@store';
import {
  IAddTaskAction,
  ICreateTaskAsyncAction,
  IFetchTasksAsyncAction,
  IRemoveTaskAction,
  ISetError,
  ISetLoadingAction,
  ISetTasksAction,
  IUpdateTaskAction,
  IUpdateTaskAsyncAction,
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

export const updateTaskAsyncAction = createAsyncThunk<
  void,
  IUpdateTaskAsyncAction
>(
  'tasks/updateTaskAsyncAction',
  async (
    {
      projectId,
      taskId,
      title,
      description,
      status,
      type,
      user,
      timeAllotted,
      files,
      oldFiles,
      onSuccess,
    }: IUpdateTaskAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const state: TRootState = getState() as TRootState;
      const taskInfo: ITask | undefined = taskInfoSelector(taskId)(state);
      if (taskInfo) {
        const deletedFiles = taskInfo.files.filter(
          (file) => !oldFiles.some((oldFile) => oldFile.name === file.name)
        );
        for (let i = 0; i < deletedFiles.length; i++) {
          await deleteFileApi(deletedFiles[i].id);
        }
      }
      const res = await updateTaskApi(
        projectId,
        taskId,
        title,
        description,
        status.id,
        type.id,
        user.id,
        timeAllotted,
        files
      );
      console.log('Updated Task: ', res);
      dispatch(fetchTasksAsyncAction({ projectId: projectId }));
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::updateTaskAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
