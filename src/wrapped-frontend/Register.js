import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear any existing errors
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('rePassword');

    if (!username || !email || !password || !rePassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== rePassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) {
        const result = await response.text();
        setError(result);
      } else {
        navigate('/login'); // Redirect to login on successful registration
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="RegisterTitle">WRAPPED</div>
        <input type="text" name="username" placeholder="Username" className="register-input" />
        <input type="email" name="email" placeholder="Email" className="register-input" />
        <input type="password" name="password" placeholder="Password" className="register-input" />
        <input type="password" name="rePassword" placeholder="Re-enter Password" className="register-input" />
        <button type="submit" className="register-b">REGISTER</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Register;
