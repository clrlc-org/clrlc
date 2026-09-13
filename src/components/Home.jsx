import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from './Motion';

const Home = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen font-sans">
      
      {/* 1. Main Hero Section */}
      <div className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8 z-10">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB2C8]/15 text-[#1B7586] font-semibold text-sm tracking-wide border border-[#4DB2C8]/30">
              <span className="w-2 h-2 rounded-full bg-[#4DB2C8] animate-pulse"></span>
              Center for Low-Resource Languages & Cultures
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Empowering <br />
              <span className="text-[#1B7586]">Low-Resource</span> <br />
              Languages.
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              We bridge the gap between advanced artificial intelligence and cultural preservation, building inclusive datasets that ensure every voice and worldview is represented.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#1B7586] hover:bg-[#135a68] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Discover Our Work
              </button>
              <button className="bg-white border-2 border-[#1B7586] text-[#1B7586] hover:bg-[#1B7586] hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
                Partner With Us
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="lg:w-1/2 relative w-full h-[400px] md:h-[500px] flex justify-center items-center mt-12 lg:mt-0">
           <FadeIn direction="left" delay={0.4} className="w-full h-full relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[#1B7586]/10 to-[#4DB2C8]/20 rounded-[2rem] overflow-hidden flex items-center justify-center border border-white shadow-2xl backdrop-blur-sm">
                <svg className="w-48 h-48 text-[#1B7586] opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
             </div>
             
             <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5">
                <div className="bg-[#4DB2C8]/20 p-4 rounded-full flex-shrink-0">
                  <svg className="w-8 h-8 text-[#1B7586]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#1B7586]">100+</p>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Datasets Built</p>
                </div>
             </div>
           </FadeIn>
        </div>
      </div>

      {/* 2. The Overlapping Impact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 pb-24">
         <FadeIn direction="up" delay={0.6}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
               <div className="md:px-4 py-4 md:py-0">
                 <h3 className="text-2xl font-bold text-[#1B7586] mb-3">Research</h3>
                 <p className="text-gray-600 font-light leading-relaxed">Pioneering acoustic modeling for tonal African languages to advance modern AI.</p>
               </div>
               <div className="md:px-4 py-4 md:py-0">
                 <h3 className="text-2xl font-bold text-[#1B7586] mb-3">Community</h3>
                 <p className="text-gray-600 font-light leading-relaxed">Empowering native speakers globally through ethical data sourcing and validation.</p>
               </div>
               <div className="md:px-4 py-4 md:py-0">
                 <h3 className="text-2xl font-bold text-[#1B7586] mb-3">Impact</h3>
                 <p className="text-gray-600 font-light leading-relaxed">Preserving cultural worldviews and preventing digital language extinction.</p>
               </div>
            </div>
         </FadeIn>
      </div>

      {/* 3. Global Impact Section - UPDATED TO MATCH SCREENSHOT */}
      <div className="bg-gradient-to-r from-[#176170] to-[#1c788a] py-24 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content Area */}
            <div className="lg:w-1/2 space-y-5">
              <FadeIn direction="right" delay={0.1}>
                <h2 className="text-[#0a2329] font-extrabold tracking-wider uppercase text-3xl md:text-4xl font-serif mb-6">
                  GLOBAL IMPACT
                </h2>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  We are building a future where AI speaks every language.
                </p>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  Our work spans continents, bringing together diverse voices to solve complex technical challenges.
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <div className="pt-4">
                  <Link to="/team" className="inline-block bg-white text-gray-700 hover:text-[#1B7586] hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-all shadow-md">
                    Meet the Team
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Stats Grid Area */}
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 md:gap-6">
              {[
                { number: "5+", label: "CONTINENTS" },
                { number: "500+", label: "MEMBERS" },
                { number: "2+", label: "PROJECTS" },
                { number: "10+", label: "LANGUAGES" }
              ].map((stat, idx) => (
                <FadeIn key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:bg-white/20 transition-colors duration-300 backdrop-blur-md shadow-lg h-full flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-xs md:text-sm font-semibold text-white/90 tracking-widest uppercase">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 4. Global Engagements Placeholders */}
      <div className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
              <div>
                <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">Global Engagements</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Recent Outings</h3>
              </div>
              <Link to="/events" className="hidden sm:inline-flex items-center gap-2 text-[#4DB2C8] hover:text-[#1B7586] font-semibold transition-colors">
                View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Indaba Placeholder */}
            <FadeIn direction="up" delay={0.2}>
              <div className="min-h-[220px] w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50 p-6 text-center hover:bg-gray-100 transition-colors">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">Deep Learning Indaba</h4>
                <p className="text-gray-500 font-medium tracking-wide">
                  [ Details & Photos Pending Meeting ]
                </p>
              </div>
            </FadeIn>

            {/* NeurIPS Placeholder */}
            <FadeIn direction="up" delay={0.3}>
              <div className="min-h-[220px] w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50 p-6 text-center hover:bg-gray-100 transition-colors">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">NeurIPS Workshop</h4>
                <p className="text-gray-500 font-medium tracking-wide">
                  [ Details & Photos Pending Meeting ]
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;