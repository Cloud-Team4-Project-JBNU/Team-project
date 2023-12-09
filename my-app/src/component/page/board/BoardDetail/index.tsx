/*eslint-disable*/
import React, { useState, useRef, ChangeEvent, useEffect } from 'react'
import "./style.css";
import styled from 'styled-components';
import YouTube from "react-youtube";
import { useNavigate } from 'react-router-dom';

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

export default function BoardDetail() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<string>("");
  const [videoType, setVideoType] = useState<string>(""); // 백엔드에서 데이터타입에 따라 유튜브 컴포넌트 크기 조절

  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [commentAreaHeight, setcommentAreaHeight] = useState<string>("auto");
  const commentAreaRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();



  const handleCommentAreaChange =(event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);

    setcommentAreaHeight("auto");
    if (commentAreaRef.current) {
      setcommentAreaHeight(`${commentAreaRef.current.scrollHeight}px`);
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
              />
              ) : (
                <StyledYoutube videoId={uploadedVideo} opts={opts} />
              )}
              {/* 비디오 작성할때 적어둔 videoId와 연관된 비디오 */}
            </VideoWrapper>
          </div>
          <div className='divider'></div>
          <div className='board-write-content-box'>
            <textarea  
              ref={commentAreaRef}
              className='board-write-content-textarea'
              // value={text} 이건 백엔드에서 받아온 본문글 써주기
              style={{height: commentAreaHeight}}     
            />

            게시물 작성할때 적은 글
          </div>
        </div>
        
        <div className='comment-write-content-box'>
          <textarea  
            ref={commentAreaRef}
            className='comment-write-content-textarea'
            value={comment}
            style={{height: commentAreaHeight}}
            placeholder='댓글을 작성해주세요!'
            onChange={handleCommentAreaChange}
          />

        </div>
        <ButtonContainer>
          <StyledButton onClick={()=>{navigate('board')}}>댓글 작성하기</StyledButton>
        </ButtonContainer>          
      </div>
      
    </div>
  )
}
