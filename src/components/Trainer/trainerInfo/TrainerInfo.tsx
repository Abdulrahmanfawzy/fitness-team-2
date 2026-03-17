import { trainers } from "@/components/lib/constants/Trainer/TrainerData";
import {
  Clock,
  Currency,
  CurrencyIcon,
  DollarSign,
  Euro,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const trainer = trainers[0];

const TrainerInfo = () => {
  return (
    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 mb-12 max-w-5xl mx-auto ">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full md:w-90  object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3">{trainer.name}</h3>
        <div className="flex flex-wrap gap-5 mb-3">
          {trainer.specialties.map((s) => (
            <span
              key={s}
              className="flex items-center gap-1 text-xs bg-secondary px-3 py-1 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {s}
            </span>
          ))}
        </div>
        <p className=" text-accent-foreground mb-2">
          Helping clients build strength for {trainer.experience} experience
        </p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin size={17} className="text-primary" /> {trainer.location}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <DollarSign size={17} className="text-primary" /> From{" "}
          <span className="text-xl"> EGP {trainer.price}</span> /session
        </div>
        <Link
          to={`/booking-confirmed/${trainer.id}`}
          className="inline-block bg-primary px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors w-120 text-center text-accent-foreground"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default TrainerInfo;
