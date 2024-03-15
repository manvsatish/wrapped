import React from 'react';
import './Pandora.css';
import { useNavigate } from 'react-router-dom';
import Pandorass from './ss/pandora.jpeg';

function Pandora() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };


    return (
        <div className="streaming-background">
            <div className="pandora-title">PANDORA</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={Pandorass} alt="Pandora" />
            </div>
            
        </div>
    );
}

export default Pandora;