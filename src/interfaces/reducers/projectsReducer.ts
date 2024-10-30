import { IProject } from '..';

export interface IProjectsReducerState {
  projects: IProject[];
  loading: boolean;
}
