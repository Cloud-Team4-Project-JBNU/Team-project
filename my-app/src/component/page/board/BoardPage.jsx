/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import BoardListItemComponent from './BoardListItem'
import { latestBoardListMock } from '../../../mocks'
function BoardPage(){
  return (
    <div>
      <SideBar/>
      <BoardListItemComponent/>
    </div>
    
  )
}

export default BoardPage;