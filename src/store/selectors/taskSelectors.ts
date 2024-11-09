import { ITask } from '@interfaces';
import { TRootState } from '@store';
import { createSelector } from 'reselect';

const tasksSelector = (state: TRootState) => state.tasks.tasks;

export const taskInfoSelector = (taskId: number) =>
  createSelector([tasksSelector], (tasks: ITask[]) =>
    tasks.find((task: ITask) => task.id == taskId)
  );
