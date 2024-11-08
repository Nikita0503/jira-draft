import {
  createProjectAsyncAction,
  deleteProjectAsyncAction,
  fetchProjectsAsyncAction,
  updateProjectAsyncAction,
} from '@actions/projectsActions';
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

  const createProject = React.useCallback(
    (title: string, description: string, onSuccess?: () => void) => {
      dispatch(
        createProjectAsyncAction({
          title: title,
          description: description,
          onSuccess: onSuccess,
        })
      );
    },
    []
  );

  const updateProject = React.useCallback(
    (
      projectId: number,
      title: string,
      description: string,
      onSuccess?: () => void
    ) => {
      dispatch(
        updateProjectAsyncAction({
          projectId: projectId,
          title: title,
          description: description,
          onSuccess: onSuccess,
        })
      );
    },
    []
  );

  const deleteProject = React.useCallback(
    (projectId: number, onSuccess?: () => void) => {
      dispatch(
        deleteProjectAsyncAction({
          projectId: projectId,
          onSuccess: onSuccess,
        })
      );
    },
    []
  );

  const addUserToProject = React.useCallback(() => {}, []);

  const removeUserFromProject = React.useCallback(() => {}, []);

  return {
    projects,
    error,
    loading,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};

export default useProjects;
