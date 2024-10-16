import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import TaskDetailsPage from './pages/TaskDetailsPage';


const App = () => {

  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='sign-in' element={<SignInPage/>}/>
        <Route path='sign-up' element={<SignUpPage/>}/> 
        <Route path='projects' element={<ProjectsPage/>}/>
        <Route path='projects/:projectId' element={<ProjectDetailsPage />}/>
        <Route path='projects/:projectId/tasks/:taskId' element={<TaskDetailsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;