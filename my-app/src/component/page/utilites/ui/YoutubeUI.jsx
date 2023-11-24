import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";
import styled from "styled-components";
import axios from 'axios';
import videosData from "./youtubeData.js"

const Container = styled.div`
  gap: 20px;
  @media (max-width: 1680px){
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  
  @media (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

function YoutubeUI() {
  const [videos, setVideos] = useState([...videosData]);
  // useEffect(() => {
  //   //백엔드에서 데이터 받아오기
  //   axios.get('YOUR_BACKEND_API_URL')
  //     .then((res) => {
  //       setVideos(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container>
      {videos.map((video) => (
        <YouTube key={video.videoId} videoId={video.videoId} />
      ))}
    </Container>
  );
}

export default YoutubeUI;
