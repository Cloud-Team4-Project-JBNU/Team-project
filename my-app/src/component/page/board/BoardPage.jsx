/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import BoardItem from './BoardListItem'
import { latestBoardListMock } from '../../../mocks'
function BoardPage(){
  return (
    <div>
      <SideBar/>
      {latestBoardListMock.map(boardListItem => (
        <BoardItem key={boardListItem.boardNumber} boardListItem={boardListItem} />
      ))}
      
      
    </div>
    
  )
}

export default BoardPage;