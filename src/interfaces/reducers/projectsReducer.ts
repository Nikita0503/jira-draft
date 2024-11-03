import { IProject } from '..';

export interface IProjectsReducerState {
  projects: IProject[];
  error: any;
  loading: boolean;
}
