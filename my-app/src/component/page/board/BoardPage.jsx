/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import BoardItem from './BoardListItem'
import { latestBoardListMock } from '../../../mocks'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px;
`

const StyledButton = styled.button`
  margin: 10px;
  height: 40px;
  padding: 0 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')}; 
`

const RefreshImage = styled.img`
  width: 24px;
  height: 24px;
`

function BoardPage(){
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.userLogin.isLogin);
  return (
    <div>
      <SideBar/>
      {latestBoardListMock.map(boardListItem => (
        <BoardItem key={boardListItem.boardNumber} boardListItem={boardListItem} />
      ))}
      <ButtonContainer>
        <StyledButton 
          onClick={() => navigate('/board-write')}
          disabled={!isLogin} // 로그인 상태에 따라 버튼 비활성화
        >
          게시물 작성하기
        </StyledButton>
        <StyledButton onClick={()=>window.location.reload}>
        <RefreshImage src="../../images/refresh.png" alt="Refresh" />
        </StyledButton>
        {/* 새로고침은 데이터베이스에서 영상들 다시 받아오는 기능으로 구현 */}
      </ButtonContainer>
      
    </div>
    
  )
}

export default BoardPage;