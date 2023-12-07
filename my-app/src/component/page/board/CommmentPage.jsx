/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import styled from "styled-components"
import { commentListMock } from '../../../mocks'
import CommentItem from './CommentListItem'
const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

function CommentPage(){
  return (
    <div>
      <SideBar/>
      <Container>
        {commentListMock.map((commentListItem, index) => (
          <CommentItem key={index} commentListItem={commentListItem}/>
        ))}
      </Container>
      
    </div>
    
  )
}

export default CommentPage;