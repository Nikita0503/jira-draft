import { fetchStatusesAsyncAction } from '@actions/statusesActions';
import { IStatus } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStatuses = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const statuses = useSelector<TRootState, IStatus[]>(
    (state: TRootState) => state.statuses.statuses
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.statuses.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.statuses.loading
  );

  const fetchStatuses = React.useCallback(() => {
    dispatch(fetchStatusesAsyncAction());
  }, []);

  return { statuses, error, loading, fetchStatuses };
};

export default useStatuses;
