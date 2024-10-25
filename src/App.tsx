import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentEditorPage from './pages/CommentEditorPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ProjectEditorPage from './pages/ProjectEditorPage';
import ProjectsPage from './pages/ProjectsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import TaskEditorPage from './pages/TaskEditorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectDetailsPage />} />
        <Route
          path="projects/:projectId/tasks/:taskId"
          element={<TaskDetailsPage />}
        />
        <Route path="projects/create" element={<ProjectEditorPage />} />
        <Route
          path="projects/edit/:projectId"
          element={<ProjectEditorPage />}
        />
        <Route
          path="projects/:projectId/tasks/create"
          element={<TaskEditorPage />}
        />
        <Route
          path="projects/:projectId/tasks/edit/:taskId"
          element={<TaskEditorPage />}
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/create"
          element={<CommentEditorPage />}
        />
        <Route
          path="projects/:projectId/tasks/:taskId/comments/:commentId/edit"
          element={<CommentEditorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
