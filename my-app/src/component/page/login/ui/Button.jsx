/*eslint-disable*/
import styled from "styled-components";
import React from 'react';

const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

function Button({type, children}){
  
  return <SubmitButton type={type}>{children}</SubmitButton>
}

export default Button;