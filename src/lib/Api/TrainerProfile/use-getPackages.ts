import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getPackages() {
  const res = await axiosInstance.get("/api/packages");
  return res.data;
}

export function useGetPackages() {
  return useQuery({
    queryKey: ["get-packages"],
    queryFn: getPackages,
  });
}
