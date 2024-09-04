
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
    console.log(username, password);
    navigate(`/profileSetup`);
    };
    const handleGooleLogin = ()=>{
        console.log("Google로 로그인");
    }

    return (

        <Container>
         <h2>로그인</h2>
         <Form onSubmit={handleLogin}>
            <Form.Group>
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" value={username} onChange={(e)=>setUsername(e.target.value)}
                    required/> 
            </Form.Group>
            <Form.Group>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
                required/>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">로그인</Button>
        </Form>  
        <div className="text-center mt-3">또는</div>
        <Button variant="outline-danger" className="w-100 mt-2" onClick={handleGooleLogin}>Start with Google</Button> 
        <div className="d-flex justify-content-between mt-4">
        <Button variant="link" onClick={()=>navigate(`/memberSignup`)}>회원용 회원가입</Button>
        <Button variant="link" onClick={()=>navigate(`/trainerSignup`)}>트레이너용 회원가입</Button>
            </div>
        </Container>
    );
}



export default Login;