import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TimeSlot from "./TimeSlot";
import Calendar from "./Calendar";


const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  return (
    <div className="mb-12 max-w-5xl mx-auto p-5">
      <h3 className="text-3xl font-bold text-center mb-2">
        Schedule your session
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Pick your preferred date and start your fitness journey.
      </p>
      <div className="bg-card border border-border rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-6">
        {/* Calendar */}
        <Calendar date={selectedDate} setDate={setSelectedDate}/>

        {/* Time slots */}
        <TimeSlot date={selectedDate}/>
      
      </div>
    </div>
  );
};

export default Schedule;
