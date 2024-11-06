import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import projectsReducer from './projectsReducer';
import statusesReducer from './statusesReducer';
import tasksReducer from './tasksReducer';
import typesReducer from './typesReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'projects', 'tasks', 'statuses', 'types'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  statuses: statusesReducer,
  types: typesReducer,
});

export default persistReducer(persistConfig, rootReducer);
