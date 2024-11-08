export type TUserRole = 'ADMIN' | 'USER';

export interface IFile {
  id: number;
  commentId?: number;
  taskId?: number;
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: TUserRole;
  avatar?: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  tasksCount: number;
  users: IUser[];
}

export interface IStatus {
  id: number;
  title: string;
  color: string;
}

export interface IType {
  id: number;
  title: string;
  color: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  timeTracked: number;
  timeAllotted: number;
  projectId: number;
  statusId: number;
  typeId: number;
  userId: number;
  status: IStatus;
  type: IType;
  user: IUser;
  files: IFile[];
}

export interface IComment {
  id: number;
  message: string;
  taskId: number;
  userId: number;
  user: IUser;
  files: IFile[];
}
