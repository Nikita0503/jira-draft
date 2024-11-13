import { IUser } from '@interfaces';

export interface ICurrentUserReducerState {
  currentUser: IUser | undefined;
  error: any;
  loading: boolean;
}
