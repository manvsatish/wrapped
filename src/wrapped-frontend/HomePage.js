import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    let navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleRegisterClick = () => {
        navigate('/register');
    }

    return (
        <div className="front-page">
        <div className="title">WRAPPED</div>
        <div className="buttons">
            <button className="login-button" onClick={handleLoginClick}>LOGIN</button>
            <button className="register-button" onClick={handleRegisterClick}>REGISTER</button>
        </div>
        </div>
    );
}

export default HomePage;
