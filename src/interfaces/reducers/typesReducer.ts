import { IType } from '@interfaces';

export interface ITypesReducerState {
  types: IType[];
  error: any;
  loading: boolean;
}
