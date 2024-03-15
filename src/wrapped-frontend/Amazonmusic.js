import React from 'react';
import './AmazonMusic.css';
import { useNavigate } from 'react-router-dom';

import AmazonMusicss from './ss/amazonmusic.jpeg';

function Amazonmusic() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };

    return (
        <div className="streaming-background">
            <div className="amazonmusic-title">AMAZON MUSIC</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={AmazonMusicss} alt="amazonmusic" />
            </div>
            
        </div>
    );
}

export default Amazonmusic;