import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('who-we-are');

  const sections = [
    { 
      id: 'who-we-are', 
      label: 'Who We Are',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    { 
      id: 'cornerstones', 
      label: 'Our Cornerstones',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    },
    { 
      id: 'mission', 
      label: 'Mission & Vision',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    },
    { 
      id: 'pillars', 
      label: 'Our Pillars',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    }
  ];

  return (
    <div className="flex h-screen bg-white font-sans text-gray-800 overflow-hidden">
      
      {/* Strict Left Sidebar */}
      <aside className="w-72 lg:w-80 bg-[#F7FAFC] border-r border-gray-200 flex flex-col h-full shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div className="p-8 border-b border-gray-200 bg-[#2A4365]">
          {/* Logo container */}
          <div className="bg-white inline-block p-2 rounded-lg mb-4 shadow-sm">
            <img 
              src="/logo.jpg" 
              alt="CLRLC Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }} 
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">About CLRLC</h1>
          <p className="text-xs text-[#DD6B20] font-bold uppercase tracking-widest">We build together.</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`w-full text-left px-8 py-5 transition-all flex items-center gap-4 border-l-4 ${
                activeSection === sec.id
                  ? 'bg-white border-l-[#DD6B20] text-[#2A4365] shadow-sm'
                  : 'border-l-transparent text-gray-500 hover:bg-gray-100 hover:text-[#2A4365]'
              }`}
            >
              <svg className={`w-6 h-6 shrink-0 ${activeSection === sec.id ? 'text-[#DD6B20]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sec.icon}
              </svg>
              <span className={`text-lg ${activeSection === sec.id ? 'font-bold' : 'font-medium'}`}>
                {sec.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Scrollable Main Content */}
      <main className="flex-1 h-full overflow-y-auto bg-white relative">
        <div className="max-w-4xl mx-auto p-12 lg:p-20">
          
          {activeSection === 'who-we-are' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-[#2A4365] mb-8 pb-4 border-b border-gray-100">Who We Are</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Center for Low-Resource Languages and Cultures (CLRLC) is a language research AI organisation dedicated to advancing research and innovation for low-resource languages.
                </p>
                <p>
                  We build inclusive speech- and text-based datasets for African and other low-resource languages, and we partner closely with the communities who speak them. From there, we create the resources, research, and knowledge that keep the languages and cultures alive in the age of AI, and make artificial intelligence more inclusive, accurate, and culturally grounded.
                </p>
                <p>
                  We work at the meeting point of language and culture, moving beyond language data to preserve the knowledge and worldviews embedded in each language. <strong className="font-semibold text-[#2A4365]">Our goal is to ensure that tomorrow's AI does not simply translate words, but understands the people, contexts, and cultures behind them.</strong>
                </p>
              </div>
            </div>
          )}

          {activeSection === 'cornerstones' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-[#2A4365] mb-8 pb-4 border-b border-gray-100">Our Cornerstones</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Language', 'Research', 'Learning', 'Diversity'].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-[#F7FAFC] border border-gray-100 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[#DD6B20]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold text-[#2A4365]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'mission' && (
            <div className="animate-fade-in space-y-12">
              <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#DD6B20]"></div>
                <h2 className="text-3xl font-bold text-[#2A4365] mb-4">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Our mission is to solve one problem: building inclusive AI that speaks African and other low-resource languages. We bring together researchers, linguists, technologists, and communities to create the high-quality datasets and models that make it possible.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#2A4365]"></div>
                <h2 className="text-3xl font-bold text-[#2A4365] mb-4">Our Vision</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  A future where African and other low-resource languages are fully part of AI, and where the technology works for the people who speak them, from the elders who carry each language and its culture forward to the youngest generation.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'pillars' && (
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-[#2A4365] mb-8 pb-4 border-b border-gray-100">Our Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="p-8 border border-gray-200 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4">Data Curation</h3>
                  <p className="text-gray-600 mb-6 font-light text-lg">We curate high-quality, inclusive speech and text datasets for African and other low-resource languages.</p>
                  <p className="text-sm font-bold text-[#DD6B20] uppercase tracking-wide">Speech data • Text corpora • Ethics</p>
                </div>

                <div className="p-8 border border-gray-200 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4">Applied AI Research</h3>
                  <p className="text-gray-600 mb-6 font-light text-lg">We build and evaluate models for translation, speech, and natural language processing in under-resourced languages.</p>
                  <p className="text-sm font-bold text-[#DD6B20] uppercase tracking-wide">Translation • Speech • NLP • Benchmarks</p>
                </div>

                <div className="p-8 border border-gray-200 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4">Training & Mentorship</h3>
                  <p className="text-gray-600 mb-6 font-light text-lg">We help people navigate their way into tech, guiding learners from beginner to advanced as they build inclusive technologies.</p>
                  <p className="text-sm font-bold text-[#DD6B20] uppercase tracking-wide">Curriculum • Mentorship • Fellowship</p>
                </div>

                <div className="p-8 border border-gray-200 rounded-2xl">
                  <h3 className="text-2xl font-bold text-[#2A4365] mb-4">Knowledge Exchange</h3>
                  <p className="text-gray-600 mb-6 font-light text-lg">We connect experts, communities, and institutions through workshops, conferences, and webinars.</p>
                  <p className="text-sm font-bold text-[#DD6B20] uppercase tracking-wide">Conferences • Community • Partnerships</p>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
};

export default About;
