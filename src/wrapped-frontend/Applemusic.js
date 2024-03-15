import React from 'react';
import './Applemusic.css';
import { useNavigate } from 'react-router-dom';
import applemusicss from './ss/applemusic.jpeg';

function Applemusic() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };


    return (
        <div className="streaming-background">
            <div className="applemusic-title">APPLE MUSIC</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={applemusicss} alt="Applemusic" />
            </div>
            
        </div>
    );
}

export default Applemusic;