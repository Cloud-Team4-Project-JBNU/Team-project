/*eslint-disable*/
import React, { useState, useRef, ChangeEvent, useEffect } from 'react'
import "./style.css";
import styled from 'styled-components';
import YouTube from "react-youtube";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { log } from 'console';

interface SharedVideoState {
  sharedVideo: {
    videoId: string;
    videoType: string;
  }
  
}

interface RootState{
  userLogin:{
    isLogin: boolean | null;
  }
}

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

`

const StyledYoutube = styled(YouTube)`
  display: block; 
  width: 100%; 
  height: 0; 
  padding-top: 56.25%; 
  position: relative; 

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
  }
`

const StyledShorts = styled(YouTube)`
  display: block;
  position: relative;
 

  iframe {
    width: 360px;
    height: 640px;

  }
`


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

const StyledButton = styled.button`
  background-color: white;
  font-size: 20px;
  border: 1px solid grey;
  margin: 10px;
`

export default function BoardWrite() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [boardVideoType, setBoardVideoType] = useState<string>("");

  const [boardVideoId, setBoardVideoId] = useState<string>("");
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [boardText, setBoardText] = useState<string>("");

  const [textareaHeight, setTextareaHeight] = useState<string>("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();
  const sharedVideo = useSelector((state: SharedVideoState) => state.sharedVideo);

  function extractYoutubeVideoId(url : string) : string| null{
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get('v');
  }

  function extractShortsVideoId(url : string): string | null{
    const shortsIdMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return shortsIdMatch ? shortsIdMatch[1] : null;
  }

  const handleYoutubeIconClick = () => {
    const boardVideoType = prompt("영상 타입을 선택해주세요 ('long' 또는 'shorts'):");

    if (boardVideoType === "long"){
      const link: string | null = prompt("Long Youtube 비디오 링크를 입력해주세요")
      if (link){
        const videoId: string | null = extractYoutubeVideoId(link);
        if (videoId) {
          setBoardVideoId(videoId);
          setIsUploaded(true);
          setBoardVideoType("long");
        } else {
          alert("유효하지 않은 YouTube 링크입니다.");
        }
      }
    }else if (boardVideoType === "shorts"){
      const link: string | null = prompt("YouTube Shorts 링크를 입력해주세요: ");
      if (link){
        const shortsId: string | null = extractShortsVideoId(link);
        if (shortsId){
          setBoardVideoId(shortsId);
          setIsUploaded(true);
          setBoardVideoType("shorts");
        }
        else{
          alert("유효하지 않은 Youtube Shorts 링크입니다.");
        }
      }
    }else{
      alert("유효하지 않은 영상 타입입니다.");
    }
    
  };
  

  const handleTextareaChange =(event: ChangeEvent<HTMLTextAreaElement>) => {
    setBoardText(event.target.value);

    setTextareaHeight("auto");
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }

  const handleReset = () => {
    setIsUploaded(false);
    setBoardVideoId("");
    setBoardVideoType("");
    setBoardText("");
    setBoardTitle("");
    setTextareaHeight("auto")
  }


  const handleSubmit = () => {
    const boardDate = new Date().toISOString().substring(0, 10);
    const boardVideoInfo = boardVideoId + ", " +  boardVideoType;
    const body = { boardTitle, boardVideoInfo, boardText, boardDate, };
    
    axios.post('http://localhost:4002/api/board', body)
      .then(response => {
        alert('게시글이 등록되었습니다.');
        navigate('/board');
      }).catch(error => {
        console.log(body);

        alert("데이터 전송이 실패했습니다.");
      })
  }

  const opts = {
    playerVars: {
      autoplay: 0, 
      modestbranding: 1, 
      controls: 0, 
      fs: 0, 
      iv_load_policy: 3, 
      showinfo: 0, 
      rel: 0, 
    },
  };

  useEffect(()=> {
    const sharedVideoId = sharedVideo.videoId;
    const sharedVideoType = sharedVideo.videoType;
    console.log(sharedVideoId, " ", sharedVideoType);
    if (sharedVideoId.length > 0){
      setIsUploaded(true);
      setBoardVideoId(sharedVideoId);
      setBoardVideoType(sharedVideoType);
    }
  }, [])

  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input className='board-write-title-box-input' type='text' placeholder='제목을 작성해주세요' value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)}/>
          </div>
          <div className='divider'></div>
          <div className='youtube-add-button'>
            <VideoWrapper>
              {!isUploaded ? (
              <img
                className='youtube-add-button-icon'
                alt="youtube"
                src='../../../images/youtube.png'
                onClick={handleYoutubeIconClick}
              />
              ) : boardVideoType === "long" ? (
                <StyledYoutube videoId={boardVideoId} opts={opts} />
              ) : boardVideoType === "shorts" ? (
                <StyledShorts videoId={boardVideoId} opts={opts}/>
              ): null}
            </VideoWrapper>
            
            {!isUploaded? <div className='youtube-add-text'>버튼을 눌러 유튜브 영상을 업로드하세요!</div> : null}
            
          </div>
          <div className='divider'></div>
          <div className='board-write-content-box'>
            <textarea  
              ref={textareaRef}
              className='board-write-content-textarea'
              placeholder='본문을 작성해주세요'
              value={boardText}
              onChange={handleTextareaChange}
              style={{height: textareaHeight}}     
            />
          </div>
        </div>
       
        <ButtonContainer>
          <StyledButton onClick={handleSubmit}>게시물 업로드 하기</StyledButton>
          <StyledButton onClick={handleReset}>다시 작성하기</StyledButton>
        </ButtonContainer>
            
      </div>
      
    </div>
  )
}
