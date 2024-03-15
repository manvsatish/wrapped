import React from 'react';
import './Register.css';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Form submitted');
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="RegisterTitle">WRAPPED</div>
        <input type="text" placeholder="Username" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />
        <input type="password" placeholder="Re-enter Password" className="register-input" />
        <button type="submit" className="register-b">LOG IN</button>
      </form>
    </div>
  );
}

export default Register;
