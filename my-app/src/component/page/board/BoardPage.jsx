/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import BoardItem from './BoardListItem'
import { latestBoardListMock } from '../../../mocks'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px;
`

const StyledButton = styled.button`
  margin: 10px;
  height: 40px;
`

function BoardPage(){
  const navigate = useNavigate();
  return (
    <div>
      <SideBar/>
      {latestBoardListMock.map(boardListItem => (
        <BoardItem key={boardListItem.boardNumber} boardListItem={boardListItem} />
      ))}
      <ButtonContainer>
        <StyledButton onClick={()=> {navigate('/board-write')}}>게시물 작성하기</StyledButton>
        <StyledButton onClick={()=>window.location.reload}>새로고침</StyledButton>
        {/* 새로고침은 데이터베이스에서 영상들 다시 받아오는 용도로 사용하기 */}
      </ButtonContainer>
      
    </div>
    
  )
}

export default BoardPage;