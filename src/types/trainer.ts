export type TrainerUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  phone: string;
  profile_image: string | null;
  status: string;
};

export type Trainer = {
  id: number;
  user_id: number;
  bio: string;
  experience_years: number;
  location: string;
  rating: string | number;
  total_reviews: number;
  user: TrainerUser;
};
