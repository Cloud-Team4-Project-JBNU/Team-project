/*eslint-disable*/
import React, { useState, useRef, ChangeEvent, useEffect } from 'react'
import "./style.css";
import styled from 'styled-components';
import YouTube from "react-youtube";
import { useNavigate } from 'react-router-dom';
import { commentListMock } from '../../../../mocks';
import CommentItem from '../CommentListItem';
import { CommentListItem } from '../../../../types/interface';
import { useSelector } from 'react-redux';
import axios from 'axios';

interface RootState{
  userLogin:{
    isLogin: boolean | null;
  }
}

interface BoardData {
  title: string;
  text: string;
  videoId: string;
  date: string;
  writer: string;
  videoType: string;
}

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
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

export default function BoardDetail() {
  const isLogin = useSelector((state: RootState) => state.userLogin.isLogin);
  const navigate = useNavigate();

  const [boardData, setBoardData] = useState<BoardData>({
    title: "tmp",
    text: "tmp",
    videoId: "",
    date: "tmp",
    writer: "tmp",
    videoType: "",
  })

  useEffect(()=> {
    const fetchBoardData =async () => {
      try{
        const response = await axios.get('boardData_endpoint_url');
        //받아온 데이터 저장
        setBoardData({
          title: response.data.boardTitle,
          text: response.data.boardText,
          videoId: response.data.boardVideoId,
          date: response.data.boardDate,
          writer: response.data.boardWriter,
          videoType: response.data.boardVideoType
        })
      }catch(error){
        console.log("데이터 받아오기 실패");
        
        alert("데이터 받아오기에 실패했습니다.");
      };
    }
    fetchBoardData();
    
  }, [])

  const [commentText, setCommentText] = useState<string>("");
  const [commentAreaHeight, setcommentAreaHeight] = useState<string>("auto");
  const commentAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleCommentAreaChange =(event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.target.value);
    setcommentAreaHeight("auto");
    if (commentAreaRef.current) {
      setcommentAreaHeight(`${commentAreaRef.current.scrollHeight}px`);
    }
  }

  const handleCommentWriteButton = () => {
    const commentDate = new Date().toISOString().substring(0, 10);
    //로컬 스토리지에 저장된 이름정보 보내주기
    const StoredUserInfo = localStorage.getItem('userInfo');
    const userInfo = StoredUserInfo ? JSON.parse(StoredUserInfo) : {};
    const commentWriter = userInfo.name;

    const body = {commentWriter, commentText, commentDate};
    axios.post('commentApiEndPointURL - comment', body)
      .then(response => {
        alert("댓글이 등록되었습니다.")
      }).catch(error => {
        alert("댓글 데이터 전송이 실패했습니다.");
      })
  }

  const opts = {
    playerVars: {
      autoplay: 0, // Disable autoplay to prevent the video from playing on load
      modestbranding: 1, // Hide the Youtube logo as much as possible
      controls: 0, // Hide all video controls
      fs: 0, // Hide the full screen button
      iv_load_policy: 3, // Hide video annotations by default
      showinfo: 0, // Hide video title and uploader before video starts playing
      rel: 0, // Do not show related videos when playback ends
    },
  };

  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <div className='board-detail-box'>
          <div className='board-detail-title-box'>
            <div className='board-detail-title'>{boardData.title}</div>
            <div className='board-detail-writer-box'>
              <div className='board-detail-writer-box-writer-info'>{boardData.writer} · {boardData.date} </div>
            </div>
          </div>
          <div className='divider'></div>
          <div className='youtube-add-button'>
            <VideoWrapper>
              {boardData.videoType === '' && (
                <img
                  className='youtube-add-button-icon'
                  alt="youtube"
                  src='../../../images/youtube.png'
                />
              )}
              {boardData.videoType === 'long' && (
                <StyledYoutube videoId={boardData.videoId} opts={opts} />
              )}
              {boardData.videoType === 'shorts' && (
                <StyledShorts videoId={boardData.videoId} opts={opts} />
              )}
            </VideoWrapper>
          </div>
          <div className='divider'></div>
          <div className='board-detail-content-box'>
            <div className='board-detail-content-textarea'>{boardData.text}</div>
          </div>
          <div className='divider'></div>
        </div>
        
        <CommentContainer>
          {commentListMock.map((commentListItem: CommentListItem, index: number) => (
            <CommentItem key={index} commentListItem={commentListItem}/>
          ))} 
        </CommentContainer>
        <div className='divider'></div> 

        <div className='comment-write-content-box'>
          <textarea  
            ref={commentAreaRef}
            className='comment-write-content-textarea'
            value={commentText}
            style={{height: commentAreaHeight}}
            placeholder='댓글을 작성해주세요!'
            onChange={handleCommentAreaChange}
          />

        </div>
        
        <ButtonContainer>
          <StyledButton onClick={handleCommentWriteButton}>댓글 작성하기</StyledButton>
        </ButtonContainer>
        {/* 작성 후 상태 업데이트 하는 로직 */}
      </div>
      
    </div>
  )
}

