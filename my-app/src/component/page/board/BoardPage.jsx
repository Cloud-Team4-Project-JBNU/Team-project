/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import BoardItem from './BoardListItem'
import { latestBoardListMock } from '../../../mocks'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
  height: 20px;
  width: 25px;
`

function BoardPage(){
  const navigate = useNavigate();
  return (
    <div>
      <SideBar/>
      {latestBoardListMock.map(boardListItem => (
        <BoardItem key={boardListItem.boardNumber} boardListItem={boardListItem} />
      ))}
      <StyledButton onClick={()=> {navigate('/board-write')}}/>
      
    </div>
    
  )
}

export default BoardPage;