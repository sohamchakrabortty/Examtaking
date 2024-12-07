import React from 'react';
import {useNavigate} from 'react-router-dom';

function StartExam() {
    const navigate = useNavigate();

  return (
    <div>
      <button 
      onClick={()=>navigate("/questionpage")}
      >Start</button>
    </div>
  )
}

export default StartExam;
