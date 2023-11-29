/*eslint-disable*/
import React from 'react';
import YouTube from 'react-youtube';
import styled from "styled-components";

const ShortsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GenreShower = styled.div`
  padding: 6px;
`

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  background-color: #000;
  border-radius: 8px;
  aspect-ratio: 9 / 16;
  max-width: 400px;
`;

const StyledYoutube = styled(YouTube)`
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const StyledButton = styled.div`
  background-color: #999999;
  border-radius: 50%;
`

function ShortsShow(){

  const opts = {
    playerVars: {
      autoplay: 1, // Disable autoplay to prevent the video from playing on load
      modestbranding: 1, // Hide the Youtube logo as much as possible
      controls: 0, // Hide all video controls
      fs: 0, // Hide the full screen button
      iv_load_policy: 3, // Hide video annotations by default
      showinfo: 0, // Hide video title and uploader before video starts playing
      rel: 0, // Do not show related videos when playback ends
    },
  };

  return (
    <ShortsContainer>
      
      <GenreShower>장르</GenreShower>
      <VideoWrapper>
        <StyledYoutube 
          videoId='6zcccp1p-Uc'
          opts={opts}
        />
      </VideoWrapper>
      <ButtonContainer>
        버튼올거임
      </ButtonContainer>
    </ShortsContainer>
  )
}

export default ShortsShow;