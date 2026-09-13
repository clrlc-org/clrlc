import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[#F7FAFC] min-h-screen font-sans">
      
      {/* 1. Hero Section (Who We Are) */}
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB2C8]/15 text-[#1B7586] font-semibold text-sm tracking-wide border border-[#4DB2C8]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4DB2C8]"></span>
            About CLRLC
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6 animate-fade-in-up">
            We Build <span className="text-[#1B7586]">Together.</span>
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base font-bold text-black uppercase tracking-widest mb-16">
            <span>Language</span> <span className="text-gray-400 hidden sm:block">•</span>
            <span>Research</span> <span className="text-gray-400 hidden sm:block">•</span>
            <span>Learning</span> <span className="text-gray-400 hidden sm:block">•</span>
            <span>Diversity</span>
          </div>
        </div>

        <div className="space-y-8 text-lg md:text-[19px] text-black font-normal leading-relaxed max-w-6xl mx-auto text-left">
          <p className="text-3xl md:text-4xl font-serif font-bold text-black mb-8 leading-snug tracking-tight">
            Center for Low-Resource Languages and Cultures (CLRLC) is a language research AI organisation dedicated to advancing research and innovation for low-resource languages.
          </p>
          <p>
            We build inclusive speech- and text-based datasets for African and other low-resource languages, and we partner closely with the communities who speak them. From there, we create the resources, research, and knowledge that keep the languages and cultures alive in the age of AI, and make artificial intelligence more inclusive, accurate, and culturally grounded.
          </p>
          <p>
            We work at the meeting point of language and culture, moving beyond language data to preserve the knowledge and worldviews embedded in each language. Our goal is to ensure that tomorrow’s AI does not simply translate words, but understands the people, contexts, and cultures behind them.
          </p>
        </div>
      </div>

      {/* 2. Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#1B7586]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1B7586]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path></svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Mission</h2>
            <p className="text-lg text-black font-normal leading-relaxed">
              Our mission is to solve one problem: building inclusive AI that speaks African and other low-resource languages. We bring together researchers, linguists, technologists, and communities to create the high-quality datasets and models that make it possible.
            </p>
          </div>

          <div className="bg-[#1B7586] p-10 md:p-12 rounded-3xl shadow-xl border border-[#1B7586] h-full flex flex-col justify-center text-white hover:shadow-2xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-white font-normal leading-relaxed">
              A future where African and other low-resource languages are fully part of AI, and where the technology works for the people who speak them, from the elders who carry each language and its culture forward to the youngest generation.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Our Pillars Section */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">Our Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">Our work runs across four connected areas.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F7FAFC] border border-gray-100 rounded-2xl p-8 h-full flex flex-col group hover:shadow-lg transition-all duration-300 hover:border-[#4DB2C8]/30">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4DB2C8] group-hover:bg-[#1B7586] group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-black mb-3">Data Curation</h4>
              <p className="text-black font-normal leading-relaxed flex-grow">
                We curate high-quality, inclusive speech and text datasets for African and other low-resource languages.
              </p>
            </div>
            {/* The rest of the pillars... (Simplified to save space, copy from previous code if you use Option 2) */}
          </div>
        </div>
      </div>
    </div>
  );
}
