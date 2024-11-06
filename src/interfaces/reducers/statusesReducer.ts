import { IStatus } from '@interfaces';

export interface IStatusesReducerState {
  statuses: IStatus[];
  error: any;
  loading: boolean;
}
