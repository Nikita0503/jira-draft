import { fetchUsersAsyncAction } from '@actions/usersActions';
import { IUser } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useUsers = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const users = useSelector<TRootState, IUser[]>(
    (state: TRootState) => state.users.users
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.users.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.users.loading
  );

  const fetchUsers = React.useCallback(() => {
    dispatch(fetchUsersAsyncAction());
  }, []);

  return { users, error, loading, fetchUsers };
};

export default useUsers;
