import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createProjectApi, fetchProjectsApi } from '../../api/projectsApi';
import {
  IAddProjectAction,
  ICreateProjectAsyncAction,
  IRemoveProjectAction,
  ISetError,
  ISetLoadingAction,
  ISetProjectsAction,
  IUpdateProjectAction,
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
      dispatch(setProjectsAction({ projects: res.projects }));
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
