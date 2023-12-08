/*eslint-disable*/
import React, { useState, useRef, ChangeEvent } from 'react'
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

export default function BoardWrite() {
  const [isUploaded, setIsUploaded] = useState(false);

  const [text, setText] = useState<string>("");
  const [textareaHeight, setTextareaHeight] = useState<string>("auto");
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const handleTextareaChange =(event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);

    setTextareaHeight("auto");
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
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

  useState(()=> {
    console.log(isUploaded);
  })

  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input className='board-write-title-box-input' type='text' placeholder='제목을 작성해주세요'/>
          </div>
          <div className='divider'></div>
          <div className='youtube-add-button'>
            <VideoWrapper>
              {!isUploaded ? <img className='youtube-add-button-icon' alt="youtube" src='../../../images/youtube.png'/> : <div>유튜브 보여주기</div>}

            </VideoWrapper>
            
            
            <div className='youtube-add-text'>버튼을 눌러 유튜브 영상을 업로드하세요!</div>
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
        <div>게시물 업로드 버튼</div>
      </div>
      
    </div>
  )
}
