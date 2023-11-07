/*eslint-disable*/
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../../store/store';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignupContainer = styled.div`
  /* 스타일 정의 */
`;

const SignupForm = styled.form`
  /* 스타일 정의 */
`;

const Input = styled.input`
  /* 스타일 정의 */
`;

const SignupButton = styled.button`
  /* 스타일 정의 */
`;

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력값 검증 로직
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 서버에 회원가입 요청을 보내는 로직
    const body = { name, email, password };
    axios.post('/signup_endpoint', body)
      .then(response => {
        // 성공 처리 로직
      })
      .catch(error => {
        // 에러 처리 로직
      });
  };

  return (
    <SignupContainer>
      <h1>회원가입하기</h1>
      <SignupForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <SignupButton type="submit">회원가입</SignupButton>
      </SignupForm>
      <p>
        이미 계정이 있으신가요? <a onClick={()=>{navigate("/login")}}>로그인하기</a>
      </p>
    </SignupContainer>
  );
}

export default SignupPage;
