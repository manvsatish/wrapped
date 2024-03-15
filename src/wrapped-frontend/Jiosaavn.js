import React from 'react';
import './Jiosaavn.css';
import { useNavigate } from 'react-router-dom';
import Jiosaavnss from './ss/jiosaavn.jpeg';

function Jiosaavn() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };


    return (
        <div className="streaming-background">
            <div className="jiosaavn-title">JIOSAAVN</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={Jiosaavnss} alt="Jiosaavn" />
            </div>
            
        </div>
    );
}

export default Jiosaavn;