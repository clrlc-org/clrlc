'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { CardContent } from '@/components/ui/card';

interface Event {
  _id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  image?: any;
  imageUrl?: string;
}

interface FeaturedEventCarouselProps {
  events: Event[];
}

const ROTATION_INTERVAL = 5500; // 5.5 seconds

export function FeaturedEventCarousel({ events }: FeaturedEventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating || events.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating, events.length]);

  if (!events || events.length === 0) {
    return null;
  }

  const currentEvent = events[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(true);
  };

  const handleMouseEnter = () => setIsAutoRotating(false);
  const handleMouseLeave = () => setIsAutoRotating(true);

  return (
    <div
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Featured Card */}
      <div className="border-none shadow-none bg-transparent h-full">
        {/* Image with fade transition */}
        <div className="rounded-2xl overflow-hidden mb-4 bg-slate-200 relative w-full h-[360px]">
          {currentEvent.imageUrl ? (
            <img
              src={currentEvent.imageUrl}
              alt={currentEvent.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-slate-300 animate-pulse group-hover:scale-105 transition-transform duration-500"></div>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
            Featured
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-0 space-y-2">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />{' '}
              {new Date(currentEvent.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            {currentEvent.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {currentEvent.location}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">
            <Link href={currentEvent.link || '/events'}>
              {currentEvent.title}
            </Link>
          </h3>
          {currentEvent.description && (
            <p className="text-slate-600">
              {currentEvent.description}
            </p>
          )}
          {currentEvent.link && (
            <a
              href={currentEvent.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors pt-2"
            >
              {currentEvent.linkLabel ||
                (currentEvent.link.includes('youtube.com') ||
                currentEvent.link.includes('youtu.be')
                  ? 'Watch recording'
                  : 'Read more')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </CardContent>
      </div>

      {/* Dot Indicators */}
      {events.length > 1 && (
        <div className="flex gap-2 justify-center mt-6">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              onMouseEnter={() => setIsAutoRotating(false)}
              onMouseLeave={() => setIsAutoRotating(true)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-primary w-2.5 h-2.5'
                  : 'bg-slate-300 hover:bg-slate-400 w-2 h-2'
              }`}
              aria-label={`Go to event ${idx + 1}`}
              aria-current={idx === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
