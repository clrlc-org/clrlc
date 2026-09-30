'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DEFAULT_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
];

const ROTATION_INTERVAL = 4500; // 4.5 seconds

interface CommunityCarouselProps {
  images?: string[];
}

export function CommunityCarousel({ images = DEFAULT_IMAGES }: CommunityCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating, images]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4 md:px-6">
      {/* Carousel Container - Circle with Subtle Shadow */}
      <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-full shadow-md mx-auto">
        {/* Images */}
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`CLRLC community photo ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 justify-center">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            onMouseEnter={() => setIsAutoRotating(false)}
            onMouseLeave={() => setIsAutoRotating(true)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-primary w-3 h-3'
                : 'bg-slate-300 hover:bg-slate-400 w-2 h-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
