import { createReducer } from '@reduxjs/toolkit';
import { IUsersReducerState } from 'interfaces/reducers/usersReducer';
import {
  setErrorAction,
  setLoadingAction,
  setUsersAction,
} from '../actions/usersActions';

const initialState: IUsersReducerState = {
  users: [],
  error: undefined,
  loading: false,
};

const usersReducer = createReducer<IUsersReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setUsersAction, (store, { payload: { users } }) => ({
        ...store,
        users: users,
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

export default usersReducer;
