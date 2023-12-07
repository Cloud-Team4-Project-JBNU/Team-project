import React from 'react'
import "./style.css"
import { FavoriteListItem } from '../../../../types/interface'

interface Props{
  favoriteListItem: FavoriteListItem;
}

export default function FavoriteItem({ favoriteListItem } : Props) {

  const { profileImage, nickname } = favoriteListItem;

  return (
    <div className='favorite-list-item'>
      <div className='favorite-list-item-profile-box'>
        <div className='favorite=list-item-profile-image' style={{backgroundImage: `url(${profileImage ? profileImage : '../../../images/userInfo.png'})`}}></div>
      </div>
      <div className='favorite=list-item-nickname'>{nickname}</div>
    </div>
  )
}