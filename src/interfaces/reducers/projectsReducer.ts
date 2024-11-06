import { IProject } from '@interfaces';

export interface IProjectsReducerState {
  projects: IProject[];
  error: any;
  loading: boolean;
}
