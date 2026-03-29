export interface Trainer {
  id: number;
  name: string;
  location: string;
  profile_image: string;
  bio: string;
  experience_years: number;
  rating: number;
  total_reviews: number;
  is_currently_available: boolean;
  specializations: string[];
  certifications: Certification[];
  availability: Availability[];
  availability_exceptions: AvailabilityException[];
  packages: Package[];
}

export interface Certification {
  id: number;
  certificate_name: string;
  organization: string;
  year: number;
  file_path: string;
}
export interface Availability {
  id: number;
  day_of_week: string;
  start_time: string;
  end_time: string;
  is_active: boolean;
}
export interface AvailabilityException {
  id: number;
  date: string;
  is_available: boolean;
  start_time: string | null;
  end_time: string | null;
  reason: string;
}

export interface ScheduleInfo {
  isAvailable: boolean;
  isException: boolean;
  reason?: string;
  start_time: string | null;
  end_time: string | null;
}

export interface Package {
  trainer_package_id: number;
  package_id: number;
  title: string;
  description: string;
  sessions: number;
  duration_days: number;
  price: number;
}
