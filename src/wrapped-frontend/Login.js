import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const result = await response.text();
        setError(result);
      } else {
        console.log('Login successful!');
        navigate('/selection')
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="LoginTitle">WRAPPED</div>
        <input type="text" name="username" placeholder="Username" className="login-input" />
        <input type="password" name="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-b">LOG IN</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
