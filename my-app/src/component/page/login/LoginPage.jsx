/*eslint-disable*/
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import A from "./ui/A";
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

function LoginPage(){
  let user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const checkCredentials = async (email, password) => {
    //API 호출 시뮬레이션을 위한 타임아웃 사용
    const body = { email, password }
    try{
      const response = await axios.post('/login_database_endpoint_url', body);
      //백엔드에서 성공 응답을 받으면 true를 리턴하게 함.
      if (response.status === 200) {
        return true;
      }
    }catch(error){
      console.log("Login error: ", error);
      alert("loginerror");
      return false;
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);
    
    const isAuthenticated = await checkCredentials(id, password);
    if (isAuthenticated){
      setMsg("로그인 성공!")
      alert(msg);
      dispatch(loginUser({ name: user.name, id: user.email })); 
      navigate('/home'); 
      // 로그인 성공하면 리덕스 상태 업데이트 후 home으로 이동
    }else{
      setMsg("로그인 정보가 올바르지 않습니다.");
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
        계정이 없으신가요? <A href="/signup" content="회원가입하기"></A>
      </p>
      {(msg.length> 5) ? msg: ''}
      <button onClick={()=>{navigate("/home")}}>temporary</button>
    </LoginContainer>
  );
}

export default LoginPage;
//로그인을 누르면 로컬 스토리지에 유저정보를 넣어놓고 그 유저에 대한 정보를 넣고 쓰고 그런식으로 
//구현해야할듯. 이후 내용은 추가구현 