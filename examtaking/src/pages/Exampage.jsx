import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setexamids, setquestionarr } from '../../slice/examslice';
import { useNavigate } from 'react-router-dom';

export default function Exampage() {
    const dispatch=useDispatch();
  const [examid, setexamid] = useState('');
 const navigate=useNavigate();
  async function getallquestions(id){
    const ids={"examid":id}
    const post=JSON.stringify(ids);
    
   const get=await fetch('http://localhost:3000/getexam/questions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set the correct header
        },
        body:post,
    }

        
    )
    .then((data)=>{
        return data.json()
    }).then((data)=>{
        console.log(data.questions);
        localStorage.setItem('questionarr',JSON.stringify(data.questions) )
        dispatch(setexamids({examid:data.id}));
        dispatch(setquestionarr({questionarr:data.questions}))
        navigate('/startexam')
        
      
        
    }).catch((e)=>{
        console.log(e);
        
    })
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f9',
      height: '100vh',
    },
    label: {
      marginBottom: '10px',
      fontSize: '16px',
    },
    input: {
      padding: '8px',
      fontSize: '14px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '250px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
         <button style={styles.button}>All exams</button>
      <label style={styles.label}>Enter your Exam ID:</label>
      <input
        style={styles.input}
        type="text"
        value={examid}
        onChange={(e) => setexamid(e.target.value)}
      />
      <button 
      onClick={()=>getallquestions(examid)}
      
      >Enter exam</button>
    </div>
  );
}
