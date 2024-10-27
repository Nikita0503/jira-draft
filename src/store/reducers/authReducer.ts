import { createReducer } from '@reduxjs/toolkit';
import { IAuthReducerState } from '../../interfaces/reducers/authReducer';
import { setAccessTokenAction } from '../actions/authActions';

const initialState: IAuthReducerState = {
  accessToken: '',
};

const authReducer = createReducer<IAuthReducerState>(initialState, (builder) =>
  builder.addCase(
    setAccessTokenAction,
    (store, { payload: { accessToken } }) => ({
      ...store,
      accessToken: accessToken,
    })
  )
);

export default authReducer;
