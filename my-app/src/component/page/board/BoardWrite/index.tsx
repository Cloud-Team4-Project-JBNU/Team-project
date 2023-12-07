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
            유튜브
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
