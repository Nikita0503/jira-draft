import { fetchStatusesApi } from '@api/statusesApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISetError,
  ISetLoadingAction,
  ISetStatusesAction,
} from '../../interfaces/actions/statusesActions';

export const setStatusesAction = createAction<ISetStatusesAction>(
  'statuses/setStatusesAction'
);

export const setErrorAction = createAction<ISetError>(
  'statuses/setErrorAction'
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'statuses/setLoadingAction'
);

export const fetchStatusesAsyncAction = createAsyncThunk(
  'statuses/fetchStatusesAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchStatusesApi();
      const statuses = res.statuses;
      dispatch(setStatusesAction({ statuses: statuses }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('statusesActions::fetchStatusesAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
