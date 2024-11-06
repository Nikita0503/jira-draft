import { createReducer } from '@reduxjs/toolkit';
import { IStatusesReducerState } from '../../interfaces/reducers/statusesReducer';
import {
  setErrorAction,
  setLoadingAction,
  setStatusesAction,
} from '../actions/statusesActions';

const initialState: IStatusesReducerState = {
  statuses: [],
  error: undefined,
  loading: false,
};

const statusesReducer = createReducer<IStatusesReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setStatusesAction, (store, { payload: { statuses } }) => ({
        ...store,
        statuses: statuses,
      }))
      .addCase(setErrorAction, (store, { payload: { error } }) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
        ...store,
        loading: loading,
      }))
);

export default statusesReducer;
