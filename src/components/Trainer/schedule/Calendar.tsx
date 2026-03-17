import { getDaysInMonth, getFirstDayOfWeek } from "@/components/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface Props {
  date: number | null;
  setDate: React.Dispatch<React.SetStateAction<number | null>>;
}

const weekDays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"] as const;

const Calendar = ({ date, setDate }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2));
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfWeek = getFirstDayOfWeek(currentMonth);

  function goToNextMonth() {
    setCurrentMonth(
      (perv) => new Date(perv.getFullYear(), perv.getMonth() + 1, 1),
    );
  }

  function goToPreviousMonth() {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  const monthName = currentMonth.toLocaleString("default", { month: "long" });

  const year = currentMonth.getFullYear();
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-muted-foreground hover:text-foreground cursor-pointer"
          onClick={goToPreviousMonth}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-semibold">
          {monthName} {year}
        </span>
        <button
          className="text-muted-foreground hover:text-foreground cursor-pointer"
          onClick={goToNextMonth}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {weekDays.map((d) => (
          <div key={d} className="py-2 text-muted-foreground font-medium">
            {d}
          </div>
        ))}
        {blanks.map((b) => (
          <div key={`b-${b}`} />
        ))}
        {days.map((day) => {
          const isToday = day === 11;
          const isSelected = date === day;
          return (
            <button
              key={day}
              onClick={() => setDate(day)}
              className={`py-2 rounded-md transition-colors text-sm ${
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : isToday
                    ? "text-primary font-bold"
                    : "text-foreground hover:bg-accent"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
