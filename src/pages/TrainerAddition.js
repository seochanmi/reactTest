import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TrainerAddition() {
    const [trainerId, setTrainerId]=useState('');
    const navigate=useNavigate();
    const handleTrainerIdSubmit=(e)=>{
        e.preventDefault();
        console.log("트레이너 ID:", trainerId);
        navigate(`/`);
    };


    return (
        <div>
            
        </div>
    );
}

export default TrainerAddition;