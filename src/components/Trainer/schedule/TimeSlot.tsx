import {
  timeSlots,
  trainers,
} from "@/components/lib/constants/Trainer/TrainerData";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props{
    date: number | null
}

const TimeSlot = ({ date }: Props) => {
  const [selectedTime, setSelectedTime] = useState<string>("03:00 PM");

  return (
    <div className="md:w-48">
      <p className="text-sm font-medium mb-3">Time</p>
      <div className="space-y-2">
        {timeSlots.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTime(t)}
            className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
              selectedTime === t
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {date && (
        <div className="mt-6">
          <p className="text-xs text-muted-foreground mb-2">Selected Dates:</p>
          <p className="text-sm font-medium">
            March {date} • {selectedTime}
          </p>
          <Link
            to={`/booking-confirmed/${trainers[0].id}`}
            className="mt-4 block text-center bg-primary text-primary-foreground py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Continue booking →
          </Link>
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
