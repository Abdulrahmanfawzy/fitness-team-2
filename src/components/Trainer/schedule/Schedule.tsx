import { useState } from "react";
import TimeSlot from "./TimeSlot";
import Calendar from "./Calendar";
import { trainers } from "@/components/lib/constants/Trainer/TrainerData";
import { Link } from "react-router-dom";
import type {
  Availability,
  AvailabilityException,
  Trainer,
} from "@/lib/types/Trainer/TrainerTypes";
import {
  generateTimeSlots,
  getScheduleForDate,
} from "@/components/utils/scheduleUtils";

interface Props {
  trainerData: Trainer;
}

const Schedule = ({ trainerData }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2));
  const year = currentMonth.getFullYear();
  const trainerName = trainerData.name;
  const scheduleInfo = startDate
    ? getScheduleForDate(
        startDate,
        trainerData.availability,
        trainerData.availability_exceptions,
      )
    : null;

  const timeSlots =
    scheduleInfo?.isAvailable &&
    scheduleInfo.start_time &&
    scheduleInfo.end_time
      ? generateTimeSlots(scheduleInfo.start_time, scheduleInfo.end_time)
      : [];

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div className="mb-12 max-w-5xl mx-auto p-5">
      <h3 className="text-3xl font-bold text-center mb-2">
        Schedule your session
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Pick your preferred date and start your fitness journey.
      </p>
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6">
        <Calendar
          startDate={startDate}
          setStartDate={setStartDate}
          availability={trainerData.availability}
          availability_exceptions={trainerData.availability_exceptions}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          onRangeChange={() => setSelectedTime(null)}
        />
        <TimeSlot
          timeSlots={timeSlots}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          scheduleInfo={scheduleInfo}
          startDate={startDate}
        />
      </div>

      {/* Bottom summary bar */}
      {startDate && selectedTime && (
        <div className="mt-4 bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/40 mb-1">Selected Dates:</p>
            <p className="text-white font-semibold text-base">
              {formatDate(startDate)}
              {endDate && endDate.toDateString() !== startDate.toDateString()
                ? ` - ${formatDate(endDate)}`
                : ""}
              <span className="text-white/40 mx-2">•</span>
              {selectedTime}
            </p>
          </div>
          <Link
            to={`/booking-confirmed/${trainers[0].id}`}
            state={{ selectedTime, currentMonth, year, trainerName }}
            className="bg-[#e8453c] hover:bg-[#d63a31] text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
          >
            Continue booking →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Schedule;
