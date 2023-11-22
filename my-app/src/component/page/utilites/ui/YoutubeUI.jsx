import styled from "styled-components";
import React from 'react';
import YouTube from "react-youtube";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledYoutube = styled(YouTube)`
  box-sizing: border-box;
  width: calc(30% - 10px);
  margin: 10px;
  height: calc(40% - 10px);

  @media (min-width: 1600px) {
    width: calc(25% - 10px);
  }

  @media (min-width: 1300px) and (max-width: 1599px) {
    width: calc(33.33% - 10px);
  }

  @media (max-width: 1080px) {
    width: calc(50% - 10px);
  }
`

function YoutubeUI(){
  return (
    <Container>
      <StyledYoutube />
      <StyledYoutube />
      <StyledYoutube />
      <StyledYoutube />
      {/* Add more StyledYoutube components as needed */}
    </Container>
  )
}

export default YoutubeUI;