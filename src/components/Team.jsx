import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { FadeIn } from './Motion';

const Team = () => {
  // Extracted directly from the video provided
  const teamData = [
    {
      _id: "1",
      name: "Joy Olusanya",
      role: "Linguist & Researcher",
      image: "", // Add the image path when you have the photos (e.g., "/team/joy.jpg")
      bio: "Joy Olusanya is a linguist and researcher working at the intersection of language, culture, and intelligent systems. Her work focuses on Natural Language Processing and computational linguistics.",
      socials: [
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      _id: "2",
      name: "Mary Salami",
      role: "Interdisciplinary Researcher",
      image: "", 
      bio: "Mary Salami is an interdisciplinary researcher whose work explores how generative AI can improve spatial population modelling and environmental analysis.",
      socials: [
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      _id: "3",
      name: "Opeyemi Osakuade",
      role: "PhD Researcher",
      image: "", 
      bio: "Opeyemi Osakuade is a PhD researcher in Natural Language Processing and Speech Technology at the University of Edinburgh.",
      socials: [
        { platform: "linkedin", url: "#" }
      ]
    },
    {
      _id: "4",
      name: "Nunsi Shiaki",
      role: "Area Committee",
      image: "", // Add her photo path here! 
      bio: "Nunsi is a passionate data scientist and machine learning researcher.",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn direction="down" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Meet the Team</h1>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              A global network of researchers, linguists, and engineers dedicated to building inclusive language technologies.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <FadeIn key={member._id} delay={index * 0.15}>
              <TeamMemberCard member={member} />
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;