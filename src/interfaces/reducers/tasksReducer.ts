import { ITask } from '@interfaces';

export interface ITasksReducerState {
  tasks: ITask[];
  error: any;
  loading: boolean;
}
