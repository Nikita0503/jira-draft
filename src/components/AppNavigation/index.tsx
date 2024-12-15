import PageLayout from '@components/layouts/PageLayout';
import ProtectedRoute from '@components/ProtectedRoute';
import CommentCreatorPage from '@pages/CommentCreatorPage';
import CommentEditorPage from '@pages/CommentEditorPage';
import ProfilePage from '@pages/ProfilePage';
import ProjectCreatorPage from '@pages/ProjectCreatorPage';
import ProjectDetailsPage from '@pages/ProjectDetailsPage';
import ProjectEditorPage from '@pages/ProjectEditorPage';
import ProjectsPage from '@pages/ProjectsPage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import TaskCreatorPage from '@pages/TaskCreatorPage';
import TaskDetailsPage from '@pages/TaskDetailsPage';
import TaskEditorPage from '@pages/TaskEditorPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

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
              <PageLayout title="Projects">
                <ProjectsPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId"
          element={
            <ProtectedRoute>
              <PageLayout title="Project Details">
                <ProjectDetailsPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId"
          element={
            <ProtectedRoute>
              <PageLayout title="Task Details">
                <TaskDetailsPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/create"
          element={
            <ProtectedRoute>
              <PageLayout title="Project Creator">
                <ProjectCreatorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/edit/:projectId"
          element={
            <ProtectedRoute>
              <PageLayout title="Project Editor">
                <ProjectEditorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/create"
          element={
            <ProtectedRoute>
              <PageLayout title="Task Creator">
                <TaskCreatorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/edit/:taskId"
          element={
            <ProtectedRoute>
              <PageLayout title="Task Editor">
                <TaskEditorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/create"
          element={
            <ProtectedRoute>
              <PageLayout title="Comment Creator">
                <CommentCreatorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/:commentId/edit"
          element={
            <ProtectedRoute>
              <PageLayout title="Comment Editor">
                <CommentEditorPage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <PageLayout title="Profile">
                <ProfilePage />
              </PageLayout>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/projects" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
