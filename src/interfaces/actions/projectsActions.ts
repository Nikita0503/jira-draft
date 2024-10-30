import { IProject } from '..';

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

export interface ISetLoadingAction {
  loading: boolean;
}
