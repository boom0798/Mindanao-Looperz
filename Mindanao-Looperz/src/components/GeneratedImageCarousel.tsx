import { useState, useEffect } from 'react';
import { GeneratedImage } from './GeneratedImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  prompts: string[];
  altPrefix: string;
  className?: string;
}

export function GeneratedImageCarousel({ prompts, altPrefix, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    setVisited((prev) => {
      const newSet = new Set(prev);
      newSet.add(currentIndex);
      return newSet;
    });
  }, [currentIndex]);

  const next = () => setCurrentIndex((i) => (i + 1) % prompts.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + prompts.length) % prompts.length);

  return (
    <div className={`relative group ${className}`}>
      <div className="w-full h-full overflow-hidden relative">
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {visited.has(index) ? (
              <GeneratedImage
                prompt={prompt}
                alt={`${altPrefix} - Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        ))}
      </div>
      
      <button 
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {prompts.map((_, index) => (
          <button 
            key={index}
            onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
