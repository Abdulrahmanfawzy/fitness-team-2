import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";

export type CardData = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardName: string;
};

const useGetCards = () => {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const response = await axiosInstance.get("/cards");
      return response.data;
    },
  });

  return { data, isPending, isSuccess, isError, error };
};

export default useGetCards;
