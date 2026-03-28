import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import type { Trainer } from "@/types/trainer";

const useTrainers = () => {
  const {
    data: trainers,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["landing-trainers"],
    queryFn: async () => {
      const response = await axiosInstance.get<{ data: Trainer[] } | Trainer[]>(
        "api/landing/trainers"
      );

      // Handle both flat array and { data: [...] } structure
      const rawData =
        (response.data as { data: Trainer[] }).data || response.data;

      if (!Array.isArray(rawData)) {
        console.error("Unexpected API response format:", response.data);
        return [];
      }

      return rawData as Trainer[];
    },
  });

  const errorMessage = error instanceof Error ? error.message : null;

  return {
    trainers: Array.isArray(trainers) ? trainers : [],
    loading,
    error: errorMessage,
  };
};

export default useTrainers;
