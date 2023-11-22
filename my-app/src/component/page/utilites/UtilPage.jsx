/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SideBar from './ui/SideBar';

import YouTube from 'react-youtube';
import YoutubeUI from './ui/YoutubeUI';

function UtilPage(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hover, setHover] = useState(true);

  return (
    <div>
      <SideBar/>
      기능구현 어떻게 할지 정해봐야함.
      <YoutubeUI/>
    </div>
  )
}

export default UtilPage;