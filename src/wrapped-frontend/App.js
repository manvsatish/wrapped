import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import Selection from './Selection';
import Dashboard from './Dashboard';
import Spotify from './Spotify';
import AmazonMusic from './Amazonmusic';
import Pandora from './Pandora';
import Applemusic from './Applemusic';
import Jiosaavn from './Jiosaavn';
import Soundcloud from './Soundcloud';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/spotify" element={<Spotify />} />
        <Route path="/dashboard/amazonmusic" element={<AmazonMusic />} />
        <Route path="/dashboard/pandora" element={<Pandora />} />
        <Route path="/dashboard/Applemusic" element={<Applemusic />} />
        <Route path="/dashboard/jiosaavn" element={<Jiosaavn />} />
        <Route path="/dashboard/soundcloud" element={<Soundcloud />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
