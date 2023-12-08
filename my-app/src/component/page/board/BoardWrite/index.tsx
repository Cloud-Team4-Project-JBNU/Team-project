import React from 'react'
import "./style.css";

export default function BoardWrite() {
  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input className='board-write-title-input' type='text' placeholder='제목을 작성해주세요'/>
          </div>
          <div className='divider'></div>
          <div className='board-write-youtube-box'>
            {/* 유튜브 컴포넌트 담는 부분 */}
            유튜브 영상 올라갈 부분 영상 링크 넣으면 videoID 추출해서 보여주기
            만약 쇼츠에서 비디오 게시물 작성하기 눌렀으면 거기서 비디오 아이디 복사해서 리덕스로 관리해보기
            <div className='icon-button remove'></div>
          </div>
          <div className='board-write-content-box'>
            <textarea className='board-write-content-textarea' placeholder='본문을 작성해주세요'/>
            <div className='youtube-add-button'>
              {/* 유튜브 버튼 누르면 게시글에 유튜브 재생컴포넌트 생성 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
