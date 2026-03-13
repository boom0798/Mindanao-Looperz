export type Difficulty = 'Beginner' | 'Intermediate' | 'Expert'|'Advanced';
export type ItineraryType = 'Multi-day' | 'Hiking & Riding' | 'Mountaineering' | 'Day Loop';

export interface DailyItinerary {
  day: number;
  title: string;
  distance: string;
  description: string;
}

export interface Itinerary {
  id: string;
  name: string;
  distance?: string;      
  duration?: string;
  difficulty?: Difficulty;
  type?: ItineraryType;
  image?: string;
  images?: string[];
  overview?: string;
  highlights?: string[];
  requirements?: string[];
  daily?: DailyItinerary[];
}