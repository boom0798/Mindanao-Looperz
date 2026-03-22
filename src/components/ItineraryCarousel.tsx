import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GeneratedImage } from './GeneratedImage';

interface CarouselProps {
  images: string[];
  prompts?: string[];
  alt: string;
  image?: string;
  className?: string;
}

export function ItineraryCarousel({ images, prompts, alt, image, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Priority: local images → single image fallback → prompts
  const mode: 'images' | 'single' | 'prompts' =
    images?.length > 0 ? 'images' :
    image ? 'single' :
    'prompts';

  const items: string[] =
    mode === 'images' ? images :
    mode === 'single' ? [image!] :
    prompts ?? [];

  useEffect(() => {
    setCurrentIndex(0);
    setFailedImages(new Set());
  }, [images]);

  const next = () => setCurrentIndex((i) => (i + 1) % items.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative group ${className}`}>
      <div className="w-full h-full overflow-hidden relative">
        {items.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {mode === 'prompts' ? (
              <GeneratedImage
                prompt={src}
                alt={`${alt} - Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : failedImages.has(index) ? (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                Image unavailable
              </div>
            ) : (
              <img
                src={src}
                alt={`${alt} - Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
            )}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
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
            {items.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}