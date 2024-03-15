import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';
import Selection from './Selection';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
