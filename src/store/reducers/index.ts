import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer';
import currentUserReducer from './currentUserReducer';
import projectsReducer from './projectsReducer';
import statusesReducer from './statusesReducer';
import tasksReducer from './tasksReducer';
import typesReducer from './typesReducer';
import usersReducer from './usersReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'auth',
    'projects',
    'tasks',
    'comments',
    'statuses',
    'types',
    'users',
    'currentUser',
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
  statuses: statusesReducer,
  types: typesReducer,
  users: usersReducer,
  currentUser: currentUserReducer,
});

export default persistReducer(persistConfig, rootReducer);
