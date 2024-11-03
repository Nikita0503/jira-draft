import { createReducer } from '@reduxjs/toolkit';
import { IProject } from '../../interfaces';
import { IProjectsReducerState } from '../../interfaces/reducers/projectsReducer';
import {
  addProjectAction,
  removeProjectAction,
  setErrorAction,
  setLoadingAction,
  setProjectsAction,
  updateProjectAction,
} from '../actions/projectsActions';

const initialState: IProjectsReducerState = {
  projects: [],
  error: undefined,
  loading: false,
};

const projectsReducer = createReducer<IProjectsReducerState>(
  initialState,
  (builder) =>
    builder
      .addCase(setProjectsAction, (store, { payload: { projects } }) => ({
        ...store,
        projects: projects,
      }))
      .addCase(addProjectAction, (store, { payload: { project } }) => ({
        ...store,
        projects: [...store.projects, project],
      }))
      .addCase(updateProjectAction, (store, { payload: { project } }) => ({
        ...store,
        projects: store.projects.map((currentProject: IProject) =>
          currentProject.id === project.id ? project : currentProject
        ),
      }))
      .addCase(removeProjectAction, (store, { payload: { project } }) => ({
        ...store,
        projects: store.projects.filter(
          (currentProject: IProject) => currentProject.id !== project.id
        ),
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

export default projectsReducer;
