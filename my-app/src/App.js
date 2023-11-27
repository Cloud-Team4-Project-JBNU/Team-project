/*eslint-disable*/
import './App.css';
import React from 'react';
import LoginPage from './component/page/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './component/page/login/SignupPage';
import HomePage from './component/page/utilites/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortsPage from './component/page/utilites/ShortsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/signup" element={ <SignupPage/>} />
        <Route path="/home" element={ <HomePage/>}/>
        <Route path="/shorts" element={<ShortsPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
