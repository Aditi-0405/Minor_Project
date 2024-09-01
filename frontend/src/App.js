import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SOOPPage from './pages/SOOPPage';
import MOOPPage from './pages/MOOPPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soop" element={<SOOPPage />} />
        <Route path="/moop" element={<MOOPPage />} />
      </Routes>
    </Router>
  );
}

export default App;
