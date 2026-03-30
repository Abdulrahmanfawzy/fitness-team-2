import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";
import { toast } from "react-hot-toast";
type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const useContact = () => {
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: ContactData) => {
      const response = await axiosInstance.post("/contact", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { mutate, isPending, isSuccess, isError, error };
};

export default useContact;
