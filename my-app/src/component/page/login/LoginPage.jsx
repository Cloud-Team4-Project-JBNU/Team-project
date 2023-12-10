/*eslint-disable*/
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, loginUserThunk } from '../../../store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";

const LogoImage = styled.img`
  width: auto;
  height: 200px;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;


const LoginTitle = styled.h1`
  margin: 10px;
`

const StyledButton = styled.button`
  font-weight: bold;
  color: black;
  text-decoration: none;
  background-color: white;
  border: 0px;
  &:hover{
    animation: twinkling infinite;
  }

  @keyframes twinkling{
    0% { opacity: 1; }
    50% { opacity : 0.5; }
    100% { opacity : 1; }
  }

`


function LoginPage(){
  let user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState("");

  const checkCredentials = async (email, password) => {
    
    const body = { email, password }
    try{
      const response = await axios.post('/login_database_endpoint_url', body);
      //백엔드에서 성공 사용자에 대한 데이터를 돌려줘야함. 아이디랑 이름을 돌려주기
      if (response.status === 200) {
        return response.data;
      }
    }catch(error){
      console.log("Login error: ", error);
      alert("loginerror");
      return null;
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    
    const userInfo = await checkCredentials(id, password);
    if (userInfo){
      setMsg("로그인 성공!")
      alert(msg);
      //데이터베이스에서 회원가입한 사람 이름을 돌려줘야함. 
      dispatch(loginUserThunk(userInfo)); // 로그인 성공하면 이메일, 이름을 로컬스토리지에 저장
      navigate('/home'); 
      // 로그인 성공하면 리덕스 상태 업데이트 후 home으로 이동
    }else{
      setMsg("로그인 정보가 올바르지 않습니다.");
      alert(msg);
      setId('');
      setPassword('');
    }
  }
  
  return (
    <LoginContainer>
      <LogoImage src="../../images/youtube.png" alt="loginImage"/>
      <LoginTitle>로그인하기</LoginTitle>
      <LoginForm onSubmit={handleLogin}>
        <Input 
          type="email"
          value={id}
          onChange={(e)=>setId(e.target.value)}
          placeholder="아이디를 입력하세요" 
        />
        <Input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <Button type="submit">로그인</Button>
      </LoginForm >
      <p>
        계정이 없으신가요? <StyledButton onClick={()=>{navigate('/signup')}}>회원가입하기</StyledButton>
      </p>
      {(msg.length> 5) ? msg: ''}
      <button onClick={()=>{navigate("/home")}}>temporary</button>
    </LoginContainer>
  );
}

export default LoginPage;
//로그인을 누르면 로컬 스토리지에 유저정보를 넣어놓고 그 유저에 대한 정보를 넣고 쓰고 그런식으로 
//구현해야할듯. 이후 내용은 추가구현 