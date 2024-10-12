import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';


const App = () => {

  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='sign-in' element={<SignInPage/>}/>
        <Route path='sign-up' element={<SignUpPage/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;