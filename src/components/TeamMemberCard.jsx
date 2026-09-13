import React, { useState } from 'react';

const TeamMemberCard = ({ member }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const SocialIcon = ({ platform }) => {
    const plat = platform.toLowerCase();
    if (plat.includes("linkedin")) return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    );
    if (plat.includes("twitter") || plat.includes("x")) return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    );
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
    );
  };

  const getInitials = (name) => name ? name.substring(0, 2).toUpperCase() : "TM";

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col bg-white rounded-xl border border-gray-100"
      >
        <div className="flex flex-col items-center gap-4 p-6 pb-2 text-center">
          <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            {member.image ? (
              <img src={member.image} alt={member.name} className="object-cover h-full w-full" />
            ) : (
              <span className="text-4xl text-[#4DB2C8] font-bold">{getInitials(member.name)}</span>
            )}
          </div>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-[#1B7586] font-medium text-[15px] md:text-lg">{member.role}</p>
          </div>
        </div>
        
        <div className="p-6 pt-2 space-y-4 flex-grow flex flex-col">
          <p className="text-gray-500 line-clamp-3 leading-relaxed text-center font-light text-sm md:text-base">
            {member.bio}
          </p>
          <div className="pt-2 flex justify-center w-full">
            <span className="text-[#4DB2C8] font-semibold group-hover:text-[#1B7586] group-hover:underline text-xs md:text-sm uppercase tracking-wider transition-colors">
              Read More
            </span>
          </div>
          
          {member.socials && (
            <div className="flex gap-3 pt-4 mt-auto justify-center" onClick={(e) => e.stopPropagation()}>
              {member.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#4DB2C8] transition-colors p-2 hover:bg-gray-50 rounded-full" title={social.platform}>
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative" onClick={(e) => e.stopPropagation()}>
            
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6 border-b border-gray-100 pb-6 text-left">
              <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="object-cover h-full w-full" />
                ) : (
                  <span className="text-4xl text-[#4DB2C8] font-bold">{getInitials(member.name)}</span>
                )}
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                <div className="text-lg font-medium text-[#1B7586]">{member.role}</div>
                {member.socials && (
                  <div className="flex gap-3 pt-2">
                    {member.socials.map((social, idx) => (
                      <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#4DB2C8] transition-colors">
                        <SocialIcon platform={social.platform} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-4 text-left">
              <p className="text-[17px] text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberCard;