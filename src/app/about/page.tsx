// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { TeamMemberCard } from '@/components/TeamMemberCard';

export default function AboutPage() {
  
  const teamData = [
    {
      _id: "1",
      name: "Joy Olusanya",
      role: "Founder/CEO",
      image: "/team/Joy Olusanya.jpg", 
      bio: "Joy Olusanya is a linguist and researcher working at the intersection of language, culture, and intelligent systems. Her work focuses on Natural Language Processing and Machine Learning for low-resource languages and their cultures, with emphasis on dataset curation, machine translation, multilingual NLP, healthcare applications, and culturally grounded benchmark evaluation. She is a graduate of Linguistics from Obafemi Awolowo University. She is the Founder and a Researcher at the Center for Low-Resource Languages and Cultures (CLRLC), where she leads efforts to advance inclusive and culturally grounded AI research.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/joy-olusanya-209340206/" },
        { platform: "twitter", url: "https://x.com/Naomi_Joy___" }
      ]
    },
    {
      _id: "2",
      name: "Mary Salami",
      role: "Advisor",
      image: "/team/Mary Salami.jpg", 
      bio: "Mary Salami is an interdisciplinary researcher whose work explores how generative AI can improve spatial population modelling, environmental resilience, and equitable decision-making. She has research experience in social media data and mobility analytics and currently serves as a Teaching Assistant at the University of California, Santa Barbara, supporting courses such as Maps and Spatial Reasoning, Technical Issues in GIS, Introduction to Experimental Physics, and People, Place, and Environment. She brings expertise at the intersection of AI, geospatial analysis, and societal impact.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/marysalami/" }
      ]
    },
    {
      _id: "3",
      name: "Opeyemi Osakuade",
      role: "Advisor",
      image: "/team/Opeyemi Osakuade.jpg", 
      bio: "Opeyemi Osakuade is a PhD researcher in Natural Language Processing and Speech Technology at the University of Edinburgh. Her research focuses on representation learning and evaluation for speech and language models in low-resource and tonal languages, with emphasis on discrete speech units, tone modeling, and robustness to accent and prosodic variation. She works across speech recognition, synthesis, and speech language understanding, developing diagnostic benchmarks and evaluation frameworks to analyse model behaviour across linguistically diverse settings. Opeyemi leads the development of ToneBench, a benchmarking framework for evaluating tone awareness in speech representations across languages.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/opeyemi-osakuade/" }
      ]
    },
    {
      _id: "4",
      name: "Nunsi Shiaki",
      role: "Engineering Lead",
      image: "/team/Nunsi Shiaki.jpg", 
      bio: "Nunsi is a passionate data scientist and machine learning researcher dedicated to building robust and inclusive technological solutions.",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      _id: "5",
      name: "Anusha Dixit",
      role: "Product Manager",
      image: "/team/Anusha Dixit.jpg", 
      bio: "Anusha Dixit is an AI and product professional with expertise in Python, SQL, analytics, machine learning, large language models, and natural language processing. She is passionate about using AI and technology to solve real-world problems and build impactful, data-driven products and solutions.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/anushadixit1901/" },
        { platform: "twitter", url: "https://x.com/dixit_anus46806/" }
      ]
    }
  ];

  return (
    <div className="bg-[#F7FAFC] min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DB2C8]/15 text-[#1B7586] font-semibold text-sm tracking-wide border border-[#4DB2C8]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4DB2C8]"></span>
            About CLRLC
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
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
          <p className="text-xl md:text-2xl font-serif font-normal text-black mb-8 leading-relaxed">
            Center for Low-Resource Languages and Cultures (CLRLC) is a language research AI organisation dedicated to advancing research and innovation for low-resource languages.
          </p>
          <p>
            We build inclusive speech- and text-based datasets for African and other low-resource languages, and we partner closely with the communities who speak them. From there, we create the resources, research, and knowledge that keep the languages and cultures alive in the age of AI, and make artificial intelligence more inclusive, accurate, and culturally grounded.
          </p>
          <p>
            We work at the meeting point of language and culture, moving beyond language data to preserve the knowledge and worldviews embedded in each language. Our goal is to ensure that tomorrow's AI does not simply translate words, but understands the people, contexts, and cultures behind them.
          </p>
        </div>
      </div>

      {/* 2. Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col justify-center">
            <div className="w-14 h-14 bg-[#1B7586]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1B7586]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path></svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Mission</h2>
            <p className="text-lg text-black font-normal leading-relaxed">
              Our mission is to solve one problem: building inclusive AI that speaks African and other low-resource languages. We bring together researchers, linguists, technologists, and communities to create the high-quality datasets and models that make it possible.
            </p>
          </div>

          <div className="bg-[#1B7586] p-10 md:p-12 rounded-3xl shadow-xl border border-[#1B7586] h-full flex flex-col justify-center text-white">
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

      {/* 3. Our Pillars */}
      <div className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">Our Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">Our work runs across four connected areas.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F7FAFC] border border-gray-100 rounded-2xl p-8 h-full flex flex-col">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4DB2C8]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-black mb-3">Data Curation</h4>
              <p className="text-black font-normal leading-relaxed flex-grow">We curate high-quality, inclusive speech and text datasets for African and other low-resource languages.</p>
            </div>
            
            <div className="bg-[#F7FAFC] border border-gray-100 rounded-2xl p-8 h-full flex flex-col">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4DB2C8]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-black mb-3">Applied AI Research</h4>
              <p className="text-black font-normal leading-relaxed flex-grow">We build and evaluate models for translation, speech, and natural language processing in under-resourced languages.</p>
            </div>

            <div className="bg-[#F7FAFC] border border-gray-100 rounded-2xl p-8 h-full flex flex-col">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4DB2C8]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-black mb-3">Training & Mentorship</h4>
              <p className="text-black font-normal leading-relaxed flex-grow">We help people navigate their way into tech, guiding learners from beginner to advanced as they build inclusive technologies.</p>
            </div>

            <div className="bg-[#F7FAFC] border border-gray-100 rounded-2xl p-8 h-full flex flex-col">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4DB2C8]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-black mb-3">Knowledge Exchange</h4>
              <p className="text-black font-normal leading-relaxed flex-grow">We connect experts, communities, and institutions through workshops, conferences, and webinars.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Meet the Team (Restored!) */}
      <div className="py-24 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 border-l-4 border-[#1B7586] pl-6">
            <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">Our Network</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4 tracking-tight">Meet the Team</h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              A global network of researchers, linguists, and engineers dedicated to building inclusive language technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamMemberCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}