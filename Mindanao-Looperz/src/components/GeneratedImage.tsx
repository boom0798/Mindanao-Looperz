import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { get, set } from 'idb-keyval';

interface GeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackImage?: string;
}

export function GeneratedImage({ prompt, alt, className, fallbackImage }: GeneratedImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      // Check cache first
      const cacheKey = `generated_image_${prompt}`;
      try {
        const cached = await get(cacheKey);
        if (cached) {
          setImageUrl(cached);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('Failed to read from cache', e);
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            }
          }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const url = `data:image/png;base64,${base64EncodeString}`;
            setImageUrl(url);
            try {
              await set(cacheKey, url);
            } catch (e) {
              console.warn('Failed to cache image in IndexedDB', e);
            }
            break;
          }
        }
      } catch (error) {
        console.error('Error generating image:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 animate-pulse ${className}`}>
        <span className="text-zinc-500 text-sm">Generating Image...</span>
      </div>
    );
  }

  if (!imageUrl) {
    if (fallbackImage) {
      return <img src={fallbackImage} alt={alt} className={className} referrerPolicy="no-referrer" />;
    }
    return (
      <div className={`flex items-center justify-center bg-zinc-900 ${className}`}>
        <span className="text-zinc-500 text-sm">Image generation failed</span>
      </div>
    );
  }

  return <img src={imageUrl} alt={alt} className={className} referrerPolicy="no-referrer" />;
}

