import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signInApi, signUpApi } from '../../api/authApi';
import { TUserRole } from '../../interfaces';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
} from '../../interfaces/actions/authActions';

interface ISignInParams {
  email: string;
  password: string;
  onSuccess: () => void;
}

interface ISignUpParams {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  role: TUserRole;
  avatar?: File;
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
      console.log('authActions::signInAsyncAction error:', errorDetails);
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

export const signUpAsyncAction = createAsyncThunk(
  'auth/signUpAsyncAction',
  async (
    {
      email,
      name,
      password,
      repeatPassword,
      role,
      avatar,
      onSuccess,
    }: ISignUpParams,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await signUpApi(email, name, password, role, avatar);
      if (res.token) {
        dispatch(setAccessTokenAction({ accessToken: res.token }));
      }
      console.log({ token: res.token });
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      const errorDetails = e.response.data;
      console.log('authActions::signUpAsyncAction error:', errorDetails);
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
