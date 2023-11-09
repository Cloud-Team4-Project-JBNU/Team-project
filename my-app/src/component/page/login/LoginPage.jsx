/*eslint-disable*/
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import UserMenu from "../utilites/UserMenu";

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

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const LoginButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

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
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        //API호출
        //예시
        const users = [
          { email : 'user@example.com', password : 'password123', name: 'John Doe' }
        ];

        const user = users.find(u => u.email === email && u.password === password)
        if(user){
          resolve(user);
        }else{
          reject('자격 증명이 일치하지 않습니다.')
        }
      }, 1000);
    });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const user = await checkCredentials(id, password)
      dispatch(loginUser({ name: user.name, id: user.email}))
      navigate('/util');
    }catch(error){
      setMsg(error);
    }
    setLoading(false);
  }
  
  return (
    <LoginContainer>
      <img src="https://res.heraldm.com/content/image/2014/03/09/20140309000223_0.jpg" alt="loginImage"/>
      <h1>로그인하기</h1>
      <LoginForm onSubmit={handleLogin}>
        <Input 
          type="text"
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
        계정이 없으신가요? <button onClick={()=>{navigate("/signup")}}>회원가입하기</button>
      </p>
      {msg}
    </LoginContainer>
  );
}

export default LoginPage;
//로그인을 누르면 로컬 스토리지에 유저정보를 넣어놓고 그 유저에 대한 정보를 넣고 쓰고 그런식으로 
//구현해야할듯. 이후 내용은 추가구현 