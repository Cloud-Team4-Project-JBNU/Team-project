/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import SideBar from './ui/SideBar';
import ShortsShow from './ui/Shorts/ShortsShow';

function ShortsPage(){

  return (
    <div>
      <SideBar/>
      <ShortsShow/>
    </div>
  )
}

export default ShortsPage;