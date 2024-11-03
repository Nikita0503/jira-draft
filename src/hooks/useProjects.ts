import { fetchProjectsAsyncAction } from '@actions/projectsActions';
import { IProject } from '@interfaces';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useProjects = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const projects = useSelector<TRootState, IProject[]>(
    (state: TRootState) => state.projects.projects
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.projects.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.projects.loading
  );

  const fetchProjects = React.useCallback(() => {
    dispatch(fetchProjectsAsyncAction());
  }, []);

  return { projects, error, loading, fetchProjects };
};

export default useProjects;
