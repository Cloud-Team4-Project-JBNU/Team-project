/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SideBar from './ui/SideBar';

function UserMenu(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <SideBar/>
      기능구현 어떻게 할지 정해봐야함.
    </div>
  )
}

export default UserMenu;