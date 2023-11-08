/*eslint-disable*/
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

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


  useEffect(()=> {
    if (msg){
      setTimeout(()=>{
        setMsg("");
        setLoading(false);
      }, 1500)
      console.log("깃허브입문");
    }
  }, [msg])
 
  const LoginFunc = (e) => {
    e.preventDefault();
    if (!id){
      return alert("ID를 입력하세요!");
    }
    else if (!password){
      return alert("Password를 입력하세요!");
    }
    else{
      let body = {
        id,
        password
      };

      axios.post("Endpoint", body)
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200){
          console.log("로그인");
          dispatch(loginUser(res.data.userInfo));
          setMsg("");
        }
        if(res.data.code === 400) {
          setMsg("ID, Password가 비어있습니다.");
        }
        if(res.data.code === 401) {
          setMsg("존재하지 않는 ID입니다.");
        }
        if(res.data.code === 402) {
          setMsg("Password가 틀립니다.");
        }
      });

    }
    setLoading(true);
  }

  return (
    <LoginContainer>
      <img src="https://res.heraldm.com/content/image/2014/03/09/20140309000223_0.jpg" alt="loginImage"/>
      <h1>로그인하기</h1>
      <LoginForm>
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
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
      <p>
        계정이 없으신가요? <button onClick={()=>{navigate("/signup")}}>회원가입하기</button>
      </p>
      {msg}
    </LoginContainer>
  );
}

export default LoginPage;