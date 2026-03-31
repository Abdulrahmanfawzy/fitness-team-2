import { useState } from "react"
import NotificationCard from "@/pages/Notifications/NotificationCard"
import { CalendarCheck2, CheckCheck } from "lucide-react"

export default function Bookings() {
  const [data] = useState({
    today: [
      {
        title: "Booking Confirmed",
        desc: "Your session with Coach Alex is confirmed for tomorrow at 6 PM",
        time: "2h ago",
        icon: CalendarCheck2,
        active: true,
      },
      {
        title: "Session Rescheduled",
        desc: "Reminder: Your training session starts in 1 hour",
        time: "7h ago",
        icon: CalendarCheck2,
        active: true,
      },
    ],

    earlier: [
      {
        title: "Session Rescheduled",
        desc: "Reminder: Your training session starts in 1 hour",
        time: "1d ago",
        icon: CalendarCheck2,
      },
    ],
  })

  return (
    <div className=" w-full  text-white p-4 md:p-8">
      <h1 className="text-xl mb-3 font-semibold">Bookings</h1>
      <div>
        <div className="flex justify-between mb-3">
           Today
          <CheckCheck className="w-4 text-red-500" />
        </div>

        <div className="space-y-3">
          {data.today.map((item, i) => (
            <NotificationCard key={i} {...item} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-2 mb-3">
          Earlier
          <CheckCheck className="w-4 " />
        </div>

        <div className="space-y-3">
          {data.earlier.map((item, i) => (
            <NotificationCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}