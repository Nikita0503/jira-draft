import {
  deleteCurrentUserAvatarApi,
  fetchCurrentUserApi,
  updateCurrentUserApi,
} from '@api/currentUserApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorResponse } from '@utils/errorHandlers';
import {
  ISetCurrentUserAction,
  ISetError,
  ISetLoadingAction,
  IUpdateCurrentUserAsyncAction,
} from 'interfaces/actions/currentUserActions';

export const setCurrentUserAction = createAction<ISetCurrentUserAction>(
  'currentUser/setCurrentUserAction'
);

export const setErrorAction = createAction<ISetError>(
  'currentUser/setErrorAction'
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'currentUser/setLoadingAction'
);

export const fetchCurrentUserAsyncAction = createAsyncThunk(
  'currentUser/fetchCurrentUserAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCurrentUserApi();
      const currentUser = res.user;
      dispatch(setCurrentUserAction({ currentUser: currentUser }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('currentUserActions::fetchCurrentUserAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateCurrentUserAsyncAction = createAsyncThunk<
  void,
  IUpdateCurrentUserAsyncAction
>(
  'currentUser/updateCurrentUserAsyncAction',
  async (
    { name, avatar, onSuccess }: IUpdateCurrentUserAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      if (!avatar) {
        await deleteCurrentUserAvatarApi();
      }
      const res = await updateCurrentUserApi(name, avatar);
      console.log('Updated User: ', res);
      dispatch(fetchCurrentUserAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::updateTaskAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
