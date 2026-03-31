import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import type { ReviewInterface } from "@/lib/types/Trainer/TrainerTypes";

const useReviews = () => {
  const {
    data: reviews,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["landing-reviews"],
    queryFn: async () => {
      const response = await axiosInstance.get<{ data: ReviewInterface[] } | ReviewInterface[]>(
        "api/landing/reviews"
      );

      // Handle both flat array and { data: [...] } structure
      const rawData =
        (response.data as { data: ReviewInterface[] }).data || response.data;

      if (!Array.isArray(rawData)) {
        console.error("Unexpected API response format:", response.data);
        return [];
      }

      return rawData as ReviewInterface[];
    },
  });

  const errorMessage = error instanceof Error ? error.message : null;

  return {
    reviews: Array.isArray(reviews) ? reviews : [],
    loading,
    error: errorMessage,
  };
};

export default useReviews;
