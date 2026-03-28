import { useState } from "react";
import pic from "@/assets/pic.jpg";
import { Clock, FileSpreadsheet, MapPin, type LucideIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingSessions } from "@/lib/Api/Authentication/profile";
type Session = {
    id: number;
    title: string;
    coach: string;
    img: string;
};
type date = {
    icon: LucideIcon;
    title: string;
};

export default function UpcomingSessions() {
    const [sessions] = useState<Session[]>([
        {
            id: 1,
            title: "Strength Training",
            coach: "Sarah Jenkins",
            img: pic,
        },
    ]);
    const [dates] = useState<date[]>([
        { icon: FileSpreadsheet, title: "Tomorrow" },
        { icon: Clock, title: "9:00 AM - 10:00 AM" },
        { icon: MapPin, title: "Downtown Gym" },
    ]);
const { data, isLoading } = useQuery({
    queryKey: ["profile-upcoming-sessions"],
    queryFn: getUpcomingSessions,
  });

    return (
        <div className=" px-4 md:px-8 mt-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-3">
                <h2 className="text-3xl font-semibold mb-5">Upcoming Sessions</h2>
                <span className="text-[#FF4D4D] text-2xl font-bold underline cursor-pointer">
                    View Past Sessions
                </span>
            </div>
            {sessions.map((s) => (
                <div
                    key={s.id}
                    className="flex justify-between items-center border border-[#A7A7A7] p-4 rounded-2xl">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <img src={s.img} className="w-13 h-13 rounded-full" />
                            <div>
                                <p className="font-normal text-2xl text-[#FFFFFF]">{s.title}</p>
                                <p className="text-[#A7A7A7] text-sm ">
                                    with {s.coach}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 ml-16">
                            {dates.map((date, index) => {
                                const Icon = date.icon;
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <Icon size={16} className="w-5 h-5 text-[#A7A7A7]" />
                                        <p className="text-[#A7A7A7] text-sm ">
                                            {date.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="border border-[#FF4D4D] px-9 py-2.5 rounded-md text-xs font-bold hover:bg-[#FF4D4D] transition">
                            Reschedule {data?.reschedule}
                        </button>
                        <button className="bg-[#FF4D4D] px-9 py-2.5 rounded-md tracking-tight text-xs font-bold hover:bg-black border border-[#FF4D4D] transition">
                            View Details {data?.viewDetails}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}