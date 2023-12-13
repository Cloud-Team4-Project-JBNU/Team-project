/*eslint-disable*/
import React, { useState, useEffect, useMemo} from 'react';
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButton = styled.img`
  background-color: #e2e2e2;
  margin: 15px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  padding: 10px;
  &:hover{
    cursor: pointer;
    background-color: #5f5f5f;
  }
`

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ShortsShow(){
  //처음 로드하고 랜덤하게 섞은 배열을 만들기
  const shuffledVideoIds = useMemo(() => shuffleArray([...shortsVideos]).map(video => video.videoId), []);
  const [videoId, setVideoId] = useState(shuffledVideoIds[0])
  const buttons = [...getButtonData]; 


  useEffect(() => {
    const handleWheel = (event) => {
      const currentIndex = shuffledVideoIds.indexOf(videoId);
      console.log(currentIndex);
      const nextIndex = event.deltaY > 0
        ? (currentIndex + 1) % shuffledVideoIds.length 
        : currentIndex - 1 >= 0
          ? currentIndex - 1
          : shuffledVideoIds.length - 1; 
      setVideoId(shuffledVideoIds[nextIndex]);
      console.log(videoId);
    };
  
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [videoId, shuffledVideoIds]); 
  

  const opts = {
    playerVars: {
      autoplay: 1, 
      modestbranding: 1, 
      controls: 0, 
      fs: 0, 
      iv_load_policy: 3, 
      showinfo: 0, 
      rel: 0, 
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
              <ButtonWrapper key={item.id}>
                <StyledButton 
                  src={item.src}
                  alt={item.alt}
                />
                {item.content}
              </ButtonWrapper>
              
            ))}
          </ButtonContainer>
        </ContentWrapper>
      </ShortsContainer>
    </Container>
    
  )
}

export default ShortsShow;