/*eslint-disable*/
import './App.css';
import React from 'react';
import LoginPage from './component/page/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './component/page/login/SignupPage';
import HomePage from './component/page/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShortsPage from './component/page/shorts/ShortsPage';
import BoardPage from './component/page/board/BoardPage';
import CommentPage from './component/page/board/CommmentPage';
import FavoritePage from './component/page/board/FavoritePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/signup" element={ <SignupPage/>} />
        <Route path="/home" element={ <HomePage/>}/>
        <Route path="/shorts" element={<ShortsPage/>}/>
        
        <Route path="/board" element={<BoardPage/>}/>
        <Route path="/comment" element={<CommentPage/>}/>
        <Route path="/favorite" element={<FavoritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
