import { IUser } from '@interfaces';

export interface IUsersReducerState {
  users: IUser[];
  error: any;
  loading: boolean;
}
