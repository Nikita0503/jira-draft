import { IProject } from '@interfaces';

export interface ISetProjectsAction {
  projects: IProject[];
}

export interface IAddProjectAction {
  project: IProject;
}

export interface IUpdateProjectAction {
  project: IProject;
}

export interface IRemoveProjectAction {
  project: IProject;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ICreateProjectAsyncAction {
  title: string;
  description: string;
  onSuccess?: () => void;
}

export interface IUpdateProjectAsyncAction {
  projectId: number;
  title: string;
  description: string;
  onSuccess?: () => void;
}

export interface IDeleteProjectAsyncAction {
  projectId: number;
  onSuccess?: () => void;
}

export interface IAddUserToProjectAsyncAction {
  projectId: number;
  userId: number;
  onSuccess?: () => void;
}

export interface IRemoveUserFromProjectAsyncAction {
  projectId: number;
  userId: number;
  onSuccess?: () => void;
}
