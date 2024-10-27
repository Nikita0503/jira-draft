import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import CommentEditorPage from './../../pages/CommentEditorPage';
import ProjectDetailsPage from './../../pages/ProjectDetailsPage';
import ProjectEditorPage from './../../pages/ProjectEditorPage';
import ProjectsPage from './../../pages/ProjectsPage';
import SignInPage from './../../pages/SignInPage';
import SignUpPage from './../../pages/SingUpPage';
import TaskDetailsPage from './../../pages/TaskDetailsPage';
import TaskEditorPage from './../../pages/TaskEditorPage';

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route
          path="projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId"
          element={
            <ProtectedRoute>
              <ProjectDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId"
          element={
            <ProtectedRoute>
              <TaskDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/create"
          element={
            <ProtectedRoute>
              <ProjectEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/edit/:projectId"
          element={
            <ProtectedRoute>
              <ProjectEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/create"
          element={
            <ProtectedRoute>
              <TaskEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/edit/:taskId"
          element={
            <ProtectedRoute>
              <TaskEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/create"
          element={
            <ProtectedRoute>
              <CommentEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/:commentId/edit"
          element={
            <ProtectedRoute>
              <CommentEditorPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
