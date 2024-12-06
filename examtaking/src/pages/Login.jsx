import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    type: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTypeChange = (type) => {
    setFormData({
      ...formData,
      type: type,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.type) {
      alert('Please select a type: Teacher or Student');
      return;
    }
    const postobj={
        "username":formData.username,
        "type":formData.type=='Teacher'?'teacher':'student',
        "pw":formData.password


    }
    console.log(postobj);
    const jsonn=JSON.stringify(postobj)
    const getdata= await fetch('http://localhost:3000/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set the correct header
        },
        body:
           jsonn
        
    }).then((data)=>{
        return data.json();
        
    }).then((data)=>{
        console.log(data);

        
    }).catch((err)=>{
        alert('no user found')
    })
    navigate("/exam");
  
    // Add your login logic here (e.g., API calls)
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Select Type:</label>
          <button
            type="button"
            onClick={() => handleTypeChange('Teacher')}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              backgroundColor: formData.type === 'Teacher' ? '#007bff' : '#f0f0f0',
              color: formData.type === 'Teacher' ? '#fff' : '#000',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Teacher
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange('Student')}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              backgroundColor: formData.type === 'Student' ? '#007bff' : '#f0f0f0',
              color: formData.type === 'Student' ? '#fff' : '#000',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Student
          </button>
        </div>
        <button
          type="submit"
          
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
