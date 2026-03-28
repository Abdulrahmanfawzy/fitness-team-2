import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/Axios/axiosInstance";

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
      alert("Message sent successfully");
    },
    onError: () => {
      alert("Something went wrong");
    },
  });

  return { mutate, isPending, isSuccess, isError, error };
};

export default useContact;
