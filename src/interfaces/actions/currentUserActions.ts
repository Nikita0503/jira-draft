import { IUser } from '@interfaces';

export interface ISetCurrentUserAction {
  currentUser: IUser;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IUpdateCurrentUserAsyncAction {
  name: string;
  avatar: File | string | undefined;
  onSuccess?: () => void;
}
