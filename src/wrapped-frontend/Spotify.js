import React from 'react';
import './Spotify.css';
import { useNavigate } from 'react-router-dom';
import spotifyss from './ss/spotify.png';

function Spotify() {

    const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate('/dashboard');
  };


    return (
        <div className="streaming-background">
            <div className="spotify-title">SPOTIFY</div>
            <button onClick={handleBackClick} className="back-button">
        BACK TO DASHBOARD
      </button>
        <div className="image">
                <img src={spotifyss} alt="Spotify" />
            </div>
            
        </div>
    );
}

export default Spotify;