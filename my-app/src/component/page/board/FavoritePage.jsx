/*eslint-disable*/
import React from 'react';
import SideBar from '../utilites/SideBar';
import styled from "styled-components"
import { favoriteListMock } from "../../../mocks";
import FavoriteItem from "./FavoriteListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  row-gap: 20px;
`

function FavoritePage(){
  return (
    <div>
      <SideBar/>
      <Container>
        {favoriteListMock.map((favoriteListItem, index)=>(
          <FavoriteItem key={index} favoriteListItem={favoriteListItem}/>
        ))}
      </Container>
      
    </div>
    
  )
}

export default FavoritePage;