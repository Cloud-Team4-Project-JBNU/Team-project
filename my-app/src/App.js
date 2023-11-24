/*eslint-disable*/
import './App.css';
import React from 'react';
import LoginPage from './component/page/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './component/page/login/SignupPage';
import UtilPage from './component/page/utilites/UtilPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/signup" element={ <SignupPage/>} />
        <Route path="/util" element={ <UtilPage/>} />
      </Routes>
    </div>
  );
}

export default App;
