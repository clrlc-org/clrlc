import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  // We add state to control the mobile menu and the mobile Community dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? "text-[#1B7586] border-b-2 border-[#1B7586]" : "text-gray-600 hover:text-[#1B7586] transition-colors";
  };

  const isCommunityActive = location.pathname.includes('/community') || location.pathname.includes('/gallery') || location.pathname.includes('/partners');

  // Helper function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
    setIsCommunityOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img 
                src="/logo.jpg" 
                alt="CLRLC Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link to="/about" className={`pb-1 ${isActive('/about')}`}>About</Link>
            <Link to="/events" className={`pb-1 ${isActive('/events')}`}>Events</Link>
            <Link to="/research" className={`pb-1 ${isActive('/research')}`}>Research</Link>
            
            {/* Desktop Community Dropdown (Hover) */}
            <div className="relative group cursor-pointer flex items-center h-20"> 
              <div className={`flex items-center gap-1 pb-1 transition-colors ${isCommunityActive ? 'text-[#1B7586] border-b-2 border-[#1B7586]' : 'text-gray-600 group-hover:text-[#1B7586]'}`}>
                Community
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              
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

          {/* Desktop Contact Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-4">
            
            {/* Contact Button (Hidden on Mobile) */}
            <button className="hidden md:block bg-[#1B7586] hover:bg-[#135a68] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm text-sm">
              Contact Us
            </button>

            {/* Hamburger Button (Visible only on Mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1B7586] hover:bg-gray-50 transition-colors focus:outline-none"
            >
              {isOpen ? (
                // 'X' Icon when open
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Hamburger Icon when closed
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Visible only when Hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            
            <Link to="/about" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1B7586] hover:bg-gray-50 rounded-xl transition-colors">
              About
            </Link>
            <Link to="/events" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1B7586] hover:bg-gray-50 rounded-xl transition-colors">
              Events
            </Link>
            <Link to="/research" onClick={closeMenu} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1B7586] hover:bg-gray-50 rounded-xl transition-colors">
              Research
            </Link>

            {/* Mobile Community Accordion */}
            <div>
              <button 
                onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-[#1B7586] hover:bg-gray-50 rounded-xl transition-colors"
              >
                Community
                <svg className={`w-5 h-5 transition-transform duration-300 ${isCommunityOpen ? 'rotate-180 text-[#1B7586]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* Expanding sub-menu for Community */}
              {isCommunityOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 border-l-2 border-[#1B7586]/20 ml-6 mt-1">
                  <Link to="/community" onClick={closeMenu} className="block px-3 py-2.5 text-sm font-medium text-gray-500 hover:text-[#1B7586] transition-colors rounded-lg hover:bg-gray-50">
                    Community Overview
                  </Link>
                  <Link to="/gallery" onClick={closeMenu} className="block px-3 py-2.5 text-sm font-medium text-gray-500 hover:text-[#1B7586] transition-colors rounded-lg hover:bg-gray-50">
                    Gallery
                  </Link>
                  <Link to="/partners" onClick={closeMenu} className="block px-3 py-2.5 text-sm font-medium text-gray-500 hover:text-[#1B7586] transition-colors rounded-lg hover:bg-gray-50">
                    Partners & Sponsorship
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <div className="pt-6 pb-2">
              <button className="w-full bg-[#1B7586] text-white px-6 py-4 rounded-full font-semibold shadow-md hover:bg-[#135a68] transition-colors text-center">
                Contact Us
              </button>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;