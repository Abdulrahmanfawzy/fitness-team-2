import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { toast } from "react-hot-toast";

export type CardData = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardName: string;
};

const useAddCard = () => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: CardData) => {
      const response = await axiosInstance.post("/cards", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Card added successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to add card");
    },
  });

  return { mutate, isPending, isSuccess, isError, error };
};

export default useAddCard;
