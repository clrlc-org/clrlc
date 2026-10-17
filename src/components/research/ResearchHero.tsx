'use client';

import { useState } from 'react';

const floatAnimClass: Record<number, string> = {
  1: '[animation-name:research-float-1]',
  2: '[animation-name:research-float-2]',
  3: '[animation-name:research-float-3]',
};

const FILTER_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Code-switching', value: 'code-switching' },
  { label: 'Speech', value: 'speech' },
  { label: 'Translation', value: 'translation' },
  { label: 'Cultural AI', value: 'cultural-ai' },
];

interface ResearchHeroProps {
  languages: Array<{
    name: string;
    top: string;
    left: string;
    duration: string;
    delay: string;
    size: string;
    anim: number;
    color: string;
  }>;
  onFilterChange?: (filter: string) => void;
}

export function ResearchHero({ languages, onFilterChange }: ResearchHeroProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <>
      <style>{`
        @keyframes research-float-1 {
          0%, 100% { opacity: 0; transform: translateY(0); }
          15%, 50% { opacity: 0.35; transform: translateY(-6px); }
          85% { opacity: 0; transform: translateY(6px); }
        }
        @keyframes research-float-2 {
          0%, 100% { opacity: 0; transform: translateY(0); }
          15%, 50% { opacity: 0.55; transform: translateY(-6px); }
          85% { opacity: 0; transform: translateY(6px); }
        }
        @keyframes research-float-3 {
          0%, 100% { opacity: 0; transform: translateY(0); }
          15%, 50% { opacity: 0.75; transform: translateY(-6px); }
          85% { opacity: 0; transform: translateY(6px); }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#F7F4EE] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Two-column layout: text left, animation right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left column: text content */}
            <div className="flex flex-col">
              {/* Label */}
              <div className="mb-6 inline-block w-fit">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#111111]">
                  CLRLC Research
                </span>
              </div>

              {/* Heading - all black */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#111111] mb-6 leading-tight max-w-[560px]">
                Research for the languages AI leaves out
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#1F1F1F] mb-10 max-w-[560px]">
                Speech and text datasets, benchmarks and models for low-resource
                languages, built with the communities who speak them.
              </p>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-3">
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleFilterChange(option.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === option.value
                        ? 'bg-[#1898A8] text-white'
                        : 'border-2 border-[#D4C5E2] text-[#1F1F1F] hover:border-[#B8A3D0]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right column: floating languages animation */}
            <div className="relative h-96 lg:h-[420px] pointer-events-none">
              {languages.map((item) => (
                <span
                  key={item.name}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-semibold pointer-events-none motion-reduce:[animation-name:none] ${floatAnimClass[item.anim]} ${item.size} ${item.color}`}
                  style={{
                    top: item.top,
                    left: item.left,
                    animationDuration: item.duration,
                    animationDelay: item.delay,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Teal underline */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1898A8] to-[#2E2357]" />
      </section>
    </>
  );
}
