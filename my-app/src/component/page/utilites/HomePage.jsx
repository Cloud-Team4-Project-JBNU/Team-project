/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SideBar from './ui/SideBar';
import HomeYoutubeUI from './ui/HomeYoutubeUI';
import HomeShortsUI from './ui/HomeShortsUI';

function HomePage(){

  return (
    <div>
      <SideBar/>
      <HomeYoutubeUI/>
      <HomeShortsUI/>
    </div>
  )
}

export default HomePage;