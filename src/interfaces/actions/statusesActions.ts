import { IStatus } from '@interfaces';

export interface ISetStatusesAction {
  statuses: IStatus[];
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}
