import { ITask } from '..';

export interface ITasksReducerState {
  tasks: ITask[];
  error: any;
  loading: boolean;
}
