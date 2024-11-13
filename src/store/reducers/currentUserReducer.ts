import {
  setCurrentUserAction,
  setErrorAction,
  setLoadingAction,
} from '@actions/currentUserActions';
import { createReducer } from '@reduxjs/toolkit';
import { ICurrentUserReducerState } from 'interfaces/reducers/currentUserReducer';

const initialState: ICurrentUserReducerState = {
  currentUser: undefined,
  error: undefined,
  loading: false,
};

const currentUserReducer = createReducer<ICurrentUserReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setCurrentUserAction, (store, { payload: { currentUser } }) => ({
        ...store,
        currentUser: currentUser,
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

export default currentUserReducer;
