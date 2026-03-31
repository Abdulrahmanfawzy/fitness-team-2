import { useState } from "react";
import { Flame, Package, Clock } from "lucide-react";
import LineChartComponent from "@/pages/Profile/LineChartComponent";
import { useQuery } from "@tanstack/react-query";
import { getProgressActivity } from "@/lib/Api/Authentication/profile";
export default function ProgressActivity() {
  const [stats] = useState({
    streak: 8,
    total: 48,
    avg: 3.2,
    chart: [
      { month: "Jan", value: 10 },
      { month: "Feb", value: 13 },
      { month: "Mar", value: 14 },
      { month: "Apr", value: 8 },
      { month: "May", value: 11 },
      { month: "Jun", value: 13 },
      { month: "Jul", value: 14 },
      { month: "Aug", value: 10 },
      { month: "Sep", value: 11 },
      { month: "Oct", value: 13 },
      { month: "Nov", value: 13 },
      { month: "Dec", value: 11 },
    ],
    workouts: [
      { name: "Upper Body Strength", date: "Oct 18, 2024", time: "60 min", kcal: 420 },
      { name: "HIIT Cardio", date: "Oct 15, 2024", time: "45 min", kcal: 550 },
      { name: "Lower Body Power", date: "Oct 12, 2024", time: "60 min", kcal: 480 },
    ],
  });

  if (!stats) return <p>Loading...</p>;
  const { data, isLoading } = useQuery({
    queryKey: ["profile-progress-activity"],
    queryFn: getProgressActivity,
  });


  return (
    <div className=" px-4 md:px-8 mt-10 ">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Progress & Activity</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {[
          { icon: Flame, title: "Current Streak", value: `${stats.streak} Weeks` },
          { icon: Package, title: "Total Sessions", value: stats.total },
          { icon: Clock, title: "Avg. Weekly", value: stats.avg },
        ].map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="border border-[#FF4D4D] bg-[#FF4D4D0D] p-4 rounded-xl flex items-center gap-3">
              <Icon size={16} strokeWidth={0.7} className=" w-10 h-10" />
              <div>
                <p className=" text-lg">{c.title}</p>
                <p className="text-xl font-semibold">{c.value}</p>
              </div>
            </div>
          );
        })}
      </div>
      <LineChartComponent />
      <div className="border border-[#A7A7A7] rounded-2xl p-6">
        <h2 className="mb-4 text-2xl">Recent Workout History</h2>

        <div className="space-y-3">
          {stats.workouts.map((w, i) => (
            <div key={i} className="bg-[#2D2D2D] p-4 rounded-xl flex-col md:flex-row items-center">
              <div>
                <p className="text-lg mb-2">{w.name}</p>
                <p className="text-[#A7A7A7] text-xs">{w.date}</p>
              </div>

              <div className="flex gap-4 text-lg">
                <span>{w.time}</span>
                <span className="text-red-400">{w.kcal} kcal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}