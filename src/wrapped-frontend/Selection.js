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
            <button className='Spotify'></button>
            <button className='AmazonMusic'></button>
            <button className='Tidal'></button>
            <button className='YoutubeMusic'></button>

            <button className='AppleMusic'></button>
            <button className='Pandora'></button>
            <button className='Deezer'></button>
            <button className='SoundCloud'></button>

            <button className='Qobuz'></button>
            <button className='IHeartRadio'></button>
            <button className='JioSaavn'></button>
            <button className='Anghami'></button>

            <button className='EightTracks'></button>
            <button className='Idagio'></button>
            <button className='Boomplay'></button>
            <button className='LiveOne'></button>

            <button className='BandCamp'></button>
            <button className='KKBox'></button>
            <button className='Gaana'></button>
            <button className='SiriusXM'></button>
        </div>
        <div className='SelectedPlatforms'>
            <div className='ChosenPlatformDisplay'></div>
            <div className='ChosenPlatformDisplay'></div>
            <div className='ChosenPlatformDisplay'></div>
            <div className='ChosenPlatformDisplay'></div>
            <div className='ChosenPlatformDisplay'></div>
            <div className='ChosenPlatformDisplay'></div>
        </div>
    </div>
  );
}

export default Selection;
