import { fetchCurrentUserAsyncAction } from '@actions/currentUserActions';
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

  return { currentUser, error, loading, fetchCurrentUser };
};

export default useCurrentUser;
