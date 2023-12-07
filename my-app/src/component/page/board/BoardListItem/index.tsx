/*eslint-disable*/
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BoardListItem } from '../../../../types/interface';
import "./style.css";

interface Props{
  boardListItem: BoardListItem;
}

export default function BoardItem({ boardListItem } : Props) {
  const { boardNumber, title, content, boardTitleImage } = boardListItem; 
  const { favoriteCount, commentCount, viewCount } = boardListItem;
  const { writeDatetime, writerNickname, writerProfileImage } = boardListItem
  
  //function : 네비게이트 함수 
  const navigate = useNavigate();

  // event handler
  const onClickHandler = () => {
    navigate(boardNumber)
  }

  return (
    <div className='board-list-item' onClick={onClickHandler}>
      <div className='board-list-item-main-box'>
        <div className='board-list-item-top'>
          <div className="board-list-item-profile-box">
            <div className='board-list-item-profile-image' style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : '../../../images/userInfo.png'})`}}></div>
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
      {/* 여기 로직 수정필요 */}
      {boardTitleImage !== null && (
        <div className='board-list-item-image-box'>
          <div className='board-list-item-image'style={{backgroundImage: `url(${boardTitleImage ? boardTitleImage : '../../../images/youtube.png'})`}}></div>
        </div>
      )}
      
    </div>
  )
}
