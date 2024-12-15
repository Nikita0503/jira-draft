import { setAccessTokenAction } from '@actions/authActions';
import {
  fetchCurrentUserAsyncAction,
  updateCurrentUserAsyncAction,
} from '@actions/currentUserActions';
import { IUser } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCurrentUser = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const currentUser = useSelector<TRootState, IUser | undefined>(
    (state: TRootState) => state.currentUser.currentUser
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.currentUser.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.currentUser.loading
  );

  const fetchCurrentUser = React.useCallback(() => {
    dispatch(fetchCurrentUserAsyncAction());
  }, []);

  const updateCurrentUser = React.useCallback(
    (
      name: string,
      avatar: File | string | undefined,
      onSuccess?: () => void
    ) => {
      dispatch(
        updateCurrentUserAsyncAction({
          name: name,
          avatar: avatar,
          onSuccess: onSuccess,
        })
      );
    },
    []
  );

  const logout = React.useCallback(() => {
    dispatch(setAccessTokenAction({ accessToken: undefined }));
  }, []);

  return {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
    updateCurrentUser,
    logout,
  };
};

export default useCurrentUser;
