/*eslint-disable*/
import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

// 13번 45분까지 함. typescript로 모든 파일 바꿀생각도 해야할듯. Mocks 안만들어둠.

function BoardListItem({ boardListItem }){
  
  const { boardNumber, title, content, boardTitleImage } = boardListItem; 
  const { favoriteCount, commentCount, viewCount } = boardListItem;
  const { writeDatetime, writerNickname, writeProfileImage } = boardListItem
  
  //function : 네비게이트 함수 
  const navigate = useNavigate();

  // event handler
  const onClickHandler = () => {
    navigate(boardNumber)
  }

  return (
    <div className='board-list-item'>
      <div className='board-list-item-box'>
        <div className='board-list-item-top'>
          <div className="board-list-item-profile-box">
            <div className='board-list-item-profile-image' style={{backgroundImage: `url(${writeProfileImage ? writeProfileImage : '../../../images/userInfo.png'})`}}></div>
          </div>
          <div className="board-list-item-write-box">
            <div className='board-list-item-nickname'>{writerNickname}</div>
            <div className='board-list-item-write-date'>{writeDatetime}</div>
          </div>
        </div>
        <div className='board-list-item-middle'>
          <div className='board-list-item-title'>{title}</div>
          <div className='board-list-item-content'>{content}</div>
        </div>
        <div className='board-list-item-bottom'>
          <div className='board-list-item-counts'>
            {`댓글 : ${commentCount}   ·  좋아요 : ${favoriteCount}  ·  조회수 : ${viewCount}`}
          </div>
        </div>
      </div>
      {boardTitleImage !== null && (
        <div className='board-list-item-image-box'>
        <div className='board-list-item-image'style={{backgroundImage: `url(${boardTitleImage ? boardTitleImage : '../../../images/youtube.png'})`}}></div>
        </div>
      )}
      
    </div>
  )
}

export default BoardListItem;