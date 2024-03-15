import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.css'; // Import the CSS module
import spotifyLogo from './icons/spotify.png'; // Update with actual paths
import pandoraLogo from './icons/pandora.png';
import amazonMusicLogo from './icons/amazon_music.png';
import appleMusicLogo from './icons/apple_music.png';
import jioSaavnLogo from './icons/jiosaavn.png';
import soundCloudLogo from './icons/soundcloud.png';

function Dashboard() {
  const navigate = useNavigate();

    const handleClick = (service) => {
        navigate('/dashboard/{service}')
    }; 

  return (
    
    <div className="dashboard">
    <div className="Dashboardtitle">WRAPPED</div>
      <div className="button-container">
        {/* Spotify Button */}
        <button
          onClick={() => handleClick({service: "spotify"})}
          className="button"
          style={{ backgroundImage: `url(${spotifyLogo})` }}
        />
        {/* Pandora Button */}
        <button
          onClick={() => handleClick({service: "pandora"})}
          className="button"
          style={{ backgroundImage: `url(${pandoraLogo})` }}
        />
        {/* Amazon Music Button */}
        <button
          onClick={() => handleClick({service: "amazonmusic"})}
          className="button"
          style={{ backgroundImage: `url(${amazonMusicLogo})` }}
        />
        {/* Apple Music Button */}
        <button
          onClick={() => handleClick({service: "applemusic"})}
          className="button"
          style={{ backgroundImage: `url(${appleMusicLogo})` }}
        />
        {/* JioSaavn Button */}
        <button
          onClick={() => handleClick({service: "jiosaavn"})}
          className="button"
          style={{ backgroundImage: `url(${jioSaavnLogo})` }}
        />
        {/* SoundCloud Button */}
        <button
          onClick={() => handleClick({service: "soundcloud"})}
          className="button"
          style={{ backgroundImage: `url(${soundCloudLogo})` }}
        />
      </div>
      <div className='SongContainer'></div>
    </div>
  );
}

export default Dashboard;