import React from 'react';
import styled from "styled-components";
import BoardDetail from './BoardDetail';
import Comment from './Comment';
import SideBar from '../utilites/SideBar';

function BoardDetailPage(){
  return (
    <div>
      <SideBar/>
      <BoardDetail/>
      <Comment/>

    </div>
  )
}

export default BoardDetailPage;