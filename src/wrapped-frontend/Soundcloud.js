import React from 'react';
import './Soundcloud.css';
import { useNavigate } from 'react-router-dom';
import Soundcloudss from './ss/soundcloud.jpeg';

function Soundcloud() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };


    return (
        <div className="streaming-background">
            <div className="soundcloud-title">SOUNDCLOUD</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={Soundcloudss} alt="Soundcloud" />
            </div>
            
        </div>
    );
}

export default Soundcloud;