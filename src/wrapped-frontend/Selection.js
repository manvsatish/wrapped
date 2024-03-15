import React, { useState } from 'react';
import './Selection.css';
import { useNavigate } from 'react-router-dom';

function Selection() {
  return (
    <div className="selection-page">
        <div className='TopPadding'></div>
        <div className="SelectionTitle">WRAPPED</div>
        <div className="TextTitle">SELECT UP TO 6 STREAMING PLATFORMS</div>
        <div className="StreamingContainer">
            <button className='AppContainer'>SPOTIFY</button>
            <button className='AppContainer'>AMAZON MUSIC</button>
            <button className='AppContainer'>TIDAL</button>
            <button className='AppContainer'>YOUTUBE MUSIC</button>

            <button className='AppContainer'>APPLE MUSIC</button>
            <button className='AppContainer'>PANDORA</button>
            <button className='AppContainer'>DEEZER</button>
            <button className='AppContainer'>SOUNDCLOUD</button>

            <button className='AppContainer'>QOBUZ</button>
            <button className='AppContainer'>IHEART RADIO</button>
            <button className='AppContainer'>JIOSAAVN</button>
            <button className='AppContainer'>ANGHAMI</button>

            <button className='AppContainer'>8TRACKS</button>
            <button className='AppContainer'>IDAGIO</button>
            <button className='AppContainer'>BOOMPLAY</button>
            <button className='AppContainer'>LIVEONE</button>

            <button className='AppContainer'>BANDCAMP</button>
            <button className='AppContainer'>KKBOX</button>
            <button className='AppContainer'>GAANA</button>
            <button className='AppContainer'>SIRIUSXM</button>
        </div>
    </div>
  );
}

export default Selection;
