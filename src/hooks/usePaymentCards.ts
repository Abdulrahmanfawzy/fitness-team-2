import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { toast } from "react-hot-toast";

export type CardData = {
  card_brand: string;
  card_last_four: string;
  card_exp_month: number;
  card_exp_year: number;
  card_holder_name: string;
};

const usePaymentCards = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: CardData) => {
      console.log("data from the mutate", data);
      const response = await axiosInstance.post("/api/cards", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Card added successfully");
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || error.message || "Failed to add card",
      );
    },
  });

  return { mutate, isPending, isSuccess, isError, error };
};

export default usePaymentCards;
