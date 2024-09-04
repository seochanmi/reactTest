import React, { useState } from 'react';
import { Button, Form, Container, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MemberSignup = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
const navigate = useNavigate();
const handleSignup = (e) => {
e.preventDefault();
if (password !== confirmPassword) {
alert('비밀번호가 일치하지 않습니다.');
return;
}
// 회원가입 처리 로직
axios.post('/api/signup', { username, password })
.then(response => {
console.log(response.data);
navigate('/profileSetup'); // 회원가입 후 프로필 설정 페이지로 이동
})
.catch(error => {
console.error("Signup failed:", error);
});
};
const checkUsernameAvailability = () => {
// 아이디 중복 확인 로직
axios.post('/api/check-username', { username })
.then(response => {
setIsUsernameAvailable(response.data.available);
})
.catch(error => {
console.error("Username check failed:", error);
});
};
return (
    <Container>
  <h2>회원용 회원가입</h2>
  <Form onSubmit={handleSignup}>
    <Form.Group>
      <Form.Label>아이디</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button variant="outline-secondary" onClick={checkUsernameAvailability}>
          중복확인
        </Button>
      </InputGroup>
      {isUsernameAvailable === false && <div className="text-danger mt-1">아이디가 이미 사용 중입니다.</div>}
    </Form.Group>
    <Form.Group>
      <Form.Label>비밀번호</Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>비밀번호 확인</Form.Label>
      <Form.Control
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit" className="w-100">가입하기</Button>
  </Form>
  <div className="text-center mt-3">또는</div>
  <Button variant="outline-danger" className="w-100 mt-2">
    Google Register
  </Button>
</Container>
);
};
export default MemberSignup;