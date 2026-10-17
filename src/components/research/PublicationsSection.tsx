'use client';

import { useState } from 'react';
import { X, Download } from 'lucide-react';

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
  const [selectedPoster, setSelectedPoster] = useState<Publication | null>(null);

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

                        {/* Type tag and action buttons */}
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="px-2 py-1 text-xs font-medium uppercase tracking-wide bg-gray-100 text-[#1F1F1F] rounded">
                            {pub.type}
                          </span>

                          <div className="flex gap-3 ml-auto">
                            {pub.posterImage && (
                              <button
                                onClick={() => setSelectedPoster(pub)}
                                className="text-sm font-medium text-[#1898A8] hover:text-[#2E2357] transition-colors"
                              >
                                View poster
                              </button>
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

      {/* Poster viewer modal */}
      {selectedPoster && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-[#111111]">
                {selectedPoster.title}
              </h2>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 overflow-y-auto">
              {selectedPoster.posterImage?.url && (
                <img
                  src={selectedPoster.posterImage.url}
                  alt={selectedPoster.title}
                  className="w-full h-auto"
                />
              )}
            </div>

            {/* Footer with download */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              {selectedPoster.posterImage?.url && (
                <a
                  href={selectedPoster.posterImage.url}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1898A8] text-white rounded-lg font-medium hover:bg-[#157a8a] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
