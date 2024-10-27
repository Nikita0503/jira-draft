import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInApi } from '../../api';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
} from '../../interfaces/actions';

interface ISignInParams {
  email: string;
  password: string;
  onSuccess: () => void;
}

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction'
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction'
);

export const signInAsyncAction = createAsyncThunk(
  'auth/signInAsyncAction',
  async (
    { email, password, onSuccess }: ISignInParams,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await signInApi(email, password);
      if (res.token) {
        dispatch(setAccessTokenAction({ accessToken: res.token }));
      }
      console.log({ token: res.token });
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      const errorDetails = e.response.data;
      console.log('authActions::login error:', errorDetails);
      let errorText = '';
      if (errorDetails.message) {
        errorText = errorText + `${errorDetails.message}. `;
      }
      if (errorDetails.errors) {
        for (let i = 0; i < errorDetails.errors.length; i++) {
          errorText =
            errorText +
            `\n${errorDetails.errors[i].param}: ${errorDetails.errors[i].msg}. `;
        }
      }
      alert(errorText);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
