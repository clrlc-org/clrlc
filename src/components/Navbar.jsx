import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "text-[#1B7586] border-b-2 border-[#1B7586]" : "text-gray-600 hover:text-[#1B7586] transition-colors";
  };

  // Custom check for the Community dropdown to stay active if any sub-page is selected
  const isCommunityActive = location.pathname.includes('/community') || location.pathname.includes('/gallery') || location.pathname.includes('/partners');

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="CLRLC Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            
            {/* Standard Links (No Dropdowns) */}
            <Link to="/about" className={`pb-1 ${isActive('/about')}`}>About</Link>
            <Link to="/events" className={`pb-1 ${isActive('/events')}`}>Events</Link>
            <Link to="/research" className={`pb-1 ${isActive('/research')}`}>Research</Link>
            
            {/* Community Dropdown */}
            <div className="relative group cursor-pointer flex items-center h-20"> 
              
              <div className={`flex items-center gap-1 pb-1 transition-colors ${isCommunityActive ? 'text-[#1B7586] border-b-2 border-[#1B7586]' : 'text-gray-600 group-hover:text-[#1B7586]'}`}>
                Community
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              
              {/* The Dropdown Menu Box */}
              <div className="absolute left-0 top-16 w-60 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-2 flex flex-col">
                  <Link to="/community" className="px-5 py-3 text-[15px] text-gray-600 hover:text-[#1B7586] hover:bg-gray-50 transition-colors">
                    Community Overview
                  </Link>
                  <Link to="/gallery" className="px-5 py-3 text-[15px] text-gray-600 hover:text-[#1B7586] hover:bg-gray-50 transition-colors">
                    Gallery
                  </Link>
                  <Link to="/partners" className="px-5 py-3 text-[15px] text-gray-600 hover:text-[#1B7586] hover:bg-gray-50 transition-colors">
                    Partners & Sponsorship
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
            <button className="bg-[#1B7586] hover:bg-[#135a68] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm text-sm">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;