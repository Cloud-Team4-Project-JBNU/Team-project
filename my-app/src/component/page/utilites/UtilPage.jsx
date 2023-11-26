/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SideBar from './ui/SideBar';

import YouTube from 'react-youtube';
import YoutubeUI from './ui/YoutubeUI';
import ShortsUI from './ui/ShortsUI';

function UtilPage(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hover, setHover] = useState(true);

  return (
    <div>
      <SideBar/>
      <YoutubeUI/>
      <ShortsUI/>
    </div>
  )
}

export default UtilPage;