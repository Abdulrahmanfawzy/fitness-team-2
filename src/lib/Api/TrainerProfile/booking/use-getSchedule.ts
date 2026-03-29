import axiosInstance from "@/lib/Axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

async function getSchedule(id:number) {
    const res = await axiosInstance.get(`/api/trainers/${id}/schedule`)
    return res .data
}


export function useGetSchedule(id: number){
    return useQuery({
        queryKey: ["getSchedule"],
        queryFn: () => getSchedule(id),
        enabled: !!id
    })
}