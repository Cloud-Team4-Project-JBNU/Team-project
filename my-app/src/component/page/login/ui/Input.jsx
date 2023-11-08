/*eslint-disable*/
import styled from "styled-components";
import React from 'react';

const StyledInput = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

function Input(props){
  console.log("Input렌더링 시작");
  const { type, value, onChange, placeholder } = props;
  return <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder}/>
}

export default Input;