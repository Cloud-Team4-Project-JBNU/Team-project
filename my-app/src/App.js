/*eslint-disable*/
import './App.css';
import React from 'react';
import LoginPage from './component/page/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './component/page/login/SignupPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/signup" element={ <SignupPage/>} />
      </Routes>
    </div>
  );
}

export default App;
