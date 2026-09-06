import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team'; // 1. Import the Team page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F7FAFC]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} /> {/* 2. Add the Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;