import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { FadeIn } from './Motion';

// 1. Import the images from your assets folder
// IMPORTANT: If any of your images are .png or .jpeg instead of .jpg, 
// just update the file extension in the quotes below!
import joyImg from '../assets/Joy Olusanya.jpg';
import maryImg from '../assets/Mary Salami.jpg';
import opeyemiImg from '../assets/Opeyemi Osakuade.jpg';
import nunsiImg from '../assets/Nunsi Shiaki.jpg';
import anushaImg from '../assets/Anusha Dixit.jpg';

const Team = () => {
  const teamData = [
    {
      _id: "1",
      name: "Joy Olusanya",
      role: "Founder/CEO",
      image: joyImg, // 2. Map the imported image variable here
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
      image: maryImg, 
      bio: "Mary Salami is an interdisciplinary researcher whose work explores how generative AI can improve spatial population modelling, environmental resilience, and equitable decision-making. She has research experience in social media data and mobility analytics and currently serves as a Teaching Assistant at the University of California, Santa Barbara, supporting courses such as Maps and Spatial Reasoning, Technical Issues in GIS, Introduction to Experimental Physics, and People, Place, and Environment. She brings expertise at the intersection of AI, geospatial analysis, and societal impact.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/marysalami/" }
      ]
    },
    {
      _id: "3",
      name: "Opeyemi Osakuade",
      role: "Advisor",
      image: opeyemiImg, 
      bio: "Opeyemi Osakuade is a PhD researcher in Natural Language Processing and Speech Technology at the University of Edinburgh. Her research focuses on representation learning and evaluation for speech and language models in low-resource and tonal languages, with emphasis on discrete speech units, tone modeling, and robustness to accent and prosodic variation. She works across speech recognition, synthesis, and speech language understanding, developing diagnostic benchmarks and evaluation frameworks to analyse model behaviour across linguistically diverse settings. Opeyemi leads the development of ToneBench, a benchmarking framework for evaluating tone awareness in speech representations across languages.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/opeyemi-osakuade/" }
      ]
    },
    {
      _id: "4",
      name: "Nunsi Shiaki",
      role: "Engineering Lead",
      image: nunsiImg, 
      bio: "Nunsi is a passionate data scientist and machine learning researcher.",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" }
      ]
    },
    {
      _id: "5",
      name: "Anusha Dixit",
      role: "Product Manager",
      image: anushaImg, 
      bio: "Anusha Dixit is an AI and product professional with expertise in Python, SQL, analytics, machine learning, large language models, and natural language processing. She is passionate about using AI and technology to solve real-world problems and build impactful, data-driven products and solutions.",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/in/anushadixit1901/" },
        { platform: "twitter", url: "https://x.com/dixit_anus46806/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFC] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn direction="down" duration={0.6}>
          <div className="max-w-3xl mb-16 border-l-4 border-[#1B7586] pl-6">
            <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">Our Network</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Meet the Team</h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
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