import { fetchUsersApi } from '@api/usersApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import {
  ISetError,
  ISetLoadingAction,
  ISetUsersAction,
} from 'interfaces/actions/usersActions';

export const setUsersAction = createAction<ISetUsersAction>(
  'users/setUsersAction'
);

export const setErrorAction = createAction<ISetError>('users/setErrorAction');

export const setLoadingAction = createAction<ISetLoadingAction>(
  'users/setLoadingAction'
);

export const fetchUsersAsyncAction = createAsyncThunk(
  'users/fetchUsersAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchUsersApi();
      const users = res.users;
      dispatch(setUsersAction({ users: users }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('usersActions::fetchUsersAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
