export interface CourseComparisonProfile {
  durationDetailed: string;
  intensityLevel: 'High' | 'Very High' | 'Extreme';
  physicalIntensity: string; // e.g., '10/10 - 1.6km rally timed sprint (under 5:30m), pull-ups & ditch jump'
  academicIntensity: string; // e.g., '7/10 - General Knowledge, Basic Arithmetic & Science'
  primaryFocusAreas: string[];
  keySubjects: string[];
  physicalBenchmarks: string[];
  dailyClassHours: string;
  dailyGroundHours: string;
  selectionProcess: string[];
  examMode: string;
  recommendedFor: string;
}

export interface Course {
  id: string;
  wing: 'Army' | 'Navy' | 'AirForce' | 'Officer' | 'Police' | 'Paramilitary';
  title: string;
  badge: string;
  description: string;
  eligibility: string;
  duration: string;
  posts: string[];
  features: string[];
  batchStatus: string;
  comparison?: CourseComparisonProfile;
}

export interface TrainingPillar {
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  points: string[];
  schedule: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  highlight: string;
  description: string;
  bullets: string[];
  badgeColor: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  village: string;
  examCleared: string;
  wing: string;
  rating: number;
  review: string;
  verified: boolean;
  avatarText: string;
}

export interface DailyRoutineItem {
  time: string;
  activity: string;
  category: 'PT' | 'Diet' | 'Study' | 'Rest';
  details: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  targetExam: string;
  town: string;
  message: string;
}

export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: 'youtube' | 'instagram' | 'whatsapp';
  badge: string;
  description: string;
  followers?: string;
  highlightText: string;
  ctaText: string;
}
