import ProtectedRoute from '@components/ProtectedRoute';
import CommentEditorPage from '@pages/CommentEditorPage';
import ProjectCreatorPage from '@pages/ProjectCreatorPage';
import ProjectDetailsPage from '@pages/ProjectDetailsPage';
import ProjectEditorPage from '@pages/ProjectEditorPage';
import ProjectsPage from '@pages/ProjectsPage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import TaskCreatorPage from '@pages/TaskCreatorPage';
import TaskDetailsPage from '@pages/TaskDetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
              <ProjectCreatorPage />
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
              <TaskCreatorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/edit/:taskId"
          element={
            <ProtectedRoute>
              <TaskCreatorPage />
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
