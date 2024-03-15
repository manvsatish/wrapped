import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="front-page">
      <div className="title">WRAPPED</div>
      <div className="buttons">
        <button className="login-button">LOGIN</button>
        <button className="register-button">REGISTER</button>
      </div>
    </div>
  );
}

export default HomePage;
