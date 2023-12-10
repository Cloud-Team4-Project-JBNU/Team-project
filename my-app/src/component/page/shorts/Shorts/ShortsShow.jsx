/*eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import styled from "styled-components";
import getButtonData from './getButtonData';
import shortsVideos from './shortsVideos';
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const ShortsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledYoutube = styled(YouTube)`
  iframe {
    width: 450px;
    height: 800px;
    border-radius: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;
`

const StyledButton = styled.img`
  background-color: #e2e2e2;
  margin: 10px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  padding: 10px;
  &:hover{
    cursor: pointer;
    background-color: #5f5f5f;
  }
`

function ShortsShow(){
  
  
  //피셔 예이츠 알고리즘. https://taesung1993.tistory.com/54
  function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const videoIds = [...shortsVideos].map(video => video.videoId)
  const shuffledVideoIds = shuffle(videoIds);
  const [videoId, setVideoId] = useState(shuffledVideoIds[0])
  const buttons = [...getButtonData]; 

  const updateVideoId = (newVideoId) => {
    setVideoId(newVideoId);
  }

  const handleWheel = useCallback((event) => {
    const currentIndex = shuffledVideoIds.indexOf(videoId);
    if (event.deltaY > 0) {
      const nextIndex = currentIndex + 1 < shuffledVideoIds.length ? currentIndex + 1 : 0;
      updateVideoId(shuffledVideoIds[nextIndex]);
    }else{
      const prevIndex = currentIndex - 1 >= 0 ? currentIndex -1 : shuffledVideoIds.length - 1;
      updateVideoId(shuffledVideoIds[prevIndex])
    }
  }, [videoId, shuffledVideoIds]);

  useEffect(()=> {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
    
  }, [handleWheel]);

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

  const onPlayerReady = (event) => {
    console.log("플레이어 준비");
  }

  return (
    <Container>    
      <ShortsContainer>

        <ContentWrapper>
          <VideoWrapper>
            <StyledYoutube 
              videoId={videoId}
              opts={opts}
              onReady={onPlayerReady}
            />
          </VideoWrapper>
          <ButtonContainer>
            {buttons.map((item) => (
              <StyledButton key={item.id}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </ButtonContainer>
        </ContentWrapper>
      </ShortsContainer>
    </Container>
    
  )
}

export default ShortsShow;