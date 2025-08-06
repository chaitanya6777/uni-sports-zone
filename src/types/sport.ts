export interface SportData {
  name: string;
  about: string;
  stats: {
    players: number;
    teams: number;
    tournaments: number;
  };
  facilities: Array<{
    name: string;
    description: string;
    location: string;
    features: string[];
  }>;
  achievements: Array<{
    title: string;
    year: string;
    description: string;
    level: 'International' | 'National' | 'State' | 'Regional';
  }>;
  contacts: Array<{
    name: string;
    role: string;
    email: string;
    phone: string;
    office?: string;
  }>;
  gallery: Array<{
    title: string;
    description: string;
    date: string;
    type: 'image' | 'video';
  }>;
}