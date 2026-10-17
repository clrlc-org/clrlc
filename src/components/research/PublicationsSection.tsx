'use client';

import { useState } from 'react';

interface Publication {
  _id: string;
  title: string;
  type: 'paper' | 'poster' | 'dataset' | 'talk';
  researchArea?: string;
  authors?: string[];
  venue?: string;
  year?: number;
  status?: string;
  paperLink?: string;
  posterImage?: {
    asset?: {
      _ref: string;
      url?: string;
    };
    url?: string;
  };
}

const FILTER_TYPES = [
  { label: 'All', value: 'all' },
  { label: 'Papers', value: 'paper' },
  { label: 'Posters', value: 'poster' },
  { label: 'Datasets', value: 'dataset' },
  { label: 'Talks', value: 'talk' },
];

interface PublicationsSectionProps {
  publications: Publication[];
}

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get available filter types based on data
  const availableTypes = new Set(
    publications.map((p) => p.type || 'paper')
  );
  const visibleFilters = FILTER_TYPES.filter(
    (f) => f.value === 'all' || availableTypes.has(f.value as any)
  );

  // Filter publications
  const filteredPublications =
    activeFilter === 'all'
      ? publications
      : publications.filter((p) => p.type === activeFilter);

  // Sort by year descending
  const sortedPublications = [...filteredPublications].sort((a, b) => {
    const yearA = a.year || 0;
    const yearB = b.year || 0;
    return yearB - yearA;
  });

  return (
    <>
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Label */}
          <div className="mb-10 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Our Work
            </span>
          </div>

          {/* Filter tabs */}
          <div className="mb-12 border-b border-gray-300">
            <div className="flex gap-8 overflow-x-auto pb-0">
              {visibleFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`py-3 px-1 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                    activeFilter === filter.value
                      ? 'text-[#111111] border-[#1898A8]'
                      : 'text-[#1F1F1F]/60 border-transparent hover:text-[#1F1F1F]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Publications list */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {sortedPublications.length === 0 ? (
              <div className="text-center py-12 px-6">
                <p className="text-[#1F1F1F] text-base">
                  No publications in this category yet.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {sortedPublications.map((pub) => (
                  <div
                    key={pub._id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      {/* Year */}
                      <div className="shrink-0">
                        <span className="text-lg font-semibold text-[#1898A8]">
                          {pub.year || '—'}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-[#111111] mb-2">
                          {pub.title}
                        </h3>

                        {/* Authors and venue */}
                        <p className="text-sm text-[#1F1F1F]/70 mb-3">
                          {pub.authors?.join(', ')} {pub.venue && `· ${pub.venue}`}
                        </p>

                        {/* Type tag and action buttons/status */}
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide bg-gray-100 text-[#1F1F1F] rounded">
                            {pub.type}
                          </span>

                          <div className="flex gap-3 ml-auto items-center">
                            {pub.status ? (
                              <span className="px-3 py-1 text-xs font-medium uppercase tracking-wide bg-amber-100 text-amber-800 rounded">
                                {pub.status === 'under-review' ? 'Under Review' : pub.status === 'preprint' ? 'Preprint' : 'Published'}
                              </span>
                            ) : (
                              <>
                                {pub.posterImage?.url && (
                                  <a
                                    href={pub.posterImage.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[#1898A8] hover:text-[#2E2357] transition-colors"
                                  >
                                    View poster
                                  </a>
                                )}
                                {pub.paperLink && (
                                  <a
                                    href={pub.paperLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1898A8] hover:text-[#2E2357] transition-colors"
                                  >
                                    Read paper →
                                  </a>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  );
}
