'use client';

import { useState } from 'react';
import { ResearchHero } from './ResearchHero';
import { HowWeCloseGap } from './HowWeCloseGap';
import { ProjectsSection } from './ProjectsSection';
import { PublicationsSection } from './PublicationsSection';
import { ResearchWithUs } from './ResearchWithUs';

interface Publication {
  _id: string;
  title: string;
  type: 'paper' | 'poster' | 'dataset' | 'talk';
  researchArea?: string;
  authors?: string[];
  venue?: string;
  year?: number;
  paperLink?: string;
  posterImage?: {
    asset?: {
      _ref: string;
      url?: string;
    };
    url?: string;
  };
}

interface ResearchPageClientProps {
  publications: Publication[];
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
}

export function ResearchPageClient({
  publications,
  languages,
}: ResearchPageClientProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter publications based on research area
  const filteredPublications =
    activeFilter === null
      ? publications
      : publications.filter((p) => p.researchArea === activeFilter);

  return (
    <div>
      <ResearchHero languages={languages} onFilterChange={setActiveFilter} />
      <HowWeCloseGap />
      <ProjectsSection filter={activeFilter} />
      <PublicationsSection publications={filteredPublications} />
      <ResearchWithUs />
    </div>
  );
}
