import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';

// Temporary placeholder for Favour's Homepage component
const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7FAFC] font-sans">
    <h1 className="text-4xl font-bold text-[#2A4365] mb-4">CLRLC Website Rebuild</h1>
    <p className="text-lg text-gray-600 mb-8">Homepage component pending...</p>
    <Link to="/about" className="px-6 py-3 bg-[#DD6B20] text-white font-bold rounded-lg shadow-sm hover:bg-[#b35316] transition-colors">
      View the New About Page
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
