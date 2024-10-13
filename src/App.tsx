import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';


const App = () => {

  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='sign-in' element={<SignInPage/>}/>
        <Route path='sign-up' element={<SignUpPage/>}/> 
        <Route path='projects' element={<ProjectsPage/>}/>
        <Route path='projects/:id' element={<ProjectDetailsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;