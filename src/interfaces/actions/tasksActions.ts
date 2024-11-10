import { IFile, IStatus, ITask, IType, IUser } from '@interfaces';

export interface ISetTasksAction {
  tasks: ITask[];
}

export interface IAddTaskAction {
  task: ITask;
}

export interface IUpdateTaskAction {
  task: ITask;
}

export interface IRemoveTaskAction {
  task: ITask;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IFetchTasksAsyncAction {
  projectId: number;
}

export interface ICreateTaskAsyncAction {
  projectId: number;
  title: string;
  description: string;
  status: IStatus;
  type: IType;
  user: IUser;
  timeAllotted: number;
  files: File[];
  onSuccess?: () => void;
}

export interface IUpdateTaskAsyncAction {
  projectId: number;
  taskId: number;
  title: string;
  description: string;
  status: IStatus;
  type: IType;
  user: IUser;
  timeAllotted: number;
  files: File[];
  oldFiles: IFile[];
  onSuccess?: () => void;
}

export interface IDeleteTaskAsyncAction {
  projectId: number;
  taskId: number;
  onSuccess?: () => void;
}
