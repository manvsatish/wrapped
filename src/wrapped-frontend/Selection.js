import React, { useState } from 'react';
import './Selection.css';

// Assuming you have logos stored in your public folder or somewhere accessible
const logoPaths = {
  Spotify: './img/spotifylogo.png',
  AmazonMusic: './img/amazonmusiclogo.png',
  Tidal: './img/tidallogo.png',
  YoutubeMusic: './img/youtubemusiclogo.png',
  AppleMusic: './img/ituneslogo.png',
  Pandora: './img/pandoralogo.png',
  Deezer: './img/deezerlogo.png',
  SoundCloud: './img/soundcloudlogo.png',
  Qobuz: './img/qobuzlogo.png',
  IHeartRadio: './img/iheartradiologo.png',
  JioSaavn: './img/jiosaavnlogo.png',
  Anghami: './img/anghamilogo.png',
  EightTracks: './img/8trackslogo.png',
  Idagio: './img/idagiologo.png',
  Boomplay: './img/boomplaylogo.png',
  LiveOne: './img/liveonelogo.png',
  BandCamp: './img/bandcamplogo.png',
  KKBox: './img/kkboxlogo.png',
  Gaana: './img/gaanalogo.png',
  SiriusXM: './img/siriusxmlogo.png',
};

function Selection() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handleSelectPlatform = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      // Remove the platform if it's already selected
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else if (selectedPlatforms.length < 6) {
      // Add the platform if not already selected and less than 6 are selected
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  return (
    <div className="selection-page">
      <div className='TopPadding'></div>
      <div className="SelectionTitle">WRAPPED</div>
      <div className="TextTitle">SELECT UP TO 6 STREAMING PLATFORMS</div>
      <div className="StreamingContainer">
        {Object.keys(logoPaths).map(platform => (
          <button key={platform} className={platform} onClick={() => handleSelectPlatform(platform)}></button>
        ))}
      </div>

      <div className='SelectedPlatforms'>
        {selectedPlatforms.map(platform => (
          <div key={platform} className={`${platform}Display`}></div>
        ))}
      </div>
    </div>
  );
}

export default Selection;
