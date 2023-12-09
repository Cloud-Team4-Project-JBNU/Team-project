/*eslint-disable*/
import React, { useState, useRef, ChangeEvent, useEffect } from 'react'
import "./style.css";
import styled from 'styled-components';
import YouTube from "react-youtube";

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  //추가 css속성 넣기 
`

const StyledYoutube = styled(YouTube)`

`

const StyledShorts = styled(YouTube)`
  
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
  const [uploadedVideo, setUploadedVideo] = useState<string>("");
  const [videoType, setVideoType] = useState<string>("");

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [textareaHeight, setTextareaHeight] = useState<string>("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function extractYoutubeVideoId(url : string) : string| null{
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get('v');
    
  }

  function extractShortsVideoId(url : string): string | null{
    const shortsIdMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return shortsIdMatch ? shortsIdMatch[1] : null;
  }

  const handleYoutubeIconClick = () => {
    const videoType = prompt("영상 타입을 선택해주세요 ('long' 또는 'shorts'):");

    if (videoType === "long"){
      const link: string | null = prompt("Long Youtube 비디오 링크를 입력해주세요")
      if (link){
        const videoId: string | null = extractYoutubeVideoId(link);
        if (videoId) {
          setUploadedVideo(videoId);
          setIsUploaded(true);
          setVideoType("long");
        } else {
          alert("유효하지 않은 YouTube 링크입니다.");
        }
      }
    }else if (videoType === "shorts"){
      const link: string | null = prompt("YouTube Shorts 링크를 입력해주세요: ");
      if (link){
        const shortsId: string | null = extractShortsVideoId(link);
        if (shortsId){
          setUploadedVideo(shortsId);
          setIsUploaded(true);
          setVideoType("shorts");
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
    setText(event.target.value);

    setTextareaHeight("auto");
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }

  const handleReset = () => {
    setIsUploaded(false);
    setUploadedVideo("");
    setVideoType("");
    setText("");
    setTextareaHeight("auto")
  }

  const handleSubmit = () => {
    //게시물 업로드 버튼 구현
  }
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
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input className='board-write-title-box-input' type='text' placeholder='제목을 작성해주세요' value={title} onChange={(e) => setTitle(e.target.value)}/>
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
              ) : (
                <StyledYoutube videoId={uploadedVideo} opts={opts} />
              )}
            </VideoWrapper>
            
            {!isUploaded? <div className='youtube-add-text'>버튼을 눌러 유튜브 영상을 업로드하세요!</div> : null}
            
          </div>
          <div className='divider'></div>
          <div className='board-write-content-box'>
            <textarea  
              ref={textareaRef}
              className='board-write-content-textarea'
              placeholder='본문을 작성해주세요'
              value={text}
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
