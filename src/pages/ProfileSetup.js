import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileSetup() {
    const [profileImage, setProfileImage]=useState(null);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [goal, setGoal] = useState("");
    const navigate=useNavigate();
    const handleProfileSubmit=(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('gender', gender);
    formData.append('goal', goal);
    console.log("프로필 제출:", formData);
    navigate(`/nextPage`);
   
}



    return (
        <Container>
            <h2>프로필 입력</h2>
            <Form onSubmit={handleProfileSubmit}>
            <Form.Group>
              <Form.Label>프로필 이미지 업로드</Form.Label>
            <Form.Control type="file" onChange={(e)=> setProfileImage(e.target.files[0])}
            required/>
            </Form.Group>
            <Form.Group>
            <Form.Label>키</Form.Label>
            <Form.Control type="text" value={height} onChange={(e)=> setHeight(e.target.value)}
            required/>
            </Form.Group>
            <Form.Group>
            <Form.Label>몸무게</Form.Label>
            <Form.Control type="text" value={weight} onChange={(e)=> setWeight(e.target.value)}
            required/>
            </Form.Group>
            <Form.Group>
            <Form.Label>셩별</Form.Label>
            <Form.Control as="select" value={gender} onChange={(e)=> setGender(e.target.value)}
            required>

                </Form.Control>
            </Form.Group>


            </Form>
        </Container>
    );
}

export default ProfileSetup;