import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SOOPPage from './pages/SOOPPage';
import MOOPPage from './pages/MOOPPage';
import FunctionsPage from './pages/FunctionsPage';
import CustomFunctionsPage from './pages/CustomFunctionPage';
import AlgorithmsPage from './pages/AlgorithmsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soop" element={<SOOPPage />} />
        <Route path="/moop" element={<MOOPPage />} />
        <Route path="/functions" element={<FunctionsPage />} />
        <Route path="/functions/custom" element={<CustomFunctionsPage />} />
        <Route path="/algorithms" element={<AlgorithmsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
