import React, { useState } from "react";
// import Profile from "@/assets/Profile.jpg";
import { Goal, Dumbbell, type LucideIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfileOverview } from "@/lib/Api/Authentication/profile";
type InfoCard = {
    title: string;
    value: string;
    icon: LucideIcon;
};

const ProfileOverview: React.FC = () => {
    const [about] = useState(
        "Fitness enthusiast focused on strength training and overall wellness. Training consistently for 2 years. Looking to push my limits and achieve new personal records in deadlifts and squats while maintaining a balanced lifestyle.",
    );

    const [cards] = useState<InfoCard[]>([
        {
            title: "Fitness Goal",
            value: "Build Muscle",
            icon: Goal,
        },
        {
            title: "Preferred Training",
            value: "Both (Online & Gym)",
            icon: Dumbbell,
        },
    ]);
    const { data, isLoading } = useQuery({
        queryKey: ["profile-Overview"],
        queryFn: getProfileOverview,
    });

    return (
        <div className=" text-white px-4 md:px-8 ">
            <h2 className="text-3xl font-semibold mb-6">
                Profile Overview
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img
                    src={data?.uploadimage}
                    className="w-32 md:w-40  rounded-full" />
                <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-3">
                        <button className="bg-[#FF4D4D] px-9 py-2.5 rounded-md tracking-tight text-xs font-bold hover:bg-black border border-[#FF4D4D] transition">
                            Upload New {data?.uploadimage}
                        </button>
                        <button className="border border-[#FF4D4D] px-9 py-2.5 rounded-md text-xs font-bold hover:bg-[#FF4D4D] transition">
                            Remove {data?.removeimage}
                        </button>
                    </div>
                    <p className=" text-[#A7A7A7] text-xs">
                        JPG, GIF or PNG. Max size of 800K
                    </p>
                </div>
            </div>
            <div className="mb-6 border-b border-[#A7A7A7] pb-10 ">
                <h3 className="mb-2 font-semibold text-2xl">
                    About Me
                </h3>
                <p className="text-[#A7A7A7] text-xl  leading-6 w-full md:w-4/5">
                    {about}
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 border-b pb-5 border-[#A7A7A7]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col border-l border-[#FF4D4D] rounded-lg px-4 py-15  text-center justify-center ">
                        <div className="flex items-center justify-center mb-2 ">
                            <card.icon size={20} className="mr-1" />
                            <p className="text-[#FFFFFF] text-2xl">
                                {card.title}
                            </p>
                        </div>
                        <p className="mt-2 font-light text-[#FFFFFF] text-lg border-0 bg-[#5F97F60D] rounded-md py-2">
                            {card.value}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProfileOverview;
