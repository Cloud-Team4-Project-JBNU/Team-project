/*eslint-disable*/
import React from 'react';
import styled from "styled-components";
import SideBar from '../utilites/SideBar';
import MessageContainer from './MessageContainer/MessageContainer';
import InputField from './InputField/InputField';


function ChatPage(){
  return (
    <div>
      <SideBar/>
      <MessageContainer/>
      <InputField/>
    </div>
    
  )
}

export default ChatPage;