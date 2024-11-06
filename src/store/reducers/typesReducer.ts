import { createReducer } from '@reduxjs/toolkit';
import { ITypesReducerState } from 'interfaces/reducers/typesReducer';
import {
  setErrorAction,
  setLoadingAction,
  setTypesAction,
} from '../actions/typesActions';

const initialState: ITypesReducerState = {
  types: [],
  error: undefined,
  loading: false,
};

const typesReducer = createReducer<ITypesReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setTypesAction, (store, { payload: { types } }) => ({
        ...store,
        types: types,
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

export default typesReducer;
