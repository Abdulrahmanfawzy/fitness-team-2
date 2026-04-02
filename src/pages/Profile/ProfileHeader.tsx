import { CalendarCheck2, Package, Clock, type LucideIcon } from "lucide-react";
import React, { useState } from "react";
import Profile from "@/assets/Profile.jpg";
import { useQuery } from "@tanstack/react-query";
import { getProfileHeader } from "@/lib/Api/Authentication/profile";
type User = {
    name: string;
    memberSince: number;
    image: string;
};

type Card = {
    icon: LucideIcon;
    title: string;
    value: string | number;
};

const ProfileHeader: React.FC = () => {
    const [user] = useState<User | null>({
        name: "Mohamed Alaa",
        memberSince: 2022,
        image: Profile,
    });
    const [cards] = useState<Card[]>([
        { icon: CalendarCheck2, title: "Sessions Completed", value: 48 },
        { icon: Package, title: "Active Package", value: "Single Pack" },
        { icon: Clock, title: "Next Session", value: "Today, 9:00 AM" },
    ]);

    if (!user) return null;
    const { data } = useQuery({
        queryKey: ["profile-header"],
        queryFn: getProfileHeader,
    });

    console.log(data)
    return (
        <div className="w-full  text-white p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <img
                        src={data?.image}
                        className="w-20 h-20 rounded-full" />
                    <div>
                        <h2 className="text-3xl tracking-wide font-bold">
                            {data?.name}
                        </h2>
                        <p className="font-extralight tracking-wide ">
                            Member since {data?.memberSince}
                        </p>
                    </div>
                </div>
                {/* <button className="border border-[#FF4D4D] px-4 md:px-10 py-3 bg-[#121212] rounded-md text-sm hover:bg-red-500 transition">
                    Edit profile {data?.editProfile}
                </button> */} 
                 {/* انا شيلت الزرار ده ككومنت لانى معرفش ايه وظيفته وملوش ايند بوينت محدده */}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={index}
                            className="flex border border-[#FF4D4D] rounded-lg p-5 bg-[#FF4D4D]/10 ">
                            <Icon size={16} strokeWidth={0.7} className="w-10 h-10 mr-5 " />
                            <div>
                                <p className="text-[#FFFFFF] text-xl font-extralight">
                                    {card.title}
                                </p>
                                <h3 className="text-2xl font-semibold mt-1">
                                    {card.value}
                                </h3></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ProfileHeader;