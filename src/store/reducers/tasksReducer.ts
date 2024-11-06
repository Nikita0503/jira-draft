import { ITask } from '@interfaces';
import { createReducer } from '@reduxjs/toolkit';
import { ITasksReducerState } from '../../interfaces/reducers/tasksReducer';
import {
  addTaskAction,
  removeTaskAction,
  setErrorAction,
  setLoadingAction,
  setTasksAction,
  updateTaskAction,
} from '../actions/tasksActions';

const initialState: ITasksReducerState = {
  tasks: [],
  error: undefined,
  loading: false,
};

const tasksReducer = createReducer<ITasksReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setTasksAction, (store, { payload: { tasks } }) => ({
        ...store,
        tasks: tasks,
      }))
      .addCase(addTaskAction, (store, { payload: { task } }) => ({
        ...store,
        tasks: [...store.tasks, task],
      }))
      .addCase(updateTaskAction, (store, { payload: { task } }) => ({
        ...store,
        tasks: store.tasks.map((currentTask: ITask) =>
          currentTask.id === task.id ? task : currentTask
        ),
      }))
      .addCase(removeTaskAction, (store, { payload: { task } }) => ({
        ...store,
        tasks: store.tasks.filter(
          (currentTask: ITask) => currentTask.id !== task.id
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

export default tasksReducer;
