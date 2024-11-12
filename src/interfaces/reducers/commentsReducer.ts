import { IComment } from '@interfaces';

export interface ICommentsReducerState {
  comments: IComment[];
  error: any;
  loading: boolean;
}
