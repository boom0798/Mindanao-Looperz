import { itineraries } from '../data/itineraries';
import type { Difficulty, Itinerary } from '../types/itinerary';

export const itineraryService = {
  getAll: (): Itinerary[] => Object.values(itineraries),
  getById: (id: string): Itinerary | undefined => itineraries[id],
  getByDifficulty: (level: Difficulty): Itinerary[] =>
    Object.values(itineraries).filter(i => i.difficulty === level),
};