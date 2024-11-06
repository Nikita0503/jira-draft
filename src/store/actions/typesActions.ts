import { fetchTypesApi } from '@api/typesApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISetError,
  ISetLoadingAction,
  ISetTypesAction,
} from '../../interfaces/actions/typesActions';

export const setTypesAction = createAction<ISetTypesAction>(
  'types/setTypesAction'
);

export const setErrorAction = createAction<ISetError>('types/setErrorAction');

export const setLoadingAction = createAction<ISetLoadingAction>(
  'types/setLoadingAction'
);

export const fetchTypesAsyncAction = createAsyncThunk(
  'types/fetchTypesAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchTypesApi();
      const types = res.types;
      dispatch(setTypesAction({ types: types }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('typesActions::fetchTypesAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
