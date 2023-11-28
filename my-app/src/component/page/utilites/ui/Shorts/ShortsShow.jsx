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


function ShortsShow(){

  const opts = {
    playerVars: {
      autoplay: 0, // Disable autoplay to prevent the video from playing on load
      modestbranding: 1, // Hide the Youtube logo as much as possible
      controls: 0, // Hide all video controls
      disablekb: 1, // Disable keyboard controls
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
          videoId='Dmolgd36e7o'
          opts={opts}
        />

      </VideoWrapper>

    </ShortsContainer>
  )
}

export default ShortsShow;