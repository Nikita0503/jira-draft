import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ProjectEditor from './pages/ProjectEditorPage';
import ProjectEditorPage from './pages/ProjectEditorPage';
import TaskEditorPage from './pages/TaskEditorPage';


const App = () => {

  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='sign-in' element={<SignInPage/>}/>
        <Route path='sign-up' element={<SignUpPage/>}/> 
        <Route path='projects' element={<ProjectsPage/>}/>
        <Route path='projects/:projectId' element={<ProjectDetailsPage />}/>
        <Route path='projects/:projectId/tasks/:taskId' element={<TaskDetailsPage />}/>
        <Route path='projects/create' element={<ProjectEditorPage />} />
        <Route path='projects/edit/:projectId' element={<ProjectEditorPage />} />
        <Route path='projects/:projectId/tasks/create' element={<TaskEditorPage />}/>
        <Route path='projects/:projectId/tasks/edit/:taskId' element={<TaskEditorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;