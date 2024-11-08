import {
  addUserToProjectApi,
  createProjectApi,
  deleteProjectApi,
  fetchProjectsApi,
  removeUserFromProjectApi,
  updateProjectApi,
} from '@api/projectsApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IAddProjectAction,
  IAddUserToProjectAsyncAction,
  ICreateProjectAsyncAction,
  IDeleteProjectAsyncAction,
  IRemoveProjectAction,
  IRemoveUserFromProjectAsyncAction,
  ISetError,
  ISetLoadingAction,
  ISetProjectsAction,
  IUpdateProjectAction,
  IUpdateProjectAsyncAction,
} from '../../interfaces/actions/projectsActions';

export const setProjectsAction = createAction<ISetProjectsAction>(
  'projects/setProjectsAction'
);

export const addProjectAction = createAction<IAddProjectAction>(
  'projects/addProjectAction'
);

export const updateProjectAction = createAction<IUpdateProjectAction>(
  'projects/updateProjectAction'
);

export const removeProjectAction = createAction<IRemoveProjectAction>(
  'projects/removeProjectAction'
);

export const setErrorAction = createAction<ISetError>(
  'projects/setErrorAction'
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'projects/setLoadingAction'
);

export const fetchProjectsAsyncAction = createAsyncThunk(
  'projects/fetchProjectsAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchProjectsApi();
      const projects = res.projects.reverse();
      dispatch(setProjectsAction({ projects: projects }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('projectsActions::fetchProjectsAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const createProjectAsyncAction = createAsyncThunk<
  void,
  ICreateProjectAsyncAction
>(
  'projects/createProjectAsyncAction',
  async (
    { title, description, onSuccess }: ICreateProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await createProjectApi(title, description);
      console.log('Created Project: ', res);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('projectsActions::createProjectAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateProjectAsyncAction = createAsyncThunk<
  void,
  IUpdateProjectAsyncAction
>(
  'projects/updateProjectAsyncAction',
  async (
    { projectId, title, description, onSuccess }: IUpdateProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await updateProjectApi(projectId, title, description);
      console.log('Updated Project: ', res);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('projectsActions::updateProjectAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const deleteProjectAsyncAction = createAsyncThunk<
  void,
  IDeleteProjectAsyncAction
>(
  'projects/deleteProjectAsyncAction',
  async (
    { projectId, onSuccess }: IDeleteProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await deleteProjectApi(projectId);
      console.log('Deleted Project: ', res);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('projectsActions::deleteProjectAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const addUserToProjectAsyncAction = createAsyncThunk<
  void,
  IAddUserToProjectAsyncAction
>(
  'projects/addUserToProjectAsyncAction',
  async (
    { projectId, userId, onSuccess }: IAddUserToProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await addUserToProjectApi(projectId, userId);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('projectsActions::addUserToProjectAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const removeUserFromProjectAsyncAction = createAsyncThunk<
  void,
  IRemoveUserFromProjectAsyncAction
>(
  'projects/removeUserFromProjectAsyncAction',
  async (
    { projectId, userId, onSuccess }: IRemoveUserFromProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await removeUserFromProjectApi(projectId, userId);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log(
        'projectsActions::removeUserFromProjectAsyncAction error:',
        e
      );
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
