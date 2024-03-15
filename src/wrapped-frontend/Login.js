import React from 'react';
import './Login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Form submitted');
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="LoginTitle">WRAPPED</div>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-b">LOG IN</button>
      </form>
    </div>
  );
}

export default Login;
